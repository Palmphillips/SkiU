create table if not exists `Resort` (
`id` int(1) not null auto_increment,
`name` varchar(40) not null,
`code` varchar(40) not null,
primary key (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=7;
insert into `Resort` (`id`, `name`, `code`) values
(1, 'Keystone', 'KE'),
(2, 'Breckenridge', 'BR'),
(3, 'Eldorado', 'EL'),
(4, 'Copper Mountain', 'CO'),
(5, 'Vail', 'VA');