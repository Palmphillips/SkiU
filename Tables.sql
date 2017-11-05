create table if not exists `user_info` (
`username` varchar(40) not null,
`name` varchar(40) not null,
`password` varchar(40) not null,
`phone` varchar(10) not null,
primary key (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=7;
insert into `user_info` (`username`, `name`, `password`, `phone`) values
('hassan.alahmed@colorado.edu', 'Hassan Alahmed', 'aaaaaa', '7203226544'),
('duaa.alahmed@colorado.edu', 'Duaa Alahmed', 'bbbbbbb', '7203283554');


create table if not exists `event` (
`id` int(1) not null auto_increment,
`username` varchar(40) not null,
`description` varchar(1000),
`location` varchar(10) not null,
`departure` datetime not null,
`arrival` varchar(10) not null,
`passengers` varchar(100),
primary key (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=7;
insert into `event` (`id`,`username`, `description`, `location`, `departure`, `arrival`) values
(1,'hassan.alahmed@colorado.edu', 'Going to Keystone', 'Keystone', '8:00am', '4:00pm'),
(2,'hassan.alahmed@colorado.edu', 'Going to Breckenridge', 'Breckenridge', '8:00am', '4:00pm');

