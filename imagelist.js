// This code was created by me, Daniel Caldwell, and it is available to the public domain.
class ImageInfo {
	constructor(url, title, date, author = "Daniel Caldwell", medium = "Digital Image on Digital Screen", description) {
		this.url = url;
		this.title = title;
		this.date = date;
		this.author = author;
		this.medium = medium;
		this.description = description;
	}
}

var images = [];
images[0]  = new ImageInfo( './images/Decent-into-Fillmore.jpg', 'Fillmore' );
images[1]  = new ImageInfo( './images/Just-Outside-of-Palm-Spring.jpg', '111 highway' );
images[2]  = new ImageInfo( './images/Mt.-Olympus-from-South.jpg', 'Mt. Olympus' );
images[3]  = new ImageInfo( './images/Mt.-Olympus-from-the-East.jpg', 'Mt. Olympus' );
images[4]  = new ImageInfo( './images/Mt.-Timpanogos-from-Brighto.jpg', 'Mt. Timpanogos' );
images[5]  = new ImageInfo( './images/Mt.-Timpanogos-from-Provo.jpg', 'Mt. Timpanogos' );
images[6]  = new ImageInfo( './images/Palm-Springs-Storm.jpg', 'Palm Springs' );
images[7]  = new ImageInfo( './images/Storm-in-Redlands.jpg', 'Redlands' );
images[8]  = new ImageInfo( './images/Sunrise-in-San-Bernardino.jpg', 'San Bernardino' );
images[9]  = new ImageInfo( './images/Wasatch-Front.jpg', 'Wasatch Front' );
images[10] = new ImageInfo( './images/Mill-Creek.jpg', 'Mill Creek' );
images[11] = new ImageInfo( './images/San-Bernardino-Mountains.jpg', 'San Bernardino Mountains' );
images[12] = new ImageInfo( './images/Rim-of-the-World-Cloudy-Sun.jpg', 'The Rim of the World' );
images[13] = new ImageInfo( './images/Rim-of-the-World-Snowy-Suns.jpg', 'The Rim of the World' );
images[14] = new ImageInfo( './images/Rim-of-the-World-Sunset.jpg', 'The Rim of the World' );
images[15] = new ImageInfo( './images/The-Rim-Toward-Palm-Springs.jpg', 'The Rim toward Palm Springs' );
images[16] = new ImageInfo( './images/Upland-Sunset.jpg', 'Sunset in Upland' );
images[17] = new ImageInfo( './images/Devore-Sunset.jpg', 'Sunset in Devore' );
images[18] = new ImageInfo( './images/Mountain-in-the-Clouds.jpg', 'Mountain in the Cloud', undefined, undefined, undefined, "A photo of Harrison Mountain taken from highway 330 on an overcast day when the valley is filled with fog." );
images[19] = new ImageInfo( './images/Anaheim-Sunset.jpg', 'Sunset near Anaheim' );
images[20] = new ImageInfo( './images/Alta-Loma-Mountains-in-the-.jpg', 'Mountains near Alta Loma' );
images[21] = new ImageInfo( './images/Snow-In-Idaho.jpg', 'Snow in Idaho' );
images[22] = new ImageInfo( './images/Wasatch-Front-Sunset.jpg', 'Wasatch Front Sunset' );
images[23] = new ImageInfo( './images/Unknown-Ski-Resort.jpg', 'Ski Resort' );
images[24] = new ImageInfo( './images/Bryce-Canyon.jpg', 'Bryce Canyon');
images[25] = new ImageInfo( './images/Bryce-Canyon-2.jpg', 'Bryce Canyon');
images[26] = new ImageInfo( './images/Bryce-Canyon-Sunrise-Point.jpg', 'Bryce Canyon');
images[27] = new ImageInfo( './images/Bryce-Canyon-Sunset-Point.jpg', 'Bryce Canyon');
images[28] = new ImageInfo( './images/Kolob-Canyon.jpg', 'Kolob Canyon');
images[29] = new ImageInfo( './images/Kolob-Canyon-2.jpg', 'Kolob Canyon');
images[30] = new ImageInfo( './images/Kolob-Canyon-3.jpg', 'Kolob Canyon');
images[31] = new ImageInfo( './images/Red-Canyon.jpg', 'Red Canyon');
images[32] = new ImageInfo( './images/Salt-Lake-Valley.jpg', 'Salt Lake Valley Sunset');
images[33] = new ImageInfo( './images/Small-World-Christmas.jpg', 'Christmas time in a Small World');
images[34] = new ImageInfo( './images/Balboa-Beach.jpg', 'Balboa Beach');
images[35] = new ImageInfo( './images/Angel-Game-At-Angel-Stadium.jpg', 'Angel`s Game at Angel Stadium');
images[36] = new ImageInfo( './images/San-Bernardino-Nightscape.jpg', 'San Bernardino Nightscape');
images[37] = new ImageInfo( './images/Cajon-Pass.jpg', 'The Cajon Pass from Redlands');
images[38] = new ImageInfo( './images/Mormon-Rocks-Valley.jpg', 'The Valley across from Mormon Rocks');
images[39] = new ImageInfo( './images/Mormon-Rocks.jpg', 'Mormon Rocks');
images[40] = new ImageInfo( './images/Mormon-Rocks-2.jpg', 'Mormon Rocks');
images[41] = new ImageInfo( './images/Mt.-Olympus-Meadow.jpg', 'Meadow at the top of Mt. Olympus');
images[42] = new ImageInfo( './images/Mt.-Olympus-Summit.jpg', 'View from the top of Mt. Olympus');
images[43] = new ImageInfo( './images/Donut-Falls-Entrance.jpg', 'View of road to Donut Falls');
images[44] = new ImageInfo( './images/Donut-Falls-Meadow.jpg', 'Meadow at bottom of Donut Falls');
images[45] = new ImageInfo( './images/Zion-Angels-Landing.jpg', 'Zion from midway up Angels Landing');
images[46] = new ImageInfo( './images/Zion-Emerald-Pools.jpg', 'Emerald Pools at Zion');
images[47] = new ImageInfo( './images/Zion-Lower-Emerald-Pool.jpg', 'Lower Emerald Pool at Zion');
images[48] = new ImageInfo( './images/Zion-Middle-Emerald-Pool.jpg', 'Middle Emerald Pool at Zion');
images[49] = new ImageInfo( './images/Zion-Upper-Emerald-Pool.jpg', 'Upper Emerald Pool at Zion');
images[50] = new ImageInfo( './images/Zion-The-Cultural-Center.jpg', 'View from the Cultural Center at Zion');
images[51] = new ImageInfo( './images/Zion-The-Ampitheater.jpg', 'View from the Ampitheater at Zion');
images[52] = new ImageInfo( './images/Zion-The-Hotel.jpg', 'View from Zion Entrance');
images[53] = new ImageInfo( './images/Zion-The-Narrows.jpg', 'The Narrows at Zion');

