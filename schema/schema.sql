create database jennenestore;

use jennenestore;

create table clients(
    id int auto_increment primary key,
    fullname varchar(150) not null,
    age int not null,
    email varchar(150) not null,
    profile_picture varchar(255),
    password_hash varchar(255) not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
); 