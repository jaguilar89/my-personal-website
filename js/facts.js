const random = Math.floor(Math.random() * 4)
const selection = document.getElementById('month-select');
const result = document.getElementById('result');
const refreshButton = document.getElementById('refresh-button')

refreshButton.addEventListener('click', event => location.reload());

selection.addEventListener('change', event => {
	switch (event.target.value) {
  	case 'january':  
    	result.textContent = mixedMessages._janFacts[random];
    	break;
    case 'february':
    	result.textContent = mixedMessages._febFacts[random];
    	break;
    case 'march':
    	result.textContent = mixedMessages._marFacts[random];
    	break;
    case 'april':
    	result.textContent = mixedMessages._aprFacts[random];
    	break;
    case 'may':
    	result.textContent = mixedMessages._mayFacts[random];
    	break;
    case 'june':
    	result.textContent = mixedMessages._junFacts[random];
    	break;
    case 'july':
    	result.textContent = mixedMessages._julFacts[random];
    	break;
    case 'august':
    	result.textContent = mixedMessages._augFacts[random];
    	break;
    case 'september':
    	result.textContent = mixedMessages._sepFacts[random];
    	break;
    case 'october':
    	result.textContent = mixedMessages._octFacts[random];
    	break;
    case 'november':
    	result.textContent = mixedMessages._novFacts[random];
    	break;
    case 'december':
    	result.textContent = mixedMessages._decFacts[random];
    	break;
    default:
    	result.textContent = 'Please select a month'
  }
})

