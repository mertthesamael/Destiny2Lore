
$(".page-2").click(function(){
  $(".page-2").attr("src","images/page-2-focused.png")
  $(".page-1").attr("src","images/page-1-unfocus.png")
  $(".section-title").text("I: Predators")
  $(".content-text-section").text("Predators and Menaces — Carved to endure by Xi Ro Third surviving sister of the Osmium King’s last brood  A STORMJOY. A stormjoy is a living cloud. When it passes over our continent, it lowers its feeding tentacles. On each tentacle are the BAIT STARS. Although light makes you happy, you must avoid it. You will be eaten. A stormjoy is a good way for an old person to choose death. Also, a daring knight can cut the bait stars from the tentacles. I have six! FALLING. If you fall off the edge of the continent, you will die in the ocean! This is a special hazard when our father the Osmium King uses the engines. HELIUM DRINKERS. The currents of the Fundament Ocean bring us near other continents. The Helium Court is near us now. They are of our species, but they are our enemies. Their knights raid us every day. Helium Drinkers have two legs, two arms, and three eyes, just like us. But they are bright/evil. I want to be a knight and fight them! The Helium Drinker ambassador ate ten of my sisters as tribute. This is normal. However, I resent it. MOTHERS. Mothers can fly! They live much longer than ten years. Mothers are extremely smart, and they guard their spawn. If you try to tamper with the eggs, they will eat you. Sathona wants to eat the jelly and become a mother when she turns four. STORMS. The rain is often poisonous. Sometimes it dissolves flesh. When lightning misses the lightning farm, it can vaporize a person. This entire world is deadly to us. MYSTERIES. The Fundament is very large. We are the smallest things in it. If you don’t understand something, it will probably kill you. My teacher Taox says this is why we have such short lives. So we can breed and adapt quickly MOON WAVES. My sister Aurash is afraid of moon waves. When she gets back from her expedition to the Tungsten Monoliths, I will ask her why.")
})

$(".page-1").click(function(){
  switch ($(".book-name").text()){
    case "Birth of Hive" : $(".content-text-section").text("Dearest sisters,It’s taken me two years — a quarter of our lives — but I’ve found the proof. We aren’t native to the Fundament. Our ancient ancestors came here to hide.The plate of stone we live on, our Osmium Court, is one fragment of a rocky planet that crashed into the Fundament and broke apart. All the other nearby continents — the Helium Drinkers, the Bone Plaza, the Starcutters — came from the same world.Perhaps the other races of the Fundament are migrants too.We live on the shrapnel of our homeworld, floating on an ocean deep inside a gas giant.That’s what Fundament must be. A titanic gas planet. The endless storm above us must be one layer of the atmosphere. And the sea we float on... there’s more down beneath it. So much more!You understand what this means, Sathona. The Timid Truth is a lie. We aren’t meant to be the world’s prey. We weren’t born to live and die in the dark.We have a better destiny. Tell our father, sister Sathona. This is the proof of his life’s work.With love, for your second birthday,Your first surviving sister, Aurash")

    $(".section-title").text("Fundament")
    $(".page-1").attr("src","images/page-1.png")
    $(".page-2").attr("src","images/page-2-unfocus.png")
    break;

    case "The Golden Age":$(".content-text-section").text("The Traveler changed everything. It reshaped our solar system as decisively as it shattered our scientific and philosophical frameworks. To our ancestors it must have been a hammerblow - a glimpse beyond the horizon of expected possibility and into a realm of transcendent power. The Traveler kindled the Golden Age. But we built it. We remember this with pride, even after so much else has been lost. We settled our solar system and filled it with our work. Today Cryptarchs and scholars work to distill the legends of the Golden Age into truth. We know that humans lived longer, flew further, and knew more. We know that countless ancient diseases and hatreds were extinguished forever. Human aspiration gives birth to vast engineering projects, sweeping social movements, and even new forms of life. The Golden Age was not without challenges. Sources speak of internal strife, philosophical rifts- particularly around questions of machine intelligence and 'mind forking' - and enduring scientific enigmas. But humanity and its machine children tackled these problems with pride, vigor, and a contagious sense of pluralist compassion.")
    $(".book-cover").attr("src", "images/the-golden-age.jpg")
    $(".page-2").css("display", "none")
    break;
  }

})



$(".book-icon").click(function bookOne(){

  $(".content-text-section").text("Dearest sisters,It’s taken me two years — a quarter of our lives — but I’ve found the proof. We aren’t native to the Fundament. Our ancient ancestors came here to hide.The plate of stone we live on, our Osmium Court, is one fragment of a rocky planet that crashed into the Fundament and broke apart. All the other nearby continents — the Helium Drinkers, the Bone Plaza, the Starcutters — came from the same world.Perhaps the other races of the Fundament are migrants too.We live on the shrapnel of our homeworld, floating on an ocean deep inside a gas giant.That’s what Fundament must be. A titanic gas planet. The endless storm above us must be one layer of the atmosphere. And the sea we float on... there’s more down beneath it. So much more!You understand what this means, Sathona. The Timid Truth is a lie. We aren’t meant to be the world’s prey. We weren’t born to live and die in the dark.We have a better destiny. Tell our father, sister Sathona. This is the proof of his life’s work.With love, for your second birthday,Your first surviving sister, Aurash")
  $(".book-name").text("Birth of Hive")
  $(".section-title").text("Fundament")
  $(".book-cover").attr("src", "images/birth-of-hive.jpg")
  $(".page-2").css("display", "inline")

  $(".content").fadeIn(2000);
});


$(".book-icon-2").click(function(){
  $(".book-name").text("The Golden Age")
  $(".section-title").text("The Golden Age")
  $(".content-text-section").text("The Traveler changed everything. It reshaped our solar system as decisively as it shattered our scientific and philosophical frameworks. To our ancestors it must have been a hammerblow - a glimpse beyond the horizon of expected possibility and into a realm of transcendent power. The Traveler kindled the Golden Age. But we built it. We remember this with pride, even after so much else has been lost. We settled our solar system and filled it with our work. Today Cryptarchs and scholars work to distill the legends of the Golden Age into truth. We know that humans lived longer, flew further, and knew more. We know that countless ancient diseases and hatreds were extinguished forever. Human aspiration gives birth to vast engineering projects, sweeping social movements, and even new forms of life. The Golden Age was not without challenges. Sources speak of internal strife, philosophical rifts- particularly around questions of machine intelligence and 'mind forking' - and enduring scientific enigmas. But humanity and its machine children tackled these problems with pride, vigor, and a contagious sense of pluralist compassion.")
  $(".book-cover").attr("src", "images/the-golden-age.jpg")
  $(".page-2").css("display", "none")
  $(".content").fadeIn(2000);

})
