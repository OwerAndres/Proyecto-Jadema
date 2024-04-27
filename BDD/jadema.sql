create database if not exists jadema;
use jadema;

/*Usuarios*/
create table if not exists usuarios(
	id int auto_increment primary key,
    nombre varchar(30) not null,
    apellido varchar(30) not null,
    apellidoDos varchar(30),
	telefono VARCHAR(10) NOT NULL CHECK (LENGTH(telefono) = 10 AND telefono REGEXP '^[0-9]{10}$'),
    correo varchar(50) not null unique,
    usuario varchar(50) not null unique,
    pwd VARCHAR(12) NOT NULL UNIQUE CHECK (LENGTH(pwd) BETWEEN 8 AND 12)
);

select*from usuarios;



/*Productos*/
create table if not exists productos(
	id int auto_increment primary key,
    nombre varchar(50) not null,
    precio int not null check(precio > 0),
    imgURL varchar(1000) not null,
    tipo varchar(50) not null check(tipo in ('camiseta','crop tops')),
    categoria varchar(50) not null check(categoria in ('anime','phonk','autos','motos','japon')),
        talla varchar(80) not null check(
        talla like 'S %' or 
        talla like 'M %' or 
        talla like 'L %' or 
        talla like 'XL %' or 
        talla like 'XXL %' or 
        talla like '% S' or 
        talla like '% M' or 
        talla like '% L' or 
        talla like '% XL' or 
        talla like '% XXL'
        ),
	color varchar(50) not null check(color in ('negro','blanco'))
);


insert into productos(nombre, precio, imgURL, tipo, categoria, talla, color) 
values 
('Wolf Man', 10000, 'img/imgProducts/wolfMan_two.png', 'camiseta', 'japon', 'S M XXL', 'negro'),
('Snake Demon', 13000,'img/imgProducts/snakeDemon_two.png','camiseta','japon','XL XXL', 'negro'),
('Small Demon', 8000, 'img/imgProducts/smallDemon_crop.png','crop tops','japon','S M L', 'negro'),
('S100RR',13000,'img/imgProducts/S100RR_front.png img/imgProducts/S100RR_back.png','camiseta','motos', 'L XL XXL', 'blanco'),
('Revenge Dragon',8000,'img/imgProducts/revengeDragon_crop.png','crop tops','japon', 'S M L', 'negro'),
('Revenge',6000,'img/imgProducts/revenge_two.png','crop tops','japon','S M L', 'negro'),
('Rengoku Demon Slayer',7000,'img/imgProducts/rengoku_front.png img/imgProducts/rengoku_back.png','camiseta','anime','M L XL', 'negro'),
('Ramen', 6000,'img/imgProducts/ramen_crop.png','crop tops','japon','S M XXL', 'negro'),
('Psyco',6000,'img/imgProducts/psyco_crop.png','crop tops','phonk','S M L', 'negro'),
('Purple Girl Phonk',10000,'img/imgProducts/phonk_front.png img/imgProducts/phonk_back.png','camiseta','phonk','S L XL XXL', 'negro'),
('Oddyse Car', 9000, 'img/imgProducts/oddyseCar_two.png','camiseta','autos','XL XXL', 'negro'),
('1200 Super Duke R', 11000,'img/imgProducts/ktm_two.png','camiseta','motos','M L XXL', 'negro'),
('Kawasaki H2R',11000,'img/imgProducts/kawasakyH2R_front.png img/imgProducts/kawasakyH2R_back.png','camiseta','motos','L XL XXL', 'blanco'),
('Humanity',6000,'img/imgProducts/humanity_front.png','camiseta','phonk','S L M', 'negro'),
('Crop Top / Honey',6000,'img/imgProducts/honey_crop.png','crop tops','phonk','L M XL', 'blanco'),
('Hello Kitty',8000,'img/imgProducts/helloKitty_crop.png','crop tops','phonk','L XL XXL', 'blanco'),
('Demon Gold',10000,'img/imgProducts/goldDemon_two.png','camiseta','japon','XL XXL', 'negro'),
('Ghost Man',7000,'img/imgProducts/ghostMan_crop.png','crop tops','phonk','S M L', 'negro'),
('Gengar Ghost',9000,'img/imgProducts/gengar2_two.png','camiseta','anime','M L XL XXL', 'negro'),
('Gengar in the City',9000,'img/imgProducts/gengar1_two.png','camiseta','anime','M L XXL', 'blanco'),
('Payaso off',13000,'img/imgProducts/fuckOff_two.png','camiseta','phonk','S M L', 'negro'),
('Demon in the Flame',18000,'img/imgProducts/flameDemon_two.png','camiseta','japon','L XL XXL', 'negro'),
('Group Friends Kiss',15000,'img/imgProducts/figurinesKisses_crop.png','crop tops','phonk','S M XL', 'blanco'),
('The ducati panigale V4',8000,'img/imgProducts/ducatiV4_front.png img/imgProducts/ducatiV4_back.png','camiseta','motos','M L XL XXL', 'negro'),
('The Demon Dragon',17500,'img/imgProducts/dragonDemon_two.png','camiseta','japon','XL XXL', 'negro'),
('The Dragon Car',20000,'img/imgProducts/dragonCar_two.png','camiseta','japon','L XL XXL', 'negro'),
('Crop Top / The Dragon',15000,'img/imgProducts/dragon_crop.png','crop tops','japon','S M L', 'blanco'),
('The Demon',13000,'img/imgProducts/demon_two.png','camiseta','japon','XL XXL', 'negro'),
('The Demon',6000,'img/imgProducts/demon_crop.png','crop tops','japon','S M XL', 'negro'),
('The Dead to Me',18000,'img/imgProducts/deadToMe_crop.png','crop tops','phonk','M L', 'negro'),
('The Car GT3',18000,'img/imgProducts/carGT3_front.png img/imgProducts/carGT3_back.png','camiseta','autos','S M L XL XXL', 'blanco'),
('The Formule One',20000,'img/imgProducts/carF1_front.png img/imgProducts/carF1_back.png','camiseta','autos','L XL XXL', 'negro'),
('The Butterfly Map',19000,'img/imgProducts/butterflyMap_front.png img/imgProducts/butterflyMap_back.png','camiseta','phonk','S M L', 'negro'),
('Bunny Love',8000,'img/imgProducts/bunnyLove_crop.png','crop tops','phonk','S M', 'negro'),
('Beauty Butterfly',9000,'img/imgProducts/beauty_crop.png','crop tops','phonk','S M', 'blanco'),
('The Ghost Man',10000,'img/imgProducts/ghostMan_two.png','camiseta','phonk','L XL XXL', 'negro'),
('The Demon Fish',9500,'img/imgProducts/demonFish_two.png','camiseta','japon','XL XXL', 'negro'),
('Golden Fish',9500,'img/imgProducts/goldenFish_two.png','camiseta','japon','XL XXL', 'blanco'),
('Renaissance 888',10000,'img/imgProducts/renassinPhonk_two.png','camiseta','phonk','S M L XL XXL', 'negro'),
('The Demon Phonk', 18000,'img/imgProducts/demonPhonk_two.png','camiseta','phonk','M L XXL', 'negro'),
('The Tiger Rose',18000,'img/imgProducts/tigerRose_two.png','camiseta','phonk','S M L', 'negro'),
('The Life Style Wolf',9000,'img/imgProducts/lifeStyleWolf_two.png','camiseta','phonk','S M L', 'negro');

