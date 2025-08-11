# Script de PowerShell para eliminar archivos .ini
# Elimina todos los archivos .ini en el directorio actual y subdirectorios
# Incluye archivos ocultos y del sistema

param(
    [switch]$Force,
    [switch]$WhatIf,
    [switch]$IncludeHidden
)

Write-Host "=== ELIMINADOR DE ARCHIVOS .INI (PowerShell) ===" -ForegroundColor Cyan
Write-Host ""

# Obtener el directorio actual
$directorioActual = Get-Location
Write-Host "Buscando archivos .ini en: $directorioActual" -ForegroundColor Yellow

# Configurar parámetros de búsqueda
$parametrosBusqueda = @{
    Path = $directorioActual
    Filter = "*.ini"
    Recurse = $true
    File = $true
    Force = $true  # Incluye archivos ocultos y del sistema
}

# Si se especifica -IncludeHidden, mostrar información adicional
if ($IncludeHidden) {
    Write-Host "Incluyendo archivos ocultos y del sistema..." -ForegroundColor Magenta
}

# Buscar todos los archivos .ini de forma recursiva (incluyendo ocultos)
$archivosIni = Get-ChildItem @parametrosBusqueda

if ($archivosIni.Count -eq 0) {
    Write-Host "No se encontraron archivos .ini" -ForegroundColor Green
    exit
}

Write-Host "Se encontraron $($archivosIni.Count) archivo(s) .ini:" -ForegroundColor Yellow

# Mostrar los archivos encontrados con información de atributos
foreach ($archivo in $archivosIni) {
    $atributos = @()
    if ($archivo.Attributes -band [System.IO.FileAttributes]::Hidden) { $atributos += "Oculto" }
    if ($archivo.Attributes -band [System.IO.FileAttributes]::System) { $atributos += "Sistema" }
    if ($archivo.Attributes -band [System.IO.FileAttributes]::ReadOnly) { $atributos += "Solo-Lectura" }

    $infoAtributos = if ($atributos.Count -gt 0) { " [$($atributos -join ', ')]" } else { "" }
    Write-Host "  - $($archivo.FullName)$infoAtributos" -ForegroundColor Gray
}

Write-Host ""

# Si se usa -WhatIf, solo mostrar qué se haría
if ($WhatIf) {
    Write-Host "MODO SIMULACIÓN: Los siguientes archivos serían eliminados:" -ForegroundColor Magenta
    foreach ($archivo in $archivosIni) {
        $atributos = @()
        if ($archivo.Attributes -band [System.IO.FileAttributes]::Hidden) { $atributos += "Oculto" }
        if ($archivo.Attributes -band [System.IO.FileAttributes]::System) { $atributos += "Sistema" }
        if ($archivo.Attributes -band [System.IO.FileAttributes]::ReadOnly) { $atributos += "Solo-Lectura" }

        $infoAtributos = if ($atributos.Count -gt 0) { " [$($atributos -join ', ')]" } else { "" }
        Write-Host "  - $($archivo.FullName)$infoAtributos" -ForegroundColor Magenta
    }
    Write-Host "Ejecuta sin -WhatIf para eliminar realmente los archivos" -ForegroundColor Magenta
    exit
}

# Si no se usa -Force, pedir confirmación
if (-not $Force) {
    $respuesta = Read-Host "¿Estás seguro de que quieres eliminar todos estos archivos? (s/N)"
    if ($respuesta -notmatch "^[sSyY]") {
        Write-Host "Operación cancelada" -ForegroundColor Red
        exit
    }
}

# Eliminar los archivos
$archivosEliminados = 0
$errores = 0

foreach ($archivo in $archivosIni) {
    try {
        # Si el archivo es de solo lectura, intentar cambiar atributos primero
        if ($archivo.Attributes -band [System.IO.FileAttributes]::ReadOnly) {
            try {
                $archivo.Attributes = $archivo.Attributes -band (-bnot [System.IO.FileAttributes]::ReadOnly)
                Write-Host "  Cambiando atributos de solo-lectura para: $($archivo.Name)" -ForegroundColor Yellow
            }
            catch {
                Write-Host "  No se pudieron cambiar atributos de: $($archivo.Name)" -ForegroundColor Yellow
            }
        }

        Remove-Item -Path $archivo.FullName -Force
        Write-Host "✓ Eliminado: $($archivo.FullName)" -ForegroundColor Green
        $archivosEliminados++
    }
    catch {
        Write-Host "✗ Error al eliminar $($archivo.FullName): $($_.Exception.Message)" -ForegroundColor Red
        $errores++
    }
}

Write-Host ""
Write-Host "Proceso completado:" -ForegroundColor Cyan
Write-Host "  - Archivos eliminados: $archivosEliminados" -ForegroundColor Green
if ($errores -gt 0) {
    Write-Host "  - Errores: $errores" -ForegroundColor Red
}

Write-Host ""
Write-Host "Nota: El script incluye archivos ocultos y del sistema por defecto" -ForegroundColor Cyan
Write-Host "Usa -IncludeHidden para información adicional sobre atributos" -ForegroundColor Cyan
