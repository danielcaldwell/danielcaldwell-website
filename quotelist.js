// This code was created by me, Daniel Caldwell, and it is available to the public domain.
class QuoteInfo {
	constructor(id, quote, author, date) {
		this.id = id;
		this.author = author;
		this.quote = quote;
		this.date = date;
	}
}

function formatQuote(q) {
	let text = '"' + q.quote + '"';
	let author = q.author;
	const dashIdx = author.indexOf(' - ');
	if (dashIdx !== -1) {
		text += ' (' + author.slice(dashIdx + 3) + ')';
		author = author.slice(0, dashIdx);
	}
	return { text, author };
}

const quotes = [];
quotes.push(new QuoteInfo( 'PiLWGsVdeI', 'Stuffy people who insist on putting bureaucracy into everything really miss the point.', 'Richard Stallman', '2022-08-28'));
quotes.push(new QuoteInfo( 'Qb-9r7CYzE', 'Methodologies encourage rock stars to become compliance monkeys', 'Joel Splosky', '2022-08-28'));
quotes.push(new QuoteInfo( 'RfTNJq5Q6X', 'all is vanity and vexation of spirit', 'Ecclesiastes', '2022-08-28'));
quotes.push(new QuoteInfo( 'Roo91Gwc7Z', "Don't dream too far. Don't lose sight of who you are. Don't remember that rush of joy. ... Don't wish, don't start. Wishing only wounds the heart.", "Elphaba", '2022-08-28'));
quotes.push(new QuoteInfo( 'RzycdfbjTb', "That impossible anger strangling the grief until the memory of your loved ones is just posioning your veins. One day you catch yourself wishing the person you loved never existed; so you'd be spared your pain.", "Henry Ducart", '2022-08-28'));
quotes.push(new QuoteInfo( 'SEQfHvG9lm', "... What you've worked and waited for, you can have all you've ever wanted. ... \n\
						   \n\
						  I don't want it- I can't want it anymore. \n\
						  Something has changed within me. Something is not the same. \n\
						  I'm though with playing by the rules of someone else's game. \n\
						  To late for second guessing. To late to go back to sleep. \n\
						  It's time to trust my instincts. Close my eyes and leap", "Elphaba", '2022-08-28'));

quotes.push(new QuoteInfo( 'SGL889sRaD', "You look to the north and real subtle like turn left", "Hawkeye", '2022-08-28'));
quotes.push(new QuoteInfo( 'T86wcgKNo_', "Together we went traveling, as we received the call \n\
						  His destination India, and I had none at all \n\
						  Well, I still remember laughing with our backs against the wall \n\
						  So free of fear, we never thought that one of us might fall", "A song for Adam", '2022-08-28'));
quotes.push(new QuoteInfo( 'TRYzbR3w5u', "I think, therefore I am.", "Rene Descartes", '2022-08-28'));
quotes.push(new QuoteInfo( 'TmQpv6ezx8', "A new people will come. Work. Struggle. Some will make their life. But once, we were here", "Chingachgook", '2022-08-28'));
quotes.push(new QuoteInfo( 'TvpumrAjtd', "Now I will do it quick, very quick, but in slow motion so you can follow...", "Lennart Green", '2022-08-28'));
quotes.push(new QuoteInfo( 'Ty1XXypnpb', "All I have are these two hands... I will die a pauper", "Buliwyf", '2022-08-28'));
quotes.push(new QuoteInfo( 'TyHC3SouG2', "... and I will have my vengeance, in this life or the next", "Maximus Decimus Meridias", '2022-08-28'));
quotes.push(new QuoteInfo( 'U0eF4-LjlJ', "I'm not going to lose to you!", "Naruto", '2022-08-28'));
quotes.push(new QuoteInfo( 'U2GRAo8guI', "So the hand that looked so good from the beginning, at the end, was actually the lowest hand. Such is life!", "Lennart Green", '2022-08-28'));
quotes.push(new QuoteInfo( 'UPhSMsL6hs', "It's like the blind leading the clueless!", "George Ayittey", '2022-08-28'));
quotes.push(new QuoteInfo( 'VJAs0vuutz', "The secret to life is low expectations", "Barry Schwartz", '2022-08-28'));
quotes.push(new QuoteInfo( 'VLGNFH9BdD', "Wash away the thoughts inside \n\
						   And keep my mind away from you. \n\
						   No more love and no more pride \n\
						   And thoughts are all I have to do. \n\
						   ... \n\
						   Tears of hope run down my skin. \n\
						   Tears for you that will not dry. \n\
						   They magnify the one within \n\
						   And let the outside slowly die.", "Josh Groban (modified)", '2022-08-28'));

