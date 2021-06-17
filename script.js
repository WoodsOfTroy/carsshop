let cars = [{brand: 'BMW', price:70000, color:'black', model:'m5'}, 
        {brand: 'BMW', price:18000, color:'white', model:'E39'},
        {brand: 'Dodge', price:100000, color:'red', model:'Chalenger'},
        {brand: 'Dodge', price:180000, color:'red', model:'Viper'},
        {brand: 'AUDI', price:200000, color:'yellow', model:'R8'},
        {brand: 'AUDI', price:38000, color:'black', model:'A3'},
        {brand: 'Bugatti', price:1700000, color:'blue', model:'Veyron'},
        {brand: 'Aston Martin', price:170000, color:'orange', model:'Rapid'},
        {brand: 'Toyota', price:10000, color:'red', model:'Yaris'},
        {brand: 'Toyota', price:25000, color:'black', model:'RAV4'},
        {brand: 'Land Rover', price:30000, color:'green', model:'Defender'},
        {brand: 'Range Rover', price:78000, color:'black', model:'Sport'},
        {brand: 'Skoda', price:20000, color:'white', model:'Octavia'},
        {brand: 'Skoda', price:15000, color:'blue', model:'Fabia'}];

// Функция заполнения селект-списка
$.each(cars, function(index, car){ 
    $('#color').first().append(`<option value="" selected>--Выберите цвет--</option>`).append(`<option value="${car.color}">${car.color}</option>`);
});
// Функция удаления дубликатов из списка цветов
$("#color option").val(function(idx, val) {
    $(this).siblings('[value="'+ val +'"]').remove();
  });
// Функция вывода полного списка автомобилей
$(document).ready(function(){
    $.each(cars, function(index, car){
        $('.cars').append(`<div class="car"><div class="photo">photo</div><div class="specification"><h1>${car.brand} ${car.model}</h1><span>Color: ${car.color}</span><h2>${car.price}</h2></div></div>`);
    });
});
function checkPrice(arr)
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
function checkBrand (arr)
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
function checkModel (arr)
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
function checkColor (arr)
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
// Выполнения по нажатию кнопки
$('button').click(function(){
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
            // carList(sortedCars); 
        }
    // });
    $.each(sortedCars, function(index, car)
    {
        $('.cars').append(`<div class="car"><div class="photo">photo</div><div class="specification"><h1>${car.brand} ${car.model}</h1><span>Color: ${car.color}</span><h2>${car.price}</h2></div></div>`);
    });
      
    
})