const mixedMessages = {
	_janFacts: [
  'January 1, New Year\'s day is the most celebrated holiday in the world.', 
  'January 1, 1863 - The Emancipation Proclamation by President Abraham Lincoln freed the slaves in the states rebelling against the Union.', 
  'January 1, 1892 - Ellis Island in New York Harbor opened. Over 20 million new arrivals to America were processed until its closing in 1954.', 
  'January 1, 1801 - Ireland was added to Great Britain by an Act of Union thus creating the United Kingdom of Great Britain and Ireland.'
  ],
  _febFacts: [
  'February 1, 1878 - Hattie Caraway (1878-1950) the first woman elected to the U.S. Senate, was born in Bakersville, Tennessee. Her husband became the U.S. Senator from Arkansas. Following his death in 1931, she filled the remainder of his term, then was elected herself, serving a total of 14 years.',
  'February 1, 1960 - In Greensboro, North Carolina, four African American students sat down and ordered coffee at a lunch counter inside a Woolworth\'s store. They were refused service, but did not leave. Instead, they waited all day. The scene was repeated over the next few days, with protests spreading to other southern states, resulting in the eventual arrest of over 1,600 persons for participating in sit-ins.',
  'February 1, 1920 - Royal Canadian Mounted Police are established.',
  'February 1, 2003 - Sixteen minutes before it was scheduled to land, the Space Shuttle Columbia broke apart in flight over west Texas, killing all seven crew members. The accident may have resulted from damage caused during liftoff when a piece of insulating foam from the external fuel tank broke off, piercing a hole in the shuttle\'s left wing that allowed hot gases to penetrate the wing upon re-entry into the Earth\'s atmosphere. This was the second space shuttle lost in flight. In January 1986, Challenger exploded during liftoff.'
  ],
  
  _marFacts: [
  	'March 1, 1932 - The 20-month-old son of aviation pioneer Charles A. Lindbergh was kidnapped from his home in Hopewell, New Jersey. The Lindberghs then paid a $50,000 ransom. However, on May 12, the boy\'s body was found in a wooded area a few miles from the house.',
    'March 1, 1872 - Yellowstone becomes the U.S.\'s first national park.',
    'March 1, 1958 - U.S. launches Explorer I, its first satellite.',
    'March 2, 1836 - Texas declares its independence from Mexico.'
  ],
  
  _aprFacts: [
  	'April 1, 2004 - Google introduces Gmail. The e-mail service offered an unprecedented 1GB of storage. Initlally considered an April Fools joke, the product turned out to be real.',
    'April 2, 1513 - Spanish explorer Ponce De Leon sighted Florida and claimed it for the Spanish Crown after landing at the site of present day St. Augustine, now the oldest city in the continental U.S.',
    'April 4, 1968 -  Martin Luther King Jr. is assassinated in Memphis, TN',
    'April 4, 1973 -  In New York City, the World Trade tower opens. At 110 stories, it is the tallest building in the world at the time.'
  ],
  
  _mayFacts: [
  	'May 1, 1840 - England releases the first 1st adhesive postage stamp.',
    'May 1, 1960 - An American U-2 spy plane flying at 60,000 feet was shot down over Sverdlovsk in central Russia on the eve of a summit meeting between President Dwight D. Eisenhower and Soviet Russia\'s Premier Nikita Khrushchev. The sensational incident caused a cancellation of the meeting and heightened existing Cold War tensions. The pilot, CIA agent Francis Gary Powers, survived the crash, and was tried, convicted and sentenced to 10 years in prison by a Russian court. Two years later he was released to America in exchange for an imprisoned Soviet spy. On his return to America, Powers encountered a hostile public which apparently believed he should not have allowed himself to be captured alive. He died in a helicopter crash in 1977.',
    'May 1, 1941 - The General Mills Corporation introduced CheeriOats in 1941 as the first ready-to-eat oat cereal. The name was changed to Cheerios in 1945 and reflects the “O” shape of the cereal, which required extensive trial and error to create the toasted puffed shape and texture.',
    'May 1, 1707 - Great Britain was formed from a union between England and Scotland. The union included Wales which had already been part of England since the 1500\'s. The United Kingdom today consists of Great Britain and Northern Ireland.'
  ],
  
  _junFacts: [
  	'June 1, 1938 - The first Superman Comic is published. It is widely considered to be both the beginning of the superhero genre and the most valuable comic book in the world. In 2014, a copy graded 9.0 by CGC was sold on eBay for $3,207,852 USD',
    'June 1, 1926 - Marilyn Monroe (1926-1962) was born in Los Angeles (as Norma Jean Mortensen). Following an unstable childhood spent in foster homes and orphanages, she landed a job as a photographer\'s model which led to a movie career. She later married baseball legend Joe DiMaggio. Beneath her glamorous movie star looks she was fragile and insecure and eventually succumbed to the pressures of Hollywood life. She died in Los Angeles from an overdose of sleeping pills on August 5, 1962. Best known for Gentlemen Prefer Blondes (1953), The Seven Year Itch (1955), Bus Stop (1956), Some Like It Hot (1959), and The Misfits (1961).',
    'June 2, 1692 - Salem Witch Trials begin. More than two hundred people were accused of witchcraft. Thirty were found guilty, nineteen of whom were executed by hanging (fourteen women and five men), and at least five people died in jail.',
    'June 2, 1740 - Marquis de Sade (1740-1814) was born in Paris. He was a military leader, governor-general, and author, whose acts of extreme cruelty and violence resulted in the term "sadism" being created from his name to describe gratification in inflicting pain.'
  ],
  
  _julFacts: [
  	'July 2, 1964 - The Civil Rights Act of 1964 is signed into law. This act, signed into law by President Lyndon Johnson, prohibited discrimination in public places, provided for the integration of schools and other public facilities, and made employment discrimination illegal. This document was the most sweeping civil rights legislation since Reconstruction.',
    'July 2, 1937 - Amelia Earhart and Fred Noonan disappear over the Pacific Ocean on their way to Howland Island.',
    'July 1, 1874 - The Philadelphia zoo opens, the first zoo in the U.S.',
    'July 1, 1893 - President Grover Cleveland underwent secret cancer surgery aboard a yacht owned by his friend, Commodore E.C. Benedict. The surgery was performed on a cancerous growth in his mouth. The entire left side of his jaw was removed along with a small portion of his soft palate. A second, smaller operation was performed on July 17th. Cleveland was then fitted with a rubber prosthesis which he wore until his death in 1908. The secrecy was intended to prevent panic among the public during the economic depression of 1893.'
  ],
  
  _augFacts: [
  	'August 2, 2018 - Apple becomes the first publically listed American company to reach a value of $1trillion.',
    'August 1, 1779 - Birthday - Star-Spangled Banner author Francis Scott Key (1779-1843) was born in Frederick County, Maryland. After witnessing the British bombardment of Fort McHenry on the night of September 13-14, 1814, he was enthralled to see the American flag still flying over the fort at daybreak. He then wrote the poem originally entitled Defense of Fort McHenry which became the U.S. National Anthem in 1931.',
    'August 1, 1990 - The World Wide Web is conceived.',
    'August 1, 1790 - The first U.S. Census is completed. There are four million people in the U.S.'
  ],
  
  _sepFacts: [
  	'September 1, 1939 - At 5.30 a.m., Hitler\'s armies invaded Poland, starting World War II in Europe.',
    'September 2, 1666 - The Great Fire of London began in a bakery in Pudding Lane near the Tower. Over the next three days more than 13,000 houses were destroyed, although only six lives were believed lost.',
    'September 2, 1752 - The British ended their use of the Julian calendar, switching instead to the Gregorian calendar, resulting in a major adjustment as Wednesday, September 2, was followed by Thursday, September 14. The correction resulted in rioting by people who felt cheated and demanded the missing eleven days back.',
    'September 4, 1609 - The island of Manhattan was discovered by navigator Henry Hudson.'
  ],
  
  _octFacts: [
  	'October 1, 1908 - Henry Ford\'s Model T, a "universal car" designed for the masses, went on sale for the first time.',
    'October 1, 1946 - Twelve Nazi leaders were sentenced to death at the International War Crimes Tribunal in Nuremberg, Germany.',
    'October 2, 1967 - Thurgood Marshall (1908-1993) was sworn in as the first African American associate justice of the U.S. Supreme Court. He served until 1991 and was known for opposing discrimination and the death penalty, and for championing free speech and civil liberties.',
    'October 1, 1979 - After 70 years of American control, the Panama Canal Zone was formally handed over to Panama.'
  ],
  
  _novFacts: [
  	'November 1, 1993 - The European Union came into existence as a result of the Maastricht Treaty.',
    'November 1, 1995 - The first all-race local government elections took place in South Africa, marking the end of the apartheid system.',
    'November 1, 1914 - The Bra is patented.',
    'November 1, 1800 - President John Adams and his family move into the White House at 1600 Pennsylvania Avenue in Washington, DC, becoming the first president to live there.'
  ],
  
  _decFacts: [
  	'December 1, 1955 - The birth of the modern American civil rights movement occurred as Rosa Parks was arrested in Montgomery, Alabama, for refusing to give up her seat to a white man and move to the back section of a municipal bus. Her arrest resulted in a year-long boycott of the city bus system by African Americans and led to legal actions ending racial segregation on municipal buses throughout the South.',
    'December 1, 1990 - England was connected to mainland Europe for the first time since the Ice Age as engineers digging a railway tunnel under the English Channel broke through the last rock layer.',
    'December 3, 1967 - The first successful heart transplant was performed by Dr. Christiaan Barnard at Cape Town, South African, on Louis Washkansky, who lived for 18 days.',
    'December 1, 1988 - Benazir Bhutto was nominated to become prime minister of Pakistan, the first woman to govern a Muslim nation.'
  ]
}