quotes.push(new QuoteInfo( 'WZrq6nAYMU', "Then it's home again, eat again, watch some TV \n\
						   Make love to my woman at ten-fifty-three \n\
						   I dream the same dream when I'm sleeping at night \n\
						   I'm soaring over hills like an eagle in flight \n\
						   \n\
						   Someday I'm gonna give up all the buttons and things \n\
						   I'll punch that time clock till it can't ring \n\
						   Burn up my necktie and set myself free \n\
						   Cause no one's gonna fold, bend or mutilate me.", "Nigel Russell", '2022-08-28'));

quotes.push(new QuoteInfo( 'Xc2izSHkIp', "To some it is given by the Holy Ghost to know that Jesus Christ is the Son of God, and that he was crucified for the sins of the world. To others it is given to believe on their words, that they also might have eternal life if they continue faithful.", "Revelation through Joseph Smith", '2022-08-28'));
quotes.push(new QuoteInfo( 'YsmxznEA2x', "Question all as to their ways, and learn the secrets that they hold", "Ian Andersen", '2022-08-28'));
quotes.push(new QuoteInfo( 'Z-wotaQ7HK', "Once in a stately passion \n\
						   I cried with desperate grief, \n\
						   'O Lord, my heart is black with guile \n\
						   of sinners, I am chief!' \n\
						   \n\
						   Then stooped my guardian angel \n\
						   and whispered from behind \n\
						   'Vanity, my little man \n\
						   you're nothing of the kind.'", "James Thomson", '2022-08-28'));
quotes.push(new QuoteInfo( 'ZO5aVuW2sC', "Great spirits have always encountered violent opposition from mediocre minds.", "Albert Einstein", '2022-08-28'));
quotes.push(new QuoteInfo( 'ZfuyM2jZCm', "Wise men speak because they have something to say; fools because they have to say something.", "Plato", '2022-08-28'));
quotes.push(new QuoteInfo( 'ZgET48dPYE', "The man who does not read good books has no advantage over the man who can't read them.", "Mark Twain", '2022-08-28'));
quotes.push(new QuoteInfo( '_SQf6JK0Of', "The avalanche has started. It is too late for the pebbles to vote.", "Kosh", '2022-08-28'));
quotes.push(new QuoteInfo( '_US3ZEO3yT', "I have not failed. I've just found 10,000 ways that won't work.", "Thomas Edison", '2022-08-28'));
quotes.push(new QuoteInfo( '_lqTklQZQ4', "A learning experience is one of those things that say, 'You know that thing you just did? Don't do that.'", "Douglas Adams", '2022-08-28'));
quotes.push(new QuoteInfo( '_nVOPjyfly', "I love deadlines. I like the whooshing sound they make as they fly by.", "Douglas Adams", '2022-08-28'));
quotes.push(new QuoteInfo( '_t7ZZgvO-J', "Fear is the mind-killer. Fear is the little-death that brings total obliteration.", "Bene Gesserit", '2022-08-28'));
quotes.push(new QuoteInfo( '_uqyXr4bfk', "Civilized men are more discourteous than savages because they know they can be impolite without having their skulls split, as a general thing.", "Robert E. Howard", '2022-08-28'));
quotes.push(new QuoteInfo( 'abWz3QdmVA', "The young have exalted notions, because they have not been humbled by life or learned its necessary limitations; moreover, their hopeful disposition makes them think themselves equal to great things�and that means having exalted notions. They would always rather do noble deeds than useful ones: Their lives are regulated more by moral feeling than by reasoning.... All their mistakes are in the direction of doing things excessively and vehemently. They overdo everything; they love too much, hate too much, and the same with everything else.", "Aristotle", '2022-08-28'));
quotes.push(new QuoteInfo( 'b7_xifnvTH', "Without friends no one would choose to live, though he had all other goods", "Aristotle", '2022-08-28'));
quotes.push(new QuoteInfo( 'bJm6vkCGDR', "Envy is the ulcer of the soul.", "Socrates", '2022-08-28'));
quotes.push(new QuoteInfo( 'bjw2PDwn5X', "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness", "Revelation through Isaiah", '2022-08-28'));
quotes.push(new QuoteInfo( 'd5D6wXhrE2', "Fear not, I am with thee; O be not dismayed, \n\
For I am thy God, and will still give thee aid; \n\
I'll strengthen thee, help thee, and cause thee to stand, \n\
Upheld by my righteous, omnipotent hand.", "John Rippon's How Firm A Foundation", '2022-08-28'));
quotes.push(new QuoteInfo( 'dQZJ8tr9wO', "\"Seven months ago, Constantius,\" said Conan, \"it was I who hung there, and you who sat here.\" \n\
\n\
Constantius did not reply; he licked his gray lips and his eyes were glassy with pain and fear. Muscles writhed like cords along his lean body.\n\
\n\
\"You are more fit to inflict torture than to endure it,\" said Conan tranquilly. \"I hung there on a cross as you are hanging, and I lived, thanks to circumstances and a stamina peculiar to barbarians. But you civilized men are soft; your lives are not nailed to your spines as are ours. Your fortitude consists mainly in inflicting torment, not in enduring it. You will be dead before sundown. And so, Falcon of the desert, I leave you to the companionship of another bird of the desert.\"", "Robert E. Howard", '2022-08-28'));
quotes.push(new QuoteInfo( 'dXtu7EOPxY', "Yet oft I groan,\"O wretched man am I!\" \n\
							My flesh is weak and I'm encompassed by \n\
							A world of pain, which holds me in its thrall, \n\
							If I give in and to idleness fall. \n\
							Then strength grows slack, I waste in sorrow's vale. \n\
							My peace destroyed, my enemies prevail.", "Adapted from John S. Tanner", '2022-08-28'));
