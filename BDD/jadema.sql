create database if not exists jadema;
use jadema;

/*Usuarios*/
create table if not exists usuario_register(
	id int auto_increment primary key,
    nombre varchar(30) not null,
    apellido varchar(30) not null,
    apellidoDos varchar(30),
	telefono VARCHAR(10) NOT NULL CHECK (LENGTH(telefono) = 10 AND telefono REGEXP '^[0-9]{10}$'),
    correo varchar(50) not null unique,
    pwd varchar(9) not null unique
);

DELIMITER //
CREATE TRIGGER insert_usuario_login AFTER INSERT ON usuario_register
FOR EACH ROW
BEGIN
    INSERT INTO usuarios_login (usuario, correo, pwd, id_usuario)
    VALUES (NEW.nombre, NEW.correo, NEW.pwd, NEW.id);
END;
//
DELIMITER ;

create table if not exists usuarios_login(
	id int auto_increment primary key,
    usuario varchar(30) not null,
    correo varchar(50) not null unique,
    pwd varchar(9) not null unique,
    id_usuario int,
    FOREIGN KEY (id_usuario) REFERENCES usuario_register(id)
);

/*Productos*/
create table if not exists productos(
	id int auto_increment primary key,
    nombre varchar(50) not null,
    precio int not null check(precio > 0),
    imgURL varchar(100) not null
);

create table if not exists categorias(
	id int auto_increment primary key,
    categoria varchar(40) not null check(categoria in ('camiseta','crop tops','anime','phonk','autos','motos','japon')),
	id_producto int,
    foreign key(id_producto) references productos(id)
);

create table if not exists stock(
	id int auto_increment primary key,
    stock int not null check(stock >= 0),
    id_producto int,
    foreign key (id_producto) references productos (id)
);

create table if not exists carrito(
	id int auto_increment primary key,
    id_producto int,
    id_categoria int,
    id_stock int,
    id_usuario int
);
	/*Constrain*/
		ALTER TABLE carrito
			ADD CONSTRAINT fk_carrito_producto FOREIGN KEY (id_producto) REFERENCES productos(id),
			ADD CONSTRAINT fk_carrito_categoria FOREIGN KEY (id_categoria) REFERENCES categorias(id),
			ADD CONSTRAINT fk_carrito_stock FOREIGN KEY (id_stock) REFERENCES stock(id),
			ADD CONSTRAINT fk_carrito_usuario FOREIGN KEY (id_usuario) REFERENCES usuario_register(id);

/*Direccion*/
create table if not exists direccion(
	id int auto_increment primary key,
    calle_y_numero varchar(150) not null,
    barrio varchar(50) not null,
    ciudad varchar(40)
);

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
            add constraint fk_pedido_usuario foreign key(id_usuario) references usuarios_login (id)