SELECT * FROM productos WHERE 1 AND categoria IN ('motos','anime');


/*Favoritos*/
create table if not exists favoritos(
	id int auto_increment primary key,
    id_usuario int,
    id_producto int
);
	/*Constrains*/
	ALTER TABLE favoritos
		ADD CONSTRAINT fk_favorito_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
		ADD CONSTRAINT fk_favorito_producto FOREIGN KEY (id_producto) REFERENCES productos(id);

create table if not exists carrito(
	id int auto_increment primary key,
    id_producto int,
    id_usuario int
);
	/*Constrain*/
		ALTER TABLE carrito
			ADD CONSTRAINT fk_carrito_producto FOREIGN KEY (id_producto) REFERENCES productos(id),
			ADD CONSTRAINT fk_carrito_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id);

/*Direccion*/
create table if not exists direccion(
	id int auto_increment primary key,
    calle_y_numero varchar(150) not null,
    barrio varchar(50) not null,
    ciudad varchar(40),
    id_usuario int
);
    ALTER TABLE direccion
        ADD CONSTRAINT fk_usuario_direccion FOREIGN KEY (id_usuario) REFERENCES usuarios(id);
/*Pedido*/
create table if not exists pedido(
	id int auto_increment primary key,
    id_carrito int,
    id_direccion int,
    id_usuario int
);
	/*Constrain*/
		alter table pedido
			add constraint fk_pedido_carrito foreign key(id_carrito) references carrito(id),
            add constraint fk_pedido_direccion foreign key(id_direccion) references direccion(id),
            add constraint fk_pedido_usuario foreign key(id_usuario) references usuarios (id);