quotes.push(new QuoteInfo( 'dbJPu1ioCL', "Tis better far for us to strive our useless cares from us to drive", "William Clayton", '2022-08-28'));
quotes.push(new QuoteInfo( 'duK-dF5zus', "Why should we think to earn a great reward if we now shun the fight?", "William Clayton", '2022-08-28'));
quotes.push(new QuoteInfo( 'e-SvzA2L2L', "Gird up your loins; fresh courage take. Our God will never us forsake;", "William Clayton", '2022-08-28'));
quotes.push(new QuoteInfo( 'eASuJ0OqjO', "Luck often enough, will save a man, if his courage hold. ", "Buliwyf", '2022-08-28'));
quotes.push(new QuoteInfo( 'eIJZbDo9Jq', "Lo, there do I see my father. \n\
							Lo, there do I see my mother, and my sisters, and my brothers. \n\
							Lo, there do I see the line of my people back to the beginning. \n\
							Lo, they do call to me. \n\
							They bid me take my place among them. \n\
							In the halls of Valhalla where the brave may live forever. ", "Buliwyf", '2022-08-28'));
quotes.push(new QuoteInfo( 'eJ7d2jFWzf', "The All-Father wove the skein of your life a long time ago. Go and hide in a hole if you wish, but you won't live one instant longer. Your fate is fixed. Fear profits a man nothing. ", "Herger the Joyous", '2022-08-28'));
quotes.push(new QuoteInfo( 'f6YLRSxaD-', "Adam fell that men might be; and men are, that they might have joy.", "Nephi", '2022-08-28'));
quotes.push(new QuoteInfo( 'fCnu62-FVm', "Watch and pray, that ye enter not into temptation: the spirit indeed is willing, but the flesh is weak.", "Matthew", '2022-08-28'));
quotes.push(new QuoteInfo( 'fGbn28tV7O', "The spirit is willing, but the flesh is weak", "Paraphrased from Matthew", '2022-08-28'));
quotes.push(new QuoteInfo( 'g9Z1EzRfd1', "The cheese is old and moldy. Where is the bathroom?", "Encino Man", '2022-08-28'));
quotes.push(new QuoteInfo( 'gCOsoD3m6N', "The explanation is quite ingenious, as all freudian explanations are.", "Vilayanur Ramachandran", '2022-08-28'));
quotes.push(new QuoteInfo( 'gHFhgcLMX7', "Honor is.. what no man can give ye, and no one can take away. Honor is a man's gift to himself.", "Rob Roy", '2022-08-28'));
quotes.push(new QuoteInfo( 'gHmk1pLRSB', "Women are the heart of honor - and we cherish and protect it in them. You must never mistreat a woman, or malign a man. Or stand by and see another do so.", "Rob Roy", '2022-08-28'));
quotes.push(new QuoteInfo( 'gIQ-D_hAJA', "Never worry in the getting of it. It grows in ye and speaks to ye. All you need to do is listen.", "Rob Roy regarding honor", '2022-08-28'));
quotes.push(new QuoteInfo( 'gItly5cFkN', "No other success can compensate for failure in the home.", "David O. McKay", '2022-08-28'));
quotes.push(new QuoteInfo( 'gZQRIcwCDz', "That's it!!! I'm moving to Canada!!!", "Anonymous", '2022-08-28'));
quotes.push(new QuoteInfo( 'gzLbg7oJJH', "They bruised my soul with a proverb, \n\
						   They bruised my back with a rod, \n\
						   And they bade me bow to my elders, \n\
						   For that was the word of God. \n\
						   \n\
						   They pent up my soul and bound me \n\
						   Till life was a living death, \n\
						   They struck the wine from my fingers, \n\
						   The passion from my breath. \n\
						   \n\
						   I reached my hands to living, \n\
						   They hurled me back into school, \n\
						   And they said, \"Go learn your lessons,\" \n\
						   You innocent young fool.\" \n\
						   \n\
						   They yowled till they woke the trumpets -- \n\
						   And the sword blade rent the plow, \n\
						   And they said, \"It is your duty\" \n\
						   \"To die for your elders now.\" \n\
						   \n\
						   They cowered far from the battle \n\
						   As I went into the strife, \n\
						   And I spilled my guts in the trenches \n\
						   In the red dawn of my life. \n\
						   \n\
						   And the elders named me hero, \n\
						   But more than their words and ire \n\
						   Was the scent of a strange wild flower \n\
						   There where I died in the mire." , "Life by Robert E. Howard", '2022-08-28'));
