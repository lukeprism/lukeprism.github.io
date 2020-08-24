<!-- hey. no cheating. -->
var bingoList = [];
bingoList[1] = [
  { name: "'fuck'", types: ["expeltive"] },
  { name: "'How did I die?'", types: ["question","quote"] },
  { name: "Slyly eating halfway through lockout", types: ["statement"] },
  { name: "Calvin leaves the VC", types: ["calvin","statement"] },
  { name: "'Muh parse'", types: ["quote"] }
];
bingoList[2] = [
  { name: "'Wait, so...'", types: ["quote"] },
  { name: "Someone doesn't have the duty unlocked", types: ["someone"] },
  { name: "'Oh that's a knockback'", types: ["quote","mech"] },
  { name: "Lyra mews", types: ["lyra","emote"] },
  { name: "Vanity LB cuz it's a wipe", types: ["lb","statement"] },
  { name: "'Calvin succor?'", types: ["question","calvin"] }
];
bingoList[3] = [
  { name: "Marisa mentions the CE", types: ["marisa","ce"] },
  { name: "Someone *else* mentions the CE which prompts a long and loving speech from Marisa", types: ["marisa","ce"] },
  { name: "Rito blames server ticks", types: ["rito","statement"] },
  { name: "'shhhhhit'", types: ["expeltive"] },
  { name: "Judy asks how to do a mech when everyone else is too afraid to ask", types: ["judy","statement"] }
];
bingoList[4] = [
  { name: "'Oops I forgot'", types: ["quote"] },
  { name: "'Go to A/1/D/G' all screamed at once", types: ["mech"] },
  { name: "Lyra dances during mech explanation", types: ["lyra","emote"] },
  { name: ":blobnom:", types: ["emote"] },
  { name: "muh tv", types: ["meta"] },
  { name: "'WHAT WAS THAT?!'", types: ["expeltive","question"] }
];
bingoList[5] = [
  { name: "Pull at 3 mins before lockout", types: ["statement"] },
  { name: "someone's gear breaks", types: ["someone"] },
  { name: "Sam jumps off the arena", types: ["sam","jspecific"] },
  { name: "Rito jumps off the arena", types: ["rito","jspecific"] },
  { name: "robot has entered the voice chat", types: ["pspecific","statement","meta"] },
  { name: "'only >100% durability?! gee whiz'", types: ["pspecific","quote"] },
  { name: "Judy makes a diagram", types: ["judy"] }
];
bingoList[6] = [
  { name: "vintage meme discussion", types: ["pspecific","statement","meta"] },
  { name: "abuse of rez invulnerability", types: ["mech"] },
  { name: "someone pulls while mechs are being typed in chat", types: ["someone"] },
  { name: "/bread", types: ["emote"] },
  { name: "Aeo cries when something *looks* at him", types: ["aeo","statement","jspecific"] },
  { name: "distant violin/piano/cat noises", types: ["noise","pspecific"] },
  { name: "new 'stinky/cokemom/ back alley of target' is begrudgingly adopted as a strat", types: ["mech"] }
];
bingoList[7] = [
  { name: "'sorry i didn't have bene'", types: ["quote","jspecific","heals"] },
  { name: "the gang is cleaved", types: ["statement"] },
  { name: "*clack clack clack*", types: ["noise","pspecific"] },
  { name: "'this is just like [past raid/mech]!!!'", types: ["quote","canon"] },
  { name: "'why do i have aggro'", types: ["quote"] }
];
bingoList[8] = [
  { name: "'[tank] stance?'", types: ["quote","jspecific"] },
  { name: "someone announces they'll brb right when someone returns from brb", types: ["someone","meta"] },
  { name: "healers aggressively claiming their cohealer did all the work", types: ["statement","heals"] },
  { name: "Marisa makes some food", types: ["marisa"] },
  { name: "someone swaps glams between lockouts", types: ["someone"] },
  { name: "irresponsible use of rescue", types: ["statement","heals"] }
];
bingoList[9] = [
  { name: "no one understands the mechs but we clear anyway", types: ["mech","statement"] },
  { name: "rez mage forgets they can rez", types: ["jspecific","sattement"] },
  { name: "(se.6)", types: ["noise","emote"] },
  { name: "'stack on his butt'", types: ["quote","mech"] },
  { name: "gobbiespeak", types: ["statement"] },
  { name: "someone links a diagram", types: ["someone","meta"] },
  { name: "Janelle", types: ["expeltive","pspecific"] }
];
bingoList[10] = [
  { name: "someone cries in melee dps", types: ["jspecific","someone"] },
  { name: "FINAL JUDGEMENT PASSED... BASK IN THE LIGHT AND BE CLEANSED!", types: ["gquote","statement","canon"] },
  { name: "Sam shows up in something even sluttier than before", types: ["sam","statement"] },
  { name: "'i don't know how to play this game'", types: ["quote"] },
  { name: "'what do i do with this [tether/stack marker]'", types: ["quote","mech"] },
  { name: "clock positions", types: ["mech"] },
  { name: "left/right versus east/west", types: ["mech","statement"] }
];
bingoList[11] = [
  { name: "Ayra, Balvin, Cyrus, and D'arisa", types: ["pspecific","mech"] },
  { name: "calls the mechanic out right after it happens", types: ["mech","statement"] },
  { name: "'Sam, Megabeam?' when the attack is clearly not Megabeam", types: ["sam","mech"] },
  { name: "'go to L' (i is also acceptable)", types: ["mech","quote"] },
  { name: "Ellory calls something sexy", types: ["ellory","meta"] },
  { name: "someone references the bingo card (you are disqualified)", types: ["meta"] }
];
bingoList[12] = [
  { name: "'is this the enrage?!' on a long cast bar", types: ["mech","quote"] },
  { name: "'wrong button'", types: ["expeltive","quote"] },
  { name: "when in doubt, stack on lyra", types: ["mech","lyra"] },
  { name: "'surecast/arm's length doesn't work btw'", types: ["mech","quote"] },
  { name: "6+ vuln stacks and somehow is still alive", types: ["mech"] }
];
bingoList[13] = [
  { name: "someone mentions t6s and everyone wails", types: ["canon","someone"] },
  { name: "someone starts singing", types: ["someone","meta","noise"] },
  { name: "forgets to unmute themselves for five minutes", types: ["meta"] },
  { name: "'sorry my cat/dog/bird is vomiting'", types: ["quote"] },
  { name: "something cursed is linked in vc chat", types: ["meta","statement"] }
];
bingoList[14] = [
  { name: "someone brb comes back to find themselves dead and the party whistling at spawn", types: ["meta","someone"] },
  { name: "Aeo is referred to as Rito and only Aeo notices", types: ["aeo","statement"] },
  { name: "Alexander nostalgia", types: ["statement","canon"] },
  { name: "guys lets just do uwu instead", types: ["meta"] },
  { name: "someone who is definitely not playing a tank role is shirked", types: ["meme","jspecific"] }
];
bingoList[15] = [
  { name: "a semi-coherent conversation is had using exclusively the autotranslate function", types: ["statement"] },
  { name: "someone learns a new word and wishes they hadn't", types: ["someone","meta"] },
  { name: "someone forgets to switch classes before queue and rolls with it", types: ["someone","meta"] },
  { name: "/tdance", types: ["emote"] },
  { name: "/gdance", types: ["emote"] },
  { name: "/yoldance", types: ["emote"] }
];
bingoList[16] = [
 { name: "someone accidentally walks off the arena", types: ["someone","dspecific"] },
 { name: "'so you *can* die by falling off'", types: ["expeltive","quote"] },
 { name: ">duty actions", types: ["mech","dspecific"] },
 { name: "someone jumps off on purpose to accelerate the wipe", types: ["mech","statement"] },
 { name: "unfortunatly timed acceptance of raise results in instant death", types: ["mech","statement"] },
 { name: "healer has dance partner for some reason", types: ["jspecific"] }
];
bingoList[17] = [
 { name: "committing to an incorrect callout just to save face", types: ["mech","statement"] },
 { name: "'ENOCHAN NO'", types: ["expeltive","jspecific"] },
 { name: "'oops i got greedy'", types: ["quote"] },
 { name: "someone accidentally facepulls the boss", types: ["someone"] },
 { name: "someone abuses a safety pixel", types: ["someone"] }
];
bingoList[18] = [
 { name: "the raise misses and no one else has swift", types: ["jspecific"] },
 { name: "'wow that did [my max health] in damage'", types: ["quote"] },
 { name: "an attack does a frankly absurd amount of damage", types: ["statement"] },
 { name: "pokeball of death results in a d/c mid-pull", types: ["pspecific","statement"] },
 { name: "internet problems :tm:", types: ["quote"] }
];
bingoList[19] = [
 { name: "late start due to timezone shenanigans", types: ["statement"] },
 { name: "'we have to clear before maintenance tonight'", types: ["special","quote"] },
 { name: "spinning around in place prepull to assert dominance", types: ["statement"] },
 { name: "someone is late and blames it on the queue", types: ["someone"] },
 { name: "someone nearly spoils MSQ for a slacker", types: ["someone"] }
];
bingoList[20] = [
 { name: "Elidibus Serpentarius comes up", types: ["meta","canon"] },
 { name: "'social distancing ya'll lets spread'", types: ["meta","mech","quote"] },
 { name: "'that looks like a tankswap'", types: ["mech","quote"] },
 { name: "forward and back and fooorward and back and", types: ["noise","canon"] },
 { name: "marker placement is berated", types: ["rito","jspecific"] }
];
bingoList[21] = [
 { name: "everyone screaming for LB when it's already casting", types: ["lb","statement","special"] },
 { name: "'you don't pay my sub'", types: ["quote","meta"] },
 { name: "'wait don't queue i need to repair'", types: ["quote"] },
 { name: "healer lb3 cheeseing a mech", types: ["mech","lb"] }
];
bingoList[22] = [
 { name: "Complete silence when it's [The Pull]", types: ["statement","special"] },
 { name: "/pet", types: ["emote"] },
 { name: "/dote", types: ["emote"] },
 { name: "'ah wait, gotta start recording/the stream'", types: ["quote","rito"] },
 { name: "someone is a different race than they were last session", types: ["someone","special"] }
];
bingoList[23] = [
 { name: "'DON'T LEAVE we need a screenshot'", types: ["statement","quote","special"] },
 { name: "an executive decision to turn echo back on is made", types: ["meta","special"] },
 { name: "Ready: 7/8", types: ["meta","statement"] },
 { name: "overheal is 60%", types: ["meta","jspecific"] }
];
bingoList[24] = [
 { name: "there's a sub this session", types: ["sub","special"] },
 { name: "controller woes", types: ["meta","pspecific"] },
 { name: "mouse woes", types: ["meta"] },
 { name: "'you are the bear'", types: ["meta","canon","mech"] },
 { name: "the gang's all here (no subs)", types: ["meta"] },
 { name: "going over mechs for a sub", types: ["mech","sub"] }
];
bingoList[25] = [
  { name: "first clear in 3+ weeks", types: ["special"] },
  { name: "we got the clear!!", types: ["special"] },
  { name: "cleared on the first pull", types: ["special"] }
];
$(function() { srl.bingo(bingoList, 5); });