create table pet (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null unique,
  picture varchar(255) not null
);

insert into
  pet (name, picture)
values
  ("Milou", "/default.jpg"),
  ("Rantanplan", "/default.jpg"),
  ("Windy", "/default.jpg");