quotes.push(new QuoteInfo( 'hvlSHo19sz', "All fled, All done, so lift me on the pyre \n\
						   The feast is over, and the lamps expire", "Robert E. Howard", '2022-08-28'));
quotes.push(new QuoteInfo( 'iFF7P5lxU3', "In the hour of pain and anguish, \n\
							In the hour when death draws near, \n\
							Suffer not our hearts to languish, \n\
							Suffer not our minds to fear;", "Adapted from Thomas Hastings and William B. Bradbury", '2022-08-28'));
quotes.push(new QuoteInfo( 'jChufkaJ_Y', "... My wisdom is greater than the cunning of the Devil", "The Lord", '2022-08-28'));
quotes.push(new QuoteInfo( 'jJerdpzHla', "All men are by nature equal, made all of the same earth by one Workman; and however we deceive ourselves, as dear unto God is the poor peasant as the mighty prince. ", "Plato", '2022-08-28'));
quotes.push(new QuoteInfo( 'jRHGO7fczN', "Be kind, for everyone you meet is fighting a hard battle.", "Plato", '2022-08-28'));
quotes.push(new QuoteInfo( 'jaZURiCufZ', "Death is not the worst that can happen to men", "Plato", '2022-08-28'));
quotes.push(new QuoteInfo( 'jr-1dg86FE', "Courage is knowing what not to fear.", "Plato", '2022-08-28'));
quotes.push(new QuoteInfo( 'k1J_VDGBvt', "Whatever principle of intelligence we attain unto in this life, it will rise with us in the resurrection.", "Joseph Smith", '2022-08-28'));
quotes.push(new QuoteInfo( 'kDVOO4tYlB', "Remember the worth of souls is great in the sight of God", "Joseph Smith", '2022-08-28'));
quotes.push(new QuoteInfo( 'kJWK45ig6g', "Your silence gives consent. ", "Plato", '2022-08-28'));
quotes.push(new QuoteInfo( 'kTjEtNLF53', "Beware the barrenness of a busy life. ", "Socrates", '2022-08-28'));
quotes.push(new QuoteInfo( 'khlhfxs_mG', "Control thy passions lest they take vengeance on thee.", "Epictetus", '2022-08-28'));
quotes.push(new QuoteInfo( 'm8-oNgi0Ts', "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has. ", "Epictetus", '2022-08-28'));
quotes.push(new QuoteInfo( 'mMkobq_OMO', "If evil be spoken of you and it be true, correct yourself, if it be a lie, laugh at it.", "Epictetus", '2022-08-28'));
quotes.push(new QuoteInfo( 'n0f1_zQWND', "If one oversteps the bounds of moderation, the greatest pleasures cease to please.", "Epictetus", '2022-08-28'));
quotes.push(new QuoteInfo( 'npp1tMwPLg', "If you desire to be good, begin by believing that you are wicked.", "Epictetus", '2022-08-28'));
quotes.push(new QuoteInfo( 'nuHXVEvCI-', "It is impossible to begin to learn that which one thinks one already knows.", "Epictetus", '2022-08-28'));
quotes.push(new QuoteInfo( 'nx5kyFTvLp', "No greater thing is created suddenly, any more than a bunch of grapes or a fig. If you tell me that you desire a fig, I answer you that there must be time. Let it first blossom, then bear fruit, then ripen.", "Epictetus", '2022-08-28'));
quotes.push(new QuoteInfo( 'o1tGUncXhO', "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will. ", "Epictetus", '2022-08-28'));
quotes.push(new QuoteInfo( 'oWjE5u5Pi1', "We have two ears and one mouth so that we can listen twice as much as we speak. ", "Epictetus", '2022-08-28'));
quotes.push(new QuoteInfo( 'ohNuzvTKOZ', "All men whilst they are awake are in one common world: but each of them, when he is asleep, is in a world of his own. ", "Plutarch", '2022-08-28'));
quotes.push(new QuoteInfo( 'p3WglZZuDT', "Do not speak of your happiness to one less fortunate than yourself. ", "Plutarch", '2022-08-28'));
quotes.push(new QuoteInfo( 'p5RUvY56b1', "Fate leads him who follows it, and drags him who resist. ", "Plutarch", '2022-08-28'));
quotes.push(new QuoteInfo( 'p8S48gwCOB', "I don't need a friend who changes when I change and who nods when I nod; my shadow does that much better", "Plutarch", '2022-08-28'));
quotes.push(new QuoteInfo( 'pTIehicylU', "The omission of good is no less reprehensible than the commission of evil. ", "Plutarch", '2022-08-28'));
quotes.push(new QuoteInfo( 'prNUHnlFTQ', "Riches do not exhilarate us so much with their possession as they torment us with their loss. ", "Epicurus", '2022-08-28'));
quotes.push(new QuoteInfo( 'qXsq5TIOux', "You don't develop courage by being happy in your relationships everyday. You develop it by surviving difficult times and challenging adversity. ", "Epicurus", '2022-08-28'));
quotes.push(new QuoteInfo( 'qlKKyCJP2u', "Hide our ignorance as we will, an evening of wine soon reveals it", "Heraclitus", '2022-08-28'));
quotes.push(new QuoteInfo( 'qsezdxy21J', "Man is most nearly himself when he achieves the seriousness of a child at play. ", "Heraclitus", '2022-08-28'));
quotes.push(new QuoteInfo( 'rLq541Nvjq', "No man ever steps in the same river twice, for it's not the same river and he's not the same man. ", "Heraclitus", '2022-08-28'));
quotes.push(new QuoteInfo( 'rP2mE8Lm8o', "No one loves the man whom he fears.", "Aristotle", '2022-08-28'));
quotes.push(new QuoteInfo( 'rs4AT6_CDG', "Vae Victus!", "Brennus the Gaul - Woe to the vanquished!", '2022-08-28'));
quotes.push(new QuoteInfo( 'sJJPfQCzKn', "Invictus Maneo!", "Latin - I remain unvanquished!", '2022-08-28'));
quotes.push(new QuoteInfo( 'srmbI3687S', "Even withered trees give prosperity to the mountain!", "Japanese Proverb", '2022-08-28'));
quotes.push(new QuoteInfo( 'svHCTNFqe2', "Ne quid nimis", "Latin Proverb - Nothing in excess", '2022-08-28'));
quotes.push(new QuoteInfo( 'swIE8zKAhl', "Nosce te ipsum", "Latin Proverb - Know Thyself", '2022-08-28'));
quotes.push(new QuoteInfo( 't1rNU7K1hf', "O man, whoever you are and wherever you come from, for I know you will come, I am Cyrus who won the Persians their empire. Do not therefore begrudge me this bit of earth that covers my bones.", "Cyrus the Great's Epitaph as noted by Plutarch", '2022-08-28'));
quotes.push(new QuoteInfo( 't6FN04aH7y', "I lived believing that my failures would build character, and that they were trials that honed my skills. And in return, I would accomplish a deed so great that it would obliterate all of my failures and I'd die a worthy death. At least, that was how it was supposed to go, but in the end my life was a worthless story.", "Jiraiya", '2022-08-28'));
quotes.push(new QuoteInfo( 'tLPRTFIAYv', "Naruto: Grrr! I can't take it anymore! What is the point of this boring training!\n\
		Jiraiya: Idiot! There's boring training and there's exciting training! You stupid apprentice!", "Jiraiya teaching Naruto", '2022-08-28'));
