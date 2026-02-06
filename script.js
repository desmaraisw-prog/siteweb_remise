let money = 0;
let power = 1;
let miner_power=1;
let price_better_pickaxe = 10;
let price_even_better_pickaxe = 100;
let price_best_pickaxe = 1000;
let price_baseminer = 1;
let price_better_pickaxe_miner = 1000;
let price_even_better_pickaxe_miner = 10000;
let price_best_pickaxe_miner = 100000;
let price_custum_pickaxe_miner = 1000000;
let price_god_button = 0;

function mine(){
    money += power;
    document.getElementById("money").innerHTML = money;
}
function miner_mine(){
    money += miner_power;
    document.getElementById("money").innerHTML = money;
}

function buybetterpickaxe(){
    if (money >= price_better_pickaxe){
        money -= price_better_pickaxe;
        document.getElementById("money").innerHTML = money;
        power += 1;
        price_better_pickaxe = Math.floor(price_better_pickaxe * 1.2);
        document.getElementById("price_better_pickaxe").innerHTML = price_better_pickaxe;
    }
}
function buyevenbetterpickaxe(){
    if (money >= price_even_better_pickaxe){
        money -= price_even_better_pickaxe;
        document.getElementById("money").innerHTML = money;
        power += 10;
        price_even_better_pickaxe = Math.floor(price_even_better_pickaxe * 1.2);
        document.getElementById("price_even_better_pickaxe").innerHTML = price_even_better_pickaxe;
    }
}
function buybestpickaxe(){
    if (money >= price_best_pickaxe){
        money -= price_best_pickaxe;
        document.getElementById("money").innerHTML = money;
        power += 100;
        price_best_pickaxe = Math.floor(price_best_pickaxe * 1.2);
        document.getElementById("price_best_pickaxe").innerHTML = price_best_pickaxe;
    }
}   

function buybaseminer(){
    if (money >= price_baseminer){
        money -= price_baseminer;
        document.getElementById("money").innerHTML = money;
        setInterval(miner_mine, 1000);
        price_baseminer = Math.floor(price_baseminer * 2);
        document.getElementById("price_baseminer").innerHTML = price_baseminer;
    }
}
function buybetterpickaxe_miner(){
   if (money >= price_better_pickaxe_miner){
        money -= price_better_pickaxe_miner;
        document.getElementById("money").innerHTML = money;
        setInterval(miner_mine, 100);
        price_better_pickaxe_miner = Math.floor(price_better_pickaxe_miner * 2);
        document.getElementById("price_better_pickaxe_miner").innerHTML = price_better_pickaxe_miner;
    }
}
function buyevenbetterpickaxe_miner(){
   if (money >= price_even_better_pickaxe_miner){
        money -= price_even_better_pickaxe_miner;
        document.getElementById("money").innerHTML = money;
        setInterval(miner_mine, 10);
        price_even_better_pickaxe_miner = Math.floor(price_even_better_pickaxe_miner * 2);
        document.getElementById("price_even_better_pickaxe_miner").innerHTML = price_even_better_pickaxe_miner;
    }
}
function buybestpickaxe_miner(){
   if (money >= price_best_pickaxe_miner){
        money -= price_best_pickaxe_miner;
        document.getElementById("money").innerHTML = money;
        setInterval(miner_mine, 1);
        price_best_pickaxe_miner = Math.floor(price_best_pickaxe_miner * 2);
        document.getElementById("price_best_pickaxe_miner").innerHTML = price_best_pickaxe_miner;
    }
}
function buycustumpickaxe_miner(){
   if (money >= price_custum_pickaxe_miner){
        money -= price_custum_pickaxe_miner;
        document.getElementById("money").innerHTML = money;
        setInterval(mine, 100);
        price_custum_pickaxe_miner = Math.floor(price_custum_pickaxe_miner * 2);
        document.getElementById("price_custum_pickaxe_miner").innerHTML = price_custum_pickaxe_miner;
    }
}