(function() {
	var ids = [
		'-fYWwyLTZ4', '072PFGv2KG', '0pO7FBYGFk', '0vzmk7ZeH3', '2LsUFy9gli',
		'39UCR2FcOc', '3Iq1g1_cvi', '3_2RQgwK1d', '3iSGeBQlst', '4EuJYinj8V',
		'4bMmM1EZm7', '4m__kKwaE-', '4s2Sr58GEt', '5RBveF0vil', '70SiKUCC8r',
		'86zOluZjj9', '8HsZUUf0Y8', '8oOoDGZVs8', '9qK-FA3vHA', 'AGypZ7KndF',
		'APgsXFL5mX', 'ARTBXrgTzp', 'ASYlYiSimp', 'BY80WwmxS5', 'C4jlqxpDjx',
		'DZ7TqYR4Xy', 'EdWG62jzFV', 'Et_yqeD01e', 'FVBBSAR_TH', 'Gaqh8a2O9w',
		'HU5LtZLr7v', 'Hxv3nUg6UG', 'IKm91jMN0G', 'JWAGhYvnI-', 'Jzx-TPfi9W',
		'Ld_A5R7lC_', 'MIFWdUAaOs', 'MM_e3tyygM', 'MNfEmf6uAz', 'MTxDAck00T',
		'MdB3TnkzbL', 'MgCcrkdQKa', 'MjnSyKQndO', 'Mp3cuy-Di-', 'MqwFQtXn20',
		'Mtvc2qEDIX', 'MvWxYk5lnk', 'N7J3Y8X1nv', 'NHeKguaIou', 'NL-EAuemYj',
		'N_T1OU3tEG', 'NbDSSbi18e', 'Owd-Ae0ns3', 'Pggy2Wb9wb'
	];
	ids.forEach(function(id, i) { images[i].id = id; });
})();
