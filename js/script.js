let images = ['https://avatars.dzeninfra.ru/get-zen_doc/3636601/pub_60052577f8b1af50bbf4b531_60053a7c0cf4a170b9f516bd/scale_1200',
    'https://avatars.dzeninfra.ru/get-zen_doc/3446134/pub_60052577f8b1af50bbf4b531_600525bbf8011c4a01151994/scale_1200',
    'https://avatars.dzeninfra.ru/get-zen_doc/3413906/pub_60052577f8b1af50bbf4b531_6005261bf8011c4a01158fe1/scale_1200'
];

let slider = document.querySelector('#slider');
let i = 0;
let img = document.createElement('img');

setInterval(() => {
    img.src = images[i];
    document.body.append(img);
    img.height = 200;
    i++;
    if (i == images.length) {
        i = 0;
    }
    console.log(i);
}, 1000)