quotes.push(new QuoteInfo( 'tPIrGURoym', "I don't have to tell you things are bad. Everybody knows things are bad. It's a depression. Everybody's out of work or scared of losing their job. The dollar buys a nickel's worth. Banks are going bust. Shopkeepers keep a gun under the counter. Punks are running wild in the street and there's no one anywhere that seems to know what to do with us. Now into it. We know the air is unfit to breathe, our food is unfit to eat, and we sit watching our TVs while some local newscaster tells us that today we had 15 homicides and 63 violent crimes as if that's the way it's supposed to be. We know things are bad. Worse than bad. They're crazy. It's like everything everywhere is going crazy so we don't go out anymore. We sit in a house as slowly the world we're living in is getting smaller and all we say is, 'Please, at least leave us alone in our living rooms. Let me have my toaster, and TV, and my steel belted radials and I won't say anything.' Well I'm not going to leave you alone. I want you to get mad. I don't want you to protest. I don't want you to riot. I don't want you to write to your congressman because I wouldn't know what to tell you to write. I don't know what to do about the depression and the inflation and the Russians and the crying in the streets. All I know is first you've got to get mad. You've got to say, 'I'm a human being. God Dammit, my life has value.' So, I want you to get up now. I want all of you to get up out of your chairs. I want you to get up right now and go to the window, open it, and stick your head out, and yell, 'I'm as mad as hell, and I'm not going to take this anymore!' I want you to get up right now. Get up. Go to your windows, open your windows, and stick your head out, and yell, 'I'm as mad as hell and I'm not going to take this anymore!' Things have got to change my friends. You've got to get mad. You've got to say, 'I'm as mad as hell and I'm not going to take this anymore!' Then we'll figure out what to do about the depression and the inflation and the oil crisis. But first get up out of your chairs, open your window, stick your head out and yell, 'I'm as mad as hell and I'm not going to take this anymore!'", "Howard Beale (Network by Paddy Chayefsky)", '2022-08-28'));
quotes.push(new QuoteInfo( 'tWjnGsRmfC', "Even monkeys fall from trees", "Japanese Proverb", '2022-08-28'));
quotes.push(new QuoteInfo( 'ulT2_qKgvU', "We know that you are going \n\
			we'll follow you someday \n\
			but until that day comes \n\
			we'll make use of you today.", "Dreams of Daniel", '2022-08-28'));
