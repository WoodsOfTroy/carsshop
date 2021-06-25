let cars = [{brand: 'BMW', price:70000, color:'black', model:'m5', photo: 'img/bmw_m5.jpg'}, 
        {brand: 'BMW', price:18000, color:'white', model:'E39', photo: 'img/bmwe39.jpg'},
        {brand: 'Dodge', price:100000, color:'red', model:'Challenger', photo: 'img/dodge_challenger.jpg'},
        {brand: 'Dodge', price:180000, color:'red', model:'Viper', photo: 'img/dodge_viper.jpg'},
        {brand: 'AUDI', price:200000, color:'yellow', model:'R8', photo: 'img/audi_r8.jpg'},
        {brand: 'AUDI', price:38000, color:'black', model:'A3', photo: 'img/audi_a3.jpg'},
        {brand: 'Bugatti', price:1700000, color:'blue', model:'Veyron', photo: 'img/bugatti_veyron.jpg'},
        {brand: 'Aston Martin', price:170000, color:'orange', model:'Rapid', photo: 'img/am_rapid.jpg'},
        {brand: 'Toyota', price:10000, color:'red', model:'Yaris', photo: 'img/toyota_yaris.jpg'},
        {brand: 'Toyota', price:25000, color:'black', model:'RAV4', photo: 'img/toyota_rav4.jpg'},
        {brand: 'Land Rover', price:30000, color:'green', model:'Defender', photo: 'img/lr_defender.jpg'},
        {brand: 'Range Rover', price:78000, color:'black', model:'Sport', photo: 'img/rr_sport.jpg'},
        {brand: 'Skoda', price:20000, color:'white', model:'Octavia', photo: 'img/scoda_octavia.jpg'},
        {brand: 'Skoda', price:15000, color:'blue', model:'Fabia', photo: 'img/Skoda_Fabia.jpg'}];

$.each(cars, function(index, car){   // Функция заполнения селект-списка
    $('#color').first().append(`<option value="" selected>--Выберите цвет--</option>`).append(`<option value="${car.color}">${car.color}</option>`);
});
// Функция удаления дубликатов из списка цветов
$("#color option").val(function(idx, val) {
    $(this).siblings('[value="'+ val +'"]').remove();
  });
$(document).ready(function(){               // Функция вывода полного списка автомобилей
    $.each(cars, function(index, car){
        $('.cars').append(`<div class="car"><div class="photo"><a data-fancybox="gallery" href="${car.photo}"><img src="${car.photo}" alt="${car.brand} ${car.model}"></a></div><div class="specification"><h1>${car.brand} ${car.model}</h1><span>Color: ${car.color}</span><h2>${car.price}</h2></div></div>`);
    });
});

function checkPrice(arr)       //Функция проверки введенной цены 
{
    let sortedCars = [];
    $.each(arr, function(index, car){
    if($('#price').val() != '')
    {
        if ($('input[id="more"]').is(':checked'))
        {
            if (car.price > $('#price').val())
            {
                sortedCars.push(car);
            }
        } else if ($('input[id="equel"]').is(':checked'))
            {
            if (car.price == $('#price').val())
            {
                sortedCars.push(car);
            }
        } else if ($('input[id="less"]').is(':checked'))
            {
                if (car.price < $('#price').val())
            {
                sortedCars.push(car);
            }    
        }
    }
});
    return sortedCars;
}
function checkBrand (arr)     //Функция проверки введенного производителя авто
{
    let sortedCars = [];
    $.each(arr, function(index, car){
    if($('#brand').val() != '')
        {
            if ($('#brand').val() === car.brand)
            {
               
                sortedCars.push(car);
            }
        }
    });
    return sortedCars;
}
function checkModel (arr)       //Функция проверки модели авто
{
    let sortedCars = [];
    $.each(arr, function(index, car){
        if($('#model').val() != '')
        {
            if ($('#model').val() === car.model)
            {            
                sortedCars.push(car);
            }
        }
    });
    return sortedCars;
}
function checkColor (arr)      //Функция проверки введенного цвета
{
    let sortedCars = [];
    $.each(arr, function(index, car){
        if ($('#color option:selected').text() === car.color || $('#color option').first().is(':selected'))
        {
            sortedCars.push(car);
        }    
    });
    return sortedCars;
}
$('button').click(function(){            // Выполнения по нажатию кнопки
    let sortedCars = [];
    $('.cars').empty();
    // $.each(cars, function(index, car){
        if($('#price').val() != '')
        {
            sortedCars = checkPrice(cars);
            if($('#brand').val() != '')
            {
                sortedCars = checkBrand(sortedCars);
            } else if ($('#model').val() != '')
            {
                sortedCars = checkModel(sortedCars);
            } else if ($('#color option').is(':selected'))
            {
                sortedCars = checkColor(sortedCars);
            }
            // carList(sortedCars); 
        } else if($('#brand').val() != '')
        {
            sortedCars = checkBrand(cars);
            if($('#price').val() != '')
            {
                sortedCars = checkPrice(sortedCars);
            } else if ($('#model').val() != '')
            {
                sortedCars = checkModel(sortedCars);
            } else if ($('#color option').is(':selected'))
            {
                sortedCars = checkColor(sortedCars);
            }
            // carList(sortedCars);  
        } else if($('#model').val() != '')
        {
            sortedCars = checkModel(cars);
            if($('#price').val() != '')
            {
                sortedCars = checkPrice(sortedCars);
            } else if ($('#brand').val() != '')
            {
                sortedCars = checkBrand(sortedCars);
            } 
            else if ($('#color option').is(':selected'))
            {
                sortedCars = checkColor(sortedCars);
            }
            // carList(sortedCars);  
        } else if($('#color option').is(':selected'))
        {
            sortedCars = checkColor(cars);
            if($('#price').val() != '')
            {
                sortedCars = checkPrice(sortedCars);
            } else if ($('#brand').val() != '')
            {
                sortedCars = checkBrand(sortedCars);
            } else if ($('#model').val() != '')
            {
                sortedCars = checkModel(sortedCars);
            }
        }
    $.each(sortedCars, function(index, car)     //Выведение отсортированного массива на экран
    {
        $('.cars').append(`<div class="car"><div class="photo"><a data-fancybox="gallery" href="${car.photo}"><img src="${car.photo}" alt="${car.brand} ${car.model}"></a></div><div class="specification"><h1>${car.brand} ${car.model}</h1><span>Color: ${car.color}</span><h2>${car.price}</h2></div></div>`);
    });
      
    
});

$("body").niceScroll({        //Новый скрол
    cursorcolor: "#3e4a5c",
    cursorwidth: "20px"
});