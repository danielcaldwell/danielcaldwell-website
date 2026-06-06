// This code was created by me, Daniel Caldwell, and it is available to the public domain.
class ImageInfo {
	constructor(id, url, title, date, author = "Daniel Caldwell", medium = "Digital Image on Digital Screen", description) {
		this.id = id;
		this.url = url;
		this.title = title;
		this.date = date;
		this.author = author;
		this.medium = medium;
		this.description = description;
	}
}

var images = [];
images[0]  = new ImageInfo( '-fYWwyLTZ4', './images/Decent-into-Fillmore.jpg', 'Fillmore' );
images[1]  = new ImageInfo( '072PFGv2KG', './images/Just-Outside-of-Palm-Spring.jpg', '111 highway' );
images[2]  = new ImageInfo( '0pO7FBYGFk', './images/Mt.-Olympus-from-South.jpg', 'Mt. Olympus' );
images[3]  = new ImageInfo( '0vzmk7ZeH3', './images/Mt.-Olympus-from-the-East.jpg', 'Mt. Olympus' );
images[4]  = new ImageInfo( '2LsUFy9gli', './images/Mt.-Timpanogos-from-Brighto.jpg', 'Mt. Timpanogos' );
images[5]  = new ImageInfo( '39UCR2FcOc', './images/Mt.-Timpanogos-from-Provo.jpg', 'Mt. Timpanogos' );
images[6]  = new ImageInfo( '3Iq1g1_cvi', './images/Palm-Springs-Storm.jpg', 'Palm Springs' );
images[7]  = new ImageInfo( '3_2RQgwK1d', './images/Storm-in-Redlands.jpg', 'Redlands' );
images[8]  = new ImageInfo( '3iSGeBQlst', './images/Sunrise-in-San-Bernardino.jpg', 'San Bernardino' );
images[9]  = new ImageInfo( '4EuJYinj8V', './images/Wasatch-Front.jpg', 'Wasatch Front' );
images[10] = new ImageInfo( '4bMmM1EZm7', './images/Mill-Creek.jpg', 'Mill Creek' );
images[11] = new ImageInfo( '4m__kKwaE-', './images/San-Bernardino-Mountains.jpg', 'San Bernardino Mountains' );
images[12] = new ImageInfo( '4s2Sr58GEt', './images/Rim-of-the-World-Cloudy-Sun.jpg', 'The Rim of the World' );
images[13] = new ImageInfo( '5RBveF0vil', './images/Rim-of-the-World-Snowy-Suns.jpg', 'The Rim of the World' );
images[14] = new ImageInfo( '70SiKUCC8r', './images/Rim-of-the-World-Sunset.jpg', 'The Rim of the World' );
images[15] = new ImageInfo( '86zOluZjj9', './images/The-Rim-Toward-Palm-Springs.jpg', 'The Rim toward Palm Springs' );
images[16] = new ImageInfo( '8HsZUUf0Y8', './images/Upland-Sunset.jpg', 'Sunset in Upland' );
images[17] = new ImageInfo( '8oOoDGZVs8', './images/Devore-Sunset.jpg', 'Sunset in Devore' );
images[18] = new ImageInfo( '9qK-FA3vHA', './images/Mountain-in-the-Clouds.jpg', 'Mountain in the Cloud', undefined, undefined, undefined, "A photo of Harrison Mountain taken from highway 330 on an overcast day when the valley is filled with fog." );
images[19] = new ImageInfo( 'AGypZ7KndF', './images/Anaheim-Sunset.jpg', 'Sunset near Anaheim' );
images[20] = new ImageInfo( 'APgsXFL5mX', './images/Alta-Loma-Mountains-in-the-.jpg', 'Mountains near Alta Loma' );
images[21] = new ImageInfo( 'ARTBXrgTzp', './images/Snow-In-Idaho.jpg', 'Snow in Idaho' );
images[22] = new ImageInfo( 'ASYlYiSimp', './images/Wasatch-Front-Sunset.jpg', 'Wasatch Front Sunset' );
images[23] = new ImageInfo( 'BY80WwmxS5', './images/Unknown-Ski-Resort.jpg', 'Ski Resort' );
images[24] = new ImageInfo( 'C4jlqxpDjx', './images/Bryce-Canyon.jpg', 'Bryce Canyon');
images[25] = new ImageInfo( 'DZ7TqYR4Xy', './images/Bryce-Canyon-2.jpg', 'Bryce Canyon');
images[26] = new ImageInfo( 'EdWG62jzFV', './images/Bryce-Canyon-Sunrise-Point.jpg', 'Bryce Canyon');
images[27] = new ImageInfo( 'Et_yqeD01e', './images/Bryce-Canyon-Sunset-Point.jpg', 'Bryce Canyon');
images[28] = new ImageInfo( 'FVBBSAR_TH', './images/Kolob-Canyon.jpg', 'Kolob Canyon');
images[29] = new ImageInfo( 'Gaqh8a2O9w', './images/Kolob-Canyon-2.jpg', 'Kolob Canyon');
images[30] = new ImageInfo( 'HU5LtZLr7v', './images/Kolob-Canyon-3.jpg', 'Kolob Canyon');
images[31] = new ImageInfo( 'Hxv3nUg6UG', './images/Red-Canyon.jpg', 'Red Canyon');
images[32] = new ImageInfo( 'IKm91jMN0G', './images/Salt-Lake-Valley.jpg', 'Salt Lake Valley Sunset');
images[33] = new ImageInfo( 'JWAGhYvnI-', './images/Small-World-Christmas.jpg', 'Christmas time in a Small World');
images[34] = new ImageInfo( 'Jzx-TPfi9W', './images/Balboa-Beach.jpg', 'Balboa Beach');
images[35] = new ImageInfo( 'Ld_A5R7lC_', './images/Angel-Game-At-Angel-Stadium.jpg', 'Angel`s Game at Angel Stadium');
images[36] = new ImageInfo( 'MIFWdUAaOs', './images/San-Bernardino-Nightscape.jpg', 'San Bernardino Nightscape');
images[37] = new ImageInfo( 'MM_e3tyygM', './images/Cajon-Pass.jpg', 'The Cajon Pass from Redlands');
images[38] = new ImageInfo( 'MNfEmf6uAz', './images/Mormon-Rocks-Valley.jpg', 'The Valley across from Mormon Rocks');
images[39] = new ImageInfo( 'MTxDAck00T', './images/Mormon-Rocks.jpg', 'Mormon Rocks');
images[40] = new ImageInfo( 'MdB3TnkzbL', './images/Mormon-Rocks-2.jpg', 'Mormon Rocks');
images[41] = new ImageInfo( 'MgCcrkdQKa', './images/Mt.-Olympus-Meadow.jpg', 'Meadow at the top of Mt. Olympus');
images[42] = new ImageInfo( 'MjnSyKQndO', './images/Mt.-Olympus-Summit.jpg', 'View from the top of Mt. Olympus');
images[43] = new ImageInfo( 'Mp3cuy-Di-', './images/Donut-Falls-Entrance.jpg', 'View of road to Donut Falls');
images[44] = new ImageInfo( 'MqwFQtXn20', './images/Donut-Falls-Meadow.jpg', 'Meadow at bottom of Donut Falls');
images[45] = new ImageInfo( 'Mtvc2qEDIX', './images/Zion-Angels-Landing.jpg', 'Zion from midway up Angels Landing');
images[46] = new ImageInfo( 'MvWxYk5lnk', './images/Zion-Emerald-Pools.jpg', 'Emerald Pools at Zion');
images[47] = new ImageInfo( 'N7J3Y8X1nv', './images/Zion-Lower-Emerald-Pool.jpg', 'Lower Emerald Pool at Zion');
images[48] = new ImageInfo( 'NHeKguaIou', './images/Zion-Middle-Emerald-Pool.jpg', 'Middle Emerald Pool at Zion');
images[49] = new ImageInfo( 'NL-EAuemYj', './images/Zion-Upper-Emerald-Pool.jpg', 'Upper Emerald Pool at Zion');
images[50] = new ImageInfo( 'N_T1OU3tEG', './images/Zion-The-Cultural-Center.jpg', 'View from the Cultural Center at Zion');
images[51] = new ImageInfo( 'NbDSSbi18e', './images/Zion-The-Ampitheater.jpg', 'View from the Ampitheater at Zion');
images[52] = new ImageInfo( 'Owd-Ae0ns3', './images/Zion-The-Hotel.jpg', 'View from Zion Entrance');
images[53] = new ImageInfo( 'Pggy2Wb9wb', './images/Zion-The-Narrows.jpg', 'The Narrows at Zion');
