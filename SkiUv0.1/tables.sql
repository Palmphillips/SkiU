create table if not exists `user_info` (
`username` varchar(40) not null,
`password` varchar(40) not null,
`first_name` varchar(40) not null,
`last_name` varchar(40) not null,
`phone` varchar(10) not null,
`school_year` varchar(4),
primary key (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=7;
insert into `user_info` (`username`, `first_name`, `last_name`, `password`, `phone`, `school_year`) values
('hassan.alahmed@colorado.edu', 'Hassan', 'Alahmed', 'aaaaaa', '7203226544','2014'),
('duaa.alahmed@colorado.edu', 'Duaa', 'Alahmed', 'bbbbbbb', '7203283554', '2015');


create table if not exists `events` (
`id` int(1) not null auto_increment,
`username` varchar(40) not null,
`location` varchar(10) not null,
`departure` varchar(10) not null,
`arrival` varchar(10) not null,
`description` varchar(1000),
`passangers` varchar(100),
primary key (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=7;
insert into `events` (`id`,`username`, `location`, `departure`, `arrival`, `description`) values
(1,'hassan.alahmed@colorado.edu', 'Keystone', '8:00am', '4:00pm', 'Going to Keystone'),
(2,'hassan.alahmed@colorado.edu', 'Breckenridge', '8:00am', '4:00pm', 'Going to Breckenridge');

create table if not exists `driver_info` (
`username` varchar(40) not null,
`car_model` varchar(20) not null,
`car_year` varchar(4) not null,
`seats` varchar(10),
primary key (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=7;
insert into `driver_info` (`username`, `car_model`, `car_year`, `seats`) values
('hassan.alahmed@colorado.edu', 'Toyota', '2008', '4'),
('duaa.alahmed@colorado.edu', 'VW', '2008', '3');
