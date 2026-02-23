window.onload = () => {
    
    var images = [
        'img/ball_flame.png',
        'img/bitmap.png',
        'img/git_white.png',
        'img/mutant.png'
    ];
    var colorImages = [
        '#da21ff',
        '#ffffff',
        '#000000',
        '#fae104'
    ];

    var num = 0;
    var back = document.getElementById('back')
    var next = document.getElementById('next')
    
    back.addEventListener('click', () => {
        var slider = document.getElementById('slider')
        num--;
        if(num < 0) num = images.length-1;
        slider.src = images[num];
        slider.style.backgroundColor = colorImages[num];
    })
    
    next.addEventListener('click', () => {
        var slider = document.getElementById('slider')
        num++;
        if(num >= images.length) num = 0;
        slider.src = images[num]
        slider.style.backgroundColor = colorImages[num];
    })
}