quotes.push(new QuoteInfo( 'v5cVnlI6d9', "The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character.", "Arnold Schwarzenegger", '2022-08-28'));
quotes.push(new QuoteInfo( 'vInb0i78H7', "Will I lose my dignity? \n\
						   Will someone care?  \n\
						   Will I wake tomorrow,  \n\
						   from this nightmare?", "Rent", '2022-08-28'));
quotes.push(new QuoteInfo( 'w56pG6fUI1', "And in despair I bowed my head, \n\
							'There is no peace on earth,' I said, \n\
							'For hate is strong, it mocks this song', \n\
							of peace on earth, goodwill to men, \n\
							peace on earth, goodwill to men. \n\
							\n\
							Then pealed the bell more loud and deep, \n\
							God is not dead; nor doth he sleep! \n\
							The wrong shall fail, the right prevail, \n\
							With peace on earth, goodwill to men, \n\
							peace on earth, goodwill to men.", "Henry Wadsworth Longfellow", '2022-08-28'));
quotes.push(new QuoteInfo( 'wauOwP48fW', "When the snow is lightly falling  \n\
							And the night is all around  \n\
							I feel your soul beside me.  \n\
							And the world makes no sound. ", "Dreams of Daniel", '2022-08-28'));
quotes.push(new QuoteInfo( 'wrxIHD64Hs', "In the bleak midwinter,  \n\
							frosty wind made moan \n\
							Earth stood hard as iron \n\
							water like a stone \n\
							snow had fallen  \n\
							snow on snow \n\
							Oh, snow on snow \n\
							In the bleak midwinter \n\
							long, long ago.", "Christina Rossetti", '2022-08-28'));
quotes.push(new QuoteInfo( 'xmZpxV8b17', "Beautiful chocolate cake, first serving is delicious; second one, not so much, then we feel disgust.", "Matthieu Ricard", '2022-08-28'));
quotes.push(new QuoteInfo( 'y20PkpHxUY', "There is enough for everyone's need, but not for everyone's greed", "Gandhi", '2022-08-28'));
quotes.push(new QuoteInfo( 'yZkMfmTFKY', "There's a grief that can't be spoken.\n\
							There's a pain goes on and on...\n\
							Empty chairs at empty tables,\n\
							Now my friends are dead and gone.", "Marius from Les Miserables", '2022-08-28'));
quotes.push(new QuoteInfo( 'ywvIbmZY7E', "Oh my friends, my friends forgive me. \n\
							That I live and you are gone. \n\
							There's a grief that can't be spoken, \n\
							There's a pain that goes on and on.", "Marius from Les Miserables", '2022-08-28'));
quotes.push(new QuoteInfo( 'zEvgCttsff', "Oh my friends, my friends don't ask me, \n\
							what your sacrifice was for. \n\
							Empty chairs at empty tables. \n\
							Now my friends will sing no more.", "Marius from Les Miserables", '2026-05-31'));
quotes.push(new QuoteInfo( 'zRKtzcN27p', "You see these hands they're bruised and brown, they're yours alone.  Hold on love, we're still going down. Hold on love, we're still fighting at home!", "Josh Groban", '2022-08-28'));
quotes.push(new QuoteInfo( 'zhfTyY8VaC', "After a certain age, even men lose interest in who is stronger and weaker. It's inevitable while violence is a crime. However, there are those who cannot change that value system. They are the ones who cannot ignore their own weakness. For one it may come from a wish to become strong from their past as a weakling, for another it may be their pride which will not forgive their own weakness. The value they place on strength put down deep roots into their being.  You may laugh it off as a simple complex, but to them it is a prayer to become stronger. That prayer sustains their uncanny daily study.", "Kouji Mori", '2026-05-31'));
quotes.push(new QuoteInfo( 'zrNJAn1gJV', "Savor the fruit of life, my young friends. It has a sweet taste when it is fresh from the vine, but don't live too long. The taste turns bitter ... after a time.", "Kor, The Dahar Master", '2022-09-01'));
quotes.push(new QuoteInfo( 'unuReKF0Nv', "This is some bullshit!!!", "Harry Vanderspeigle", '2026-06-06'));
quotes.push(new QuoteInfo( 'N6o7k6JF_W', "SonOfABitch!", "Harry Vanderspeigle", '2026-06-06'));
quotes.push(new QuoteInfo( 'Tr4pPrn8Lq', "It's better to be pruned to grow than cut up to burn!!!", "John Trapp", '2026-06-19'));
quotes.push(new QuoteInfo( "gzqnuK2upP", "Everyone is awful.", "Bob Belcher"));
