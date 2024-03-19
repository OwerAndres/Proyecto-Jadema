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
    pwd varchar(9) not null unique
);

/*Productos*/
create table if not exists productos(
	id int auto_increment primary key,
    nombre varchar(50) not null,
    precio int not null check(precio > 0),
    imgURL varchar(100) not null,
    tipo varchar(50) not null check(tipo in ('camiseta','crop tops')),
    categoria varchar(50) not null check(categoria in ('anime','phonk','autos','motos','japon')),
    talla varchar(40) not null check(talla in ('S','M','L','XL','XXL'))
);

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
            add constraint fk_pedido_usuario foreign key(id_usuario) references usuarios (id)

