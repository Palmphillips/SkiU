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
('duaa.alahmed@colorado.edu', 'Duaa', 'Alahmed', 'bbbbbbb', '7203283554', '2015'),
('jack.spicer@colorado.edu', 'jack', 'spicer', 'cccccc', '7987789845','2015'),
('john.phillips@colorado.edu', 'john', 'phillips', 'dddddd', '89756444442', '2015'),
('Sousheel.vunnam@colorado.edu', 'Sousheel', 'vunnam', 'eeeeee', '7438597423', '2014');


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
(2,'hassan.alahmed@colorado.edu', 'Breckenridge', '7:00am', '3:00pm', 'Going to Breckenridge'),
(3,'jack.spicer@colorado.edu', 'Copper Mt', '8:30am', '5:00pm', 'Going to Copper Mt'),
(4,'john.phillips@colorado.edu', 'Winter Park', '9:00am', '6:00pm', 'Going to Winter Park'),
(5,'Sousheel.vunnam@colorado.edu', 'Vail', '6:00am', '2:00pm', 'Going to Vail');

create table if not exists `driver_info` (
`username` varchar(40) not null,
`car_model` varchar(20) not null,
`car_year` varchar(4) not null,
`seats` varchar(10),
primary key (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=7;
insert into `driver_info` (`username`, `car_model`, `car_year`, `seats`) values
('hassan.alahmed@colorado.edu', 'Toyota', '2008', '4'),
('duaa.alahmed@colorado.edu', 'VW', '2010', '3'),
('jack.spicer@colorado.edu', 'Nissan', '2015', '5');

