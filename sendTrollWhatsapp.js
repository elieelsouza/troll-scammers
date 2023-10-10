async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
SHREK

Written by

William Steig & Ted Elliott




SHREK
Once upon a time there was a lovely 
princess. But she had an enchantment 
upon her of a fearful sort which could 
only be broken by love's first kiss. 
She was locked away in a castle guarded 
by a terrible fire-breathing dragon. 
Many brave knights had attempted to 
free her from this dreadful prison, 
but non prevailed. She waited in the 
dragon's keep in the highest room of 
the tallest tower for her true love 
and true love's first kiss. (laughs) 
Like that's ever gonna happen. What 
a load of - (toilet flush)

Allstar - by Smashmouth begins to play. Shrek goes about his 
day. While in a nearby town, the villagers get together to go 
after the ogre.

NIGHT - NEAR SHREK'S HOME

MAN1
Think it's in there?

MAN2
All right. Let's get it!

MAN1
Whoa. Hold on. Do you know what that 
thing can do to you?

MAN3
Yeah, it'll grind your bones for it's 
bread.

Shrek sneaks up behind them and laughs.

SHREK
Yes, well, actually, that would be a 
giant. Now, ogres, oh they're much worse. 
They'll make a suit from your freshly 
peeled skin.

MEN
No!

SHREK
They'll shave your liver. Squeeze the 
jelly from your eyes! Actually, it's 
quite good on toast.

MAN1
Back! Back, beast! Back! I warn ya! 
(waves the torch at Shrek.)

Shrek calmly licks his fingers and extinguishes the torch. The 
men shrink back away from him. Shrek roars very loudly and long 
and his breath extinguishes all the remaining torches until the 
men are in the dark.

SHREK
This is the part where you run away. 
(The men scramble to get away. He laughs.) 
And stay out! (looks down and picks 
up a piece of paper. Reads.) "Wanted. 
Fairy tale creatures."(He sighs and 
throws the paper over his shoulder.)


THE NEXT DAY

There is a line of fairy tale creatures. The head of the guard 
sits at a table paying people for bringing the fairy tale creatures 
to him. There are cages all around. Some of the people in line 
are Peter Pan, who is carrying Tinkerbell in a cage, Gipetto 
who's carrying Pinocchio, and a farmer who is carrying the three 
little pigs.

GUARD
All right. This one's full. Take it 
away! Move it along. Come on! Get up!


HEAD GUARD
Next!

GUARD
(taking the witch's broom) Give me that! 
Your flying days are over. (breaks the 
broom in half)

HEAD GUARD
That's 20 pieces of silver for the witch. 
Next!

GUARD
Get up! Come on!

HEAD GUARD
Twenty pieces.

LITTLE BEAR
(crying) This cage is too small.

DONKEY
Please, don't turn me in. I'll never 
be stubborn again. I can change. Please! 
Give me another chance!

OLD WOMAN
Oh, shut up. (jerks his rope)

DONKEY
Oh!

HEAD GUARD
Next! What have you got?

GIPETTO
This little wooden puppet.

PINOCCHIO
I'm not a puppet. I'm a real boy. (his 
nose grows)

HEAD GUARD
Five shillings for the possessed toy. 
Take it away.

PINOCCHIO
Father, please! Don't let them do this! 
Help me!

Gipetto takes the money and walks off. The old woman steps up 
to the table.

HEAD GUARD
Next! What have you got?

OLD WOMAN
Well, I've got a talking donkey.

HEAD GUARD
Right. Well, that's good for ten shillings, 
if you can prove it.

OLD WOMAN
Oh, go ahead, little fella.

Donkey just looks up at her.

HEAD GUARD
Well?

OLD WOMAN
Oh, oh, he's just...he's just a little 
nervous. He's really quite a chatterbox. 
Talk, you boneheaded dolt...

HEAD GUARD
That's it. I've heard enough. Guards!


OLD WOMAN
No, no, he talks! He does. (pretends 
to be Donkey) I can talk. I love to 
talk. I'm the talkingest damn thing 
you ever saw.

HEAD GUARD
Get her out of my sight.

OLD WOMAN
No, no! I swear! Oh! He can talk!

The guards grab the old woman and she struggles with them. One 
of her legs flies out and kicks Tinkerbell out of Peter Pan's 
hands, and her cage drops on Donkey's head. He gets sprinkled 
with fairy dust and he's able to fly.

DONKEY
Hey! I can fly!

PETER PAN
He can fly!

3 LITTLE PIGS
He can fly!

HEAD GUARD
He can talk!

DONKEY
Ha, ha! That's right, fool! Now I'm 
a flying, talking donkey. You might 
have seen a housefly, maybe even a superfly 
but I bet you ain't never seen a donkey 
fly. Ha, ha! (the pixie dust begins 
to wear off) Uh-oh. (he begins to sink 
to the ground.)

He hits the ground with a thud.

HEAD GUARD
Seize him! (Donkey takes of running.) 
After him!

GUARDS
He's getting away! Get him! This way! 
Turn!

Donkey keeps running and he eventually runs into Shrek. Literally. 
Shrek turns around to see who bumped into him. Donkey looks scared 
for a moment then he spots the guards coming up the path. He 
quickly hides behind Shrek.

HEAD GUARD
You there. Ogre!

SHREK
Aye?

HEAD GUARD
By the order of Lord Farquaad I am authorized 
to place you both under arrest and transport 
you to a designated resettlement facility.


SHREK
Oh, really? You and what army?

He looks behind the guard and the guard turns to look as well 
and we see that the other men have run off. The guard tucks tail 
and runs off. Shrek laughs and goes back about his business and 
begins walking back to his cottage.

DONKEY
Can I say something to you? Listen, 
you was really, really, really somethin' 
back here. Incredible!

SHREK
Are you talkin' to...(he turns around 
and Donkey is gone) me? (he turns back 
around and Donkey is right in front 
of him.) Whoa!

DONKEY
Yes. I was talkin' to you. Can I tell 
you that you that you was great back 
here? Those guards! They thought they 
was all of that. Then you showed up, 
and bam! They was trippin' over themselves 
like babes in the woods. That really 
made me feel good to see that.

SHREK
Oh, that's great. Really.

DONKEY
Man, it's good to be free.

SHREK
Now, why don't you go celebrate your 
freedom with your own friends? Hmm?


DONKEY
But, uh, I don't have any friends. And 
I'm not goin' out there by myself. Hey, 
wait a minute! I got a great idea! I'll 
stick with you. You're mean, green, 
fightin' machine. Together we'll scare 
the spit out of anybody that crosses 
us.

Shrek turns and regards Donkey for a moment before roaring very 
loudly.

DONKEY
Oh, wow! That was really scary. If you 
don't mind me sayin', if that don't 
work, your breath certainly will get 
the job done, 'cause you definitely 
need some Tic Tacs or something, 'cause 
you breath stinks! You almost burned 
the hair outta my nose, just like the 
time...(Shrek covers his mouth but Donkey 
continues to talk, so Shrek removes 
his hand.) ...then I ate some rotten 
berries. I had strong gases leaking 
out of my butt that day.

SHREK
Why are you following me?

DONKEY
I'll tell you why. (singing) 'Cause 
I'm all alone, There's no one here beside 
me, My problems have all gone, There's 
no one to deride me, But you gotta have 
faith...

SHREK
Stop singing! It's no wonder you don't 
have any friends.

DONKEY
Wow. Only a true friend would be that 
cruelly honest.

SHREK
Listen, little donkey. Take a look at 
me. What am I?

DONKEY
(looks all the way up at Shrek) Uh ...really 
tall?

SHREK
No! I'm an ogre! You know. "Grab your 
torch and pitchforks." Doesn't that 
bother you?

DONKEY
Nope.

SHREK
Really?

DONKEY
Really, really.

SHREK
Oh.

DONKEY
Man, I like you. What's you name?

SHREK
Uh, Shrek.

DONKEY
Shrek? Well, you know what I like about 
you, Shrek? You got that kind of I-don't-care-what-nobody-thinks-of-me 
thing. I like that. I respect that, 
Shrek. You all right. (They come over 
a hill and you can see Shrek's cottage.) 
Whoa! Look at that. Who'd want to live 
in place like that?

SHREK
That would be my home.

DONKEY
Oh! And it is lovely! Just beautiful. 
You know you are quite a decorator. 
It's amazing what you've done with such 
a modest budget. I like that boulder. 
That is a nice boulder. I guess you 
don't entertain much, do you?

SHREK
I like my privacy.

DONKEY
You know, I do too. That's another thing 
we have in common. Like I hate it when 
you got somebody in your face. You've 
trying to give them a hint, and they 
won't leave. There's that awkward silence. 
(awkward silence) Can I stay with you?


SHREK
Uh, what?

DONKEY
Can I stay with you, please?

SHREK
(sarcastically) Of course!

DONKEY
Really?

SHREK
No.

DONKEY
Please! I don't wanna go back there! 
You don't know what it's like to be 
considered a freak. (pause while he 
looks at Shrek) Well, maybe you do. 
But that's why we gotta stick together. 
You gotta let me stay! Please! Please!


SHREK
Okay! Okay! But one night only.

DONKEY
Ah! Thank you! (he runs inside the cottage)


SHREK
What are you...? (Donkey hops up onto 
a chair.) No! No!

DONKEY
This is gonna be fun! We can stay up 
late, swappin' manly stories, and in 
the mornin' I'm makin' waffles.

SHREK
Oh!

DONKEY
Where do, uh, I sleep?

SHREK
(irritated) Outside!

DONKEY
Oh, well, I guess that's cool. I mean, 
I don't know you, and you don't know 
me, so I guess outside is best, you 
know. Here I go. Good night. (Shrek 
slams the door.) (sigh) I mean, I do 
like the outdoors. I'm a donkey. I was 
born outside. I'll just be sitting by 
myself outside, I guess, you know. By 
myself, outside. I'm all alone...there's 
no one here beside me...

SHREK'S COTTAGE - NIGHT

Shrek is getting ready for dinner. He sits himself down and lights 
a candle made out of earwax. He begins to eat when he hears a 
noise. He stands up with a huff.

SHREK
(to Donkey) I thought I told you to 
stay outside.

DONKEY
(from the window) I am outside.

There is another noise and Shrek turns to find the person that 
made the noise. He sees several shadows moving. He finally turns 
and spots 3 blind mice on his table.

BLIND MOUSE1
Well, gents, it's a far cry from the 
farm, but what choice do we have?


BLIND MOUSE2
It's not home, but it'll do just fine.


GORDO
(bouncing on a slug) What a lovely bed.


SHREK
Got ya. (Grabs a mouse, but it escapes 
and lands on his shoulder.)

GORDO
I found some cheese. (bites Shrek's 
ear)

SHREK
Ow!

GORDO
Blah! Awful stuff.

BLIND MOUSE1
Is that you, Gordo?

GORDO
How did you know?

SHREK
Enough! (he grabs the 3 mice) What are 
you doing in my house? (He gets bumped 
from behind and he drops the mice.) 
Hey! (he turns and sees the Seven Dwarves 
with Snow White on the table.) Oh, no, 
no, no. Dead broad off the table.


DWARF
Where are we supposed to put her? The 
bed's taken.

SHREK
Huh?

Shrek marches over to the bedroom and throws back the curtain. 
The Big Bad Wolf is sitting in the bed. The wolf just looks at 
him.

BIG BAD WOLF
What?

TIME LAPSE

Shrek now has the Big Bad Wolf by the collar and is dragging 
him to the front door.

SHREK
I live in a swamp. I put up signs. I'm 
a terrifying ogre! What do I have to 
do get a little privacy? (He opens the 
front door to throw the Wolf out and 
he sees that all the collected Fairy 
Tale Creatures are on his land.) Oh, 
no. No! No!

The 3 bears sit around the fire, the pied piper is playing his 
pipe and the rats are all running to him, some elves are directing 
flight traffic so that the fairies and witches can land...etc.


SHREK
What are you doing in my swamp? (this 
echoes and everyone falls silent.)


Gasps are heard all around. The 3 good fairies hide inside a 
tent.

SHREK
All right, get out of here. All of you, 
move it! Come on! Let's go! Hapaya! 
Hapaya! Hey! Quickly. Come on! (more 
dwarves run inside the house) No, no! 
No, no. Not there. Not there. (they 
shut the door on him) Oh! (turns to 
look at Donkey)

DONKEY
Hey, don't look at me. I didn't invite 
them.

PINOCCHIO
Oh, gosh, no one invited us.

SHREK
What?

PINOCCHIO
We were forced to come here.

SHREK
(flabbergasted) By who?

LITTLE PIG
Lord Farquaad. He huffed and he puffed 
and he...signed an eviction notice.


SHREK
(heavy sigh) All right. Who knows where 
this Farquaad guy is?

Everyone looks around at each other but no one answers.

DONKEY
Oh, I do. I know where he is.

SHREK
Does anyone else know where to find 
him? Anyone at all?

DONKEY
Me! Me!

SHREK
Anyone?

DONKEY
Oh! Oh, pick me! Oh, I know! I know! 
Me, me!

SHREK
(sigh) Okay, fine. Attention, all fairy 
tale things. Do not get comfortable. 
Your welcome is officially worn out. 
In fact, I'm gonna see this guy Farquaad 
right now and get you all off my land 
and back where you came from! (Pause. 
Then the crowd goes wild.) Oh! (to Donkey) 
You! You're comin' with me.

DONKEY
All right, that's what I like to hear, 
man. Shrek and Donkey, two stalwart 
friends, off on a whirlwind big-city 
adventure. I love it!

DONKEY
(singing) On the road again. Sing it 
with me, Shrek. I can't wait to get 
on the road again.

SHREK
What did I say about singing?

DONKEY
Can I whistle?

SHREK
No.

DONKEY
Can I hum it?

SHREK
All right, hum it.

Donkey begins to hum 'On the Road Again'.

DULOC - KITCHEN

A masked man is torturing the Gingerbread Man. He's continually 
dunking him in a glass of milk. Lord Farquaad walks in.

FARQUAAD
That's enough. He's ready to talk.


The Gingerbread Man is pulled out of the milk and slammed down 
onto a cookie sheet. Farquaad laughs as he walks over to the 
table. However when he reaches the table we see that it goes 
up to his eyes. He clears his throat and the table is lowered.


FARQUAAD
(he picks up the Gingerbread Man's legs 
and plays with them) Run, run, run, 
as fast as you can. You can't catch 
me. I'm the gingerbread man.

GINGERBREAD MAN
You are a monster.

FARQUAAD
I'm not the monster here. You are. You 
and the rest of that fairy tale trash, 
poisoning my perfect world. Now, tell 
me! Where are the others?

GINGERBREAD MAN
Eat me! (He spits milk into Farquaad's 
eye.)

FARQUAAD
I've tried to be fair to you creatures. 
Now my patience has reached its end! 
Tell me or I'll...(he makes as if to 
pull off the Gingerbread Man's buttons)


GINGERBREAD MAN
No, no, not the buttons. Not my gumdrop 
buttons.

FARQUAAD
All right then. Who's hiding them?


GINGERBREAD MAN
Okay, I'll tell you. Do you know the 
muffin man?

FARQUAAD
The muffin man?

GINGERBREAD MAN
The muffin man.

FARQUAAD
Yes, I know the muffin man, who lives 
on Drury Lane?

GINGERBREAD MAN
Well, she's married to the muffin man.


FARQUAAD
The muffin man?

GINGERBREAD MAN
The muffin man!

FARQUAAD
She's married to the muffin man.

The door opens and the Head Guard walks in.

HEAD GUARD
My lord! We found it.

FARQUAAD
Then what are you waiting for? Bring 
it in.

More guards enter carrying something that is covered by a sheet. 
They hang up whatever it is and remove the sheet. It is the Magic 
Mirror.

GINGERBREAD MAN
(in awe) Ohhhh...

FARQUAAD
Magic mirror...

GINGERBREAD MAN
Don't tell him anything! (Farquaad picks 
him up and dumps him into a trash can 
with a lid.) No!

FARQUAAD
Evening. Mirror, mirror on the wall. 
Is this not the most perfect kingdom 
of them all?

MIRROR
Well, technically you're not a king.


FARQUAAD
Uh, Thelonius. (Thelonius holds up a 
hand mirror and smashes it with his 
fist.) You were saying?

MIRROR
What I mean is you're not a king yet. 
But you can become one. All you have 
to do is marry a princess.

FARQUAAD
Go on.

MIRROR
(chuckles nervously) So, just sit back 
and relax, my lord, because it's time 
for you to meet today's eligible bachelorettes. 
And here they are! Bachelorette number 
one is a mentally abused shut-in from 
a kingdom far, far away. She likes sushi 
and hot tubbing anytime. Her hobbies 
include cooking and cleaning for her 
two evil sisters. Please welcome Cinderella. 
(shows picture of Cinderella) Bachelorette 
number two is a cape-wearing girl from 
the land of fancy. Although she lives 
with seven other men, she's not easy. 
Just kiss her dead, frozen lips and 
find out what a live wire she is. Come 
on. Give it up for Snow White! (shows 
picture of Snow White) And last, but 
certainly not last, bachelorette number 
three is a fiery redhead from a dragon-guarded 
castle surrounded by hot boiling lava! 
But don't let that cool you off. She's 
a loaded pistol who likes pina colads 
and getting caught in the rain. Yours 
for the rescuing, Princess Fiona! (Shows 
picture of Princess Fiona) So will it 
be bachelorette number one, bachelorette 
number two or bachelorette number three?


GUARDS
Two! Two! Three! Three! Two! Two! Three!


FARQUAAD
Three? One? Three?

THELONIUS
Three! (holds up 2 fingers) Pick number 
three, my lord!

FARQUAAD
Okay, okay, uh, number three!

MIRROR
Lord Farquaad, you've chosen Princess 
Fiona.

FARQUAAD
Princess Fiona. She's perfect. All I 
have to do is just find someone who 
can go...

MIRROR
But I probably should mention the little 
thing that happens at night.

FARQUAAD
I'll do it.

MIRROR
Yes, but after sunset...

FARQUAAD
Silence! I will make this Princess Fiona 
my queen, and DuLoc will finally have 
the perfect king! Captain, assemble 
your finest men. We're going to have 
a tournament. (smiles evilly)

DuLoc Parking Lot - Lancelot Section

Shrek and Donkey come out of the field that is right by the parking 
lot. The castle itself is about 40 stories high.

DONKEY
But that's it. That's it right there. 
That's DuLoc. I told ya I'd find it.


SHREK
So, that must be Lord Farquaad's castle.


DONKEY
Uh-huh. That's the place.

SHREK
Do you think maybe he's compensating 
for something? (He laughs, but then 
groans as Donkey doesn't get the joke. 
He continues walking through the parking 
lot.)

DONKEY
Hey, wait. Wait up, Shrek.

MAN
Hurry, darling. We're late. Hurry.


SHREK
Hey, you! (The attendant, who is wearing 
a giant head that looks like Lord Farquaad, 
screams and begins running through the 
rows of rope to get to the front gate 
to get away from Shrek.) Wait a second. 
Look, I'm not gonna eat you. I just 
- - I just - - (He sighs and then begins 
walking straight through the rows. The 
attendant runs into a wall and falls 
down. Shrek and Donkey look at him then 
continue on into DuLoc.)

DULOC

They look around but all is quiet.

SHREK
It's quiet. Too quiet. Where is everybody?


DONKEY
Hey, look at this!

Donkey runs over and pulls a lever that is attached to a box 
marked 'Information'. The music winds up and then the box doors 
open up. There are little wooden people inside and they begin 
to sing.

WOODEN PEOPLE
Welcome to DuLoc such a perfect town


Here we have some rules

Let us lay them down

Don't make waves, stay in line

And we'll get along fine

DuLoc is perfect place

Please keep off of the grass

Shine your shoes, wipe your... face

DuLoc is, DuLoc is

DuLoc is perfect place.

Suddenly a camera takes Donkey and Shrek's picture.

DONKEY
Wow! Let's do that again! (makes ready 
to run over and pull the lever again)


SHREK
(grabs Donkey's tail and holds him still) 
No. No. No, no, no! No.

They hear a trumpet fanfare and head over to the arena.

FARQUAAD
Brave knights. You are the best and 
brightest in all the land. Today one 
of you shall prove himself...

As Shrek and Donkey walk down the tunnel to get into the arena 
Donkey is humming the DuLoc theme song.

SHREK
All right. You're going the right way 
for a smacked bottom.

DONKEY
Sorry about that.

FARQUAAD
That champion shall have the honor - 
- no, no - - the privilege to go forth 
and rescue the lovely Princess Fiona 
from the fiery keep of the dragon. If 
for any reason the winner is unsuccessful, 
the first runner-up will take his place 
and so on and so forth. Some of you 
may die, but it's a sacrifice I am willing 
to make. (cheers) Let the tournament 
begin! (He notices Shrek) Oh! What is 
that? It's hideous!

SHREK
(turns to look at Donkey and then back 
at Farquaad) Ah, that's not very nice. 
It's just a donkey.

FARQUAAD
Indeed. Knights, new plan! The one who 
kills the ogre will be named champion! 
Have it him!

MEN
Get him!

SHREK
Oh, hey! Now come on! Hang on now. (bumps 
into a table where there are mugs of 
beer)

CROWD
Go ahead! Get him!

SHREK
(holds up a mug of beer) Can't we just 
settle this over a pint?

CROWD
Kill the beast!

SHREK
No? All right then. (drinks the beer) 
Come on!

He takes the mug and smashes the spigot off the large barrel 
of beer behind him. The beer comes rushing out drenching the 
other men and wetting the ground. It's like mud now. Shrek slides 
past the men and picks up a spear that one of the men dropped. 
As Shrek begins to fight Donkey hops up onto one of the larger 
beer barrels. It breaks free of it's ropes and begins to roll. 
Donkey manages to squish two men into the mud. There is so much 
fighting going on here I'm not going to go into detail. Suffice 
to say that Shrek kicks butt.

DONKEY
Hey, Shrek, tag me! Tag me!

Shrek comes over and bangs a man's head up against Donkeys. Shrek 
gets up on the ropes and interacts with the crowd.

SHREK
Yeah!

A man tries to sneak up behind Shrek, but Shrek turns in time 
and sees him.

WOMAN
The chair! Give him the chair!

Shrek smashes a chair over the guys back. Finally all the men 
are down. Donkey kicks one of them in the helmet, and the ding 
sounds the end of the match. The audience goes wild.

SHREK
Oh, yeah! Ah! Ah! Thank you! Thank you 
very much! I'm here till Thursday. Try 
the veal! Ha, ha! (laughs)

The laughter stops as all of the guards turn their weapons on 
Shrek.

HEAD GUARD
Shall I give the order, sir?

FARQUAAD
No, I have a better idea. People of 
DuLoc, I give you our champion!

SHREK
What?

FARQUAAD
Congratulations, ogre. You're won the 
honor of embarking on a great and noble 
quest.

SHREK
Quest? I'm already in a quest, a quest 
to get my swamp back.

FARQUAAD
Your swamp?

SHREK
Yeah, my swamp! Where you dumped those 
fairy tale creatures!

FARQUAAD
Indeed. All right, ogre. I'll make you 
a deal. Go on this quest for me, and 
I'll give you your swamp back.

SHREK
Exactly the way it was?

FARQUAAD
Down to the last slime-covered toadstool.


SHREK
And the squatters?

FARQUAAD
As good as gone.

SHREK
What kind of quest?

Time Lapse - Donkey and Shrek are now walking through the field 
heading away from DuLoc. Shrek is munching on an onion.

DONKEY
Let me get this straight. You're gonna 
go fight a dragon and rescue a princess 
just so Farquaad will give you back 
a swamp which you only don't have because 
he filled it full of freaks in the first 
place. Is that about right?

SHREK
You know, maybe there's a good reason 
donkeys shouldn't talk.

DONKEY
I don't get it. Why don't you just pull 
some of that ogre stuff on him? Throttle 
him, lay siege to his fortress, grinds 
his bones to make your bread, the whole 
ogre trip.

SHREK
Oh, I know what. Maybe I could have 
decapitated an entire village and put 
their heads on a pike, gotten a knife, 
cut open their spleen and drink their 
fluids. Does that sound good to you?


DONKEY
Uh, no, not really, no.

SHREK
For your information, there's a lot 
more to ogres than people think.

DONKEY
Example?

SHREK
Example? Okay, um, ogres are like onions. 
(he holds out his onion)

DONKEY
(sniffs the onion) They stink?

SHREK
Yes - - No!

DONKEY
They make you cry?

SHREK
No!

DONKEY
You leave them in the sun, they get 
all brown, start sproutin' little white 
hairs.

SHREK
No! Layers! Onions have layers. Ogres 
have layers! Onions have layers. You 
get it? We both have layers. (he heaves 
a sigh and then walks off)

DONKEY
(trailing after Shrek) Oh, you both 
have layers. Oh. {Sniffs} You know, 
not everybody likes onions. Cake! Everybody 
loves cakes! Cakes have layers.

SHREK
I don't care... what everyone likes. 
Ogres are not like cakes.

DONKEY
You know what else everybody likes? 
Parfaits. Have you ever met a person, 
you say, "Let's get some parfait," they 
say, "Hell no, I don't like no parfait"? 
Parfaits are delicious.

SHREK
No! You dense, irritating, miniature 
beast of burden! Ogres are like onions! 
And of story. Bye-bye. See ya later.


DONKEY
Parfaits may be the most delicious thing 
on the whole damn planet.

SHREK
You know, I think I preferred your humming.


DONKEY
Do you have a tissue or something? I'm 
making a mess. Just the word parfait 
make me start slobbering.

They head off. There is a montage of their journey. Walking through 
a field at sunset. Sleeping beneath a bright moon. Shrek trying 
to put the campfire out the next day and having a bit of a problem, 
so Donkey pees on the fire to put it out.

DRAGON'S KEEP

Shrek and Donkey are walking up to the keep that's supposed to 
house Princess Fiona. It appears to look like a giant volcano.


DONKEY
(sniffs) Ohh! Shrek! Did you do that? 
You gotta warn somebody before you just 
crack one off. My mouth was open and 
everything.

SHREK
Believe me, Donkey, if it was me, you'd 
be dead. (sniffs) It's brimstone. We 
must be getting close.

DONKEY
Yeah, right, brimstone. Don't be talking 
about it's the brimstone. I know what 
I smell. It wasn't no brimstone. It 
didn't come off no stone neither.


They climb up the side of the volcano/keep and look down. There 
is a small piece of rock right in the center and that is where 
the castle is. It is surrounded by boiling lava. It looks very 
foreboding.

SHREK
Sure, it's big enough, but look at the 
location. (laughs...then the laugh turns 
into a groan)

DONKEY
Uh, Shrek? Uh, remember when you said 
ogres have layers?

SHREK
Oh, aye.

DONKEY
Well, I have a bit of a confession to 
make. Donkeys don't have layers. We 
wear our fear right out there on our 
sleeves.

SHREK
Wait a second. Donkeys don't have sleeves.


DONKEY
You know what I mean.

SHREK
You can't tell me you're afraid of heights.


DONKEY
No, I'm just a little uncomfortable 
about being on a rickety bridge over 
a boiling like of lava!

SHREK
Come on, Donkey. I'm right here beside 
ya, okay? For emotional support., we'll 
just tackle this thing together one 
little baby step at a time.

DONKEY
Really?

SHREK
Really, really.

DONKEY
Okay, that makes me feel so much better.


SHREK
Just keep moving. And don't look down.


DONKEY
Okay, don't look down. Don't look down. 
Don't look down. Keep on moving. Don't 
look down. (he steps through a rotting 
board and ends up looking straight down 
into the lava) Shrek! I'm lookin' down! 
Oh, God, I can't do this! Just let me 
off, please!

SHREK
But you're already halfway.

DONKEY
But I know that half is safe!

SHREK
Okay, fine. I don't have time for this. 
You go back.

DONKEY
Shrek, no! Wait!

SHREK
Just, Donkey - - Let's have a dance 
then, shall me? (bounces and sways the 
bridge)

DONKEY
Don't do that!

SHREK
Oh, I'm sorry. Do what? Oh, this? (bounces 
the bridge again)

DONKEY
Yes, that!

SHREK
Yes? Yes, do it. Okay. (continues to 
bounce and sway as he backs Donkey across 
the bridge)

DONKEY
No, Shrek! No! Stop it!

SHREK
You said do it! I'm doin' it.

DONKEY
I'm gonna die. I'm gonna die. Shrek, 
I'm gonna die. (steps onto solid ground) 
Oh!

SHREK
That'll do, Donkey. That'll do. (walks 
towards the castle)

DONKEY
Cool. So where is this fire-breathing 
pain-in-the-neck anyway?

SHREK
Inside, waiting for us to rescue her. 
(chuckles)

DONKEY
I was talkin' about the dragon, Shrek.


INSIDE THE CASTLE

DONKEY
You afraid?

SHREK
No.

DONKEY
But...

SHREK
Shh.

DONKEY
Oh, good. Me neither. (sees a skeleton 
and gasps) 'Cause there's nothin' wrong 
with bein' afraid. Fear's a sensible 
response to an unfamiliar situation. 
Unfamiliar dangerous situation, I might 
add. With a dragon that breathes fire 
and eats knights and breathes fire, 
it sure doesn't mean you're a coward 
if you're a little scared. I sure as 
heck ain't no coward. I know that.


SHREK
Donkey, two things, okay? Shut ... up. 
Now go over there and see if you can 
find any stairs.

DONKEY
Stairs? I thought we was lookin' for 
the princess.

SHREK
(putting on a helmet) The princess will 
be up the stairs in the highest room 
in the tallest tower.

DONKEY
What makes you think she'll be there?


SHREK
I read it in a book once. (walks off)


DONKEY
Cool. You handle the dragon. I'll handle 
the stairs. I'll find those stairs. 
I'll whip their butt too. Those stairs 
won't know which way they're goin'. 
(walks off)

EMPTY ROOM

Donkey is still talking to himself as he looks around the room.


DONKEY
I'm gonna take drastic steps. Kick it 
to the curb. Don't mess with me. I'm 
the stair master. I've mastered the 
stairs. I wish I had a step right here. 
I'd step all over it.

ELSEWHERE

Shrek spots a light in the tallest tower window.

SHREK
Well, at least we know where the princess 
is, but where's the...

DONKEY
(os) Dragon!

Donkey gasps and takes off running as the dragon roars again. 
Shrek manages to grab Donkey out of the way just as the dragon 
breathes fire.

SHREK
Donkey, look out! (he manages to get 
a hold of the dragons tail and holds 
on) Got ya!

The dragon gets irritated at this and flicks it's tail and Shrek 
goes flying through the air and crashes through the roof of the 
tallest tower. Fiona wakes up with a jerk and looks at him lying 
on the floor.

DONKEY
Oh! Aah! Aah!

Donkey get cornered as the Dragon knocks away all but a small 
part of the bridge he's on.

DONKEY
No. Oh, no, No! (the dragon roars) Oh, 
what large teeth you have. (the dragon 
growls) I mean white, sparkling teeth. 
I know you probably hear this all time 
from your food, but you must bleach, 
'cause that is one dazzling smile you 
got there. Do I detect a hint of minty 
freshness? And you know what else? You're 
- - You're a girl dragon! Oh, sure! 
I mean, of course you're a girl dragon. 
You're just reeking of feminine beauty. 
(the dragon begins fluttering her eyes 
at him) What's the matter with you? 
You got something in your eye? Ohh. 
Oh. Oh. Man, I'd really love to stay, 
but you know, I'm, uh...(the dragon 
blows a smoke ring in the shape of a 
heart right at him, and he coughs) I'm 
an asthmatic, and I don't know if it'd 
work out if you're gonna blow smoke 
rings. Shrek! (the dragon picks him 
up with her teeth and carries him off) 
No! Shrek! Shrek! Shrek!

FIONA'S ROOM

Shrek groans as he gets up off the floor. His back is to Fiona 
so she straightens her dress and lays back down on the bed. She 
then quickly reaches over and gets the bouquet of flowers off 
the side table. She then lays back down and appears to be asleep. 
Shrek turns and goes over to her. He looks down at Fiona for 
a moment and she puckers her lips. Shrek takes her by the shoulders 
and shakes her away.

FIONA
Oh! Oh!

SHREK
Wake up!

FIONA
What?

SHREK
Are you Princess Fiona?

FIONA
I am, awaiting a knight so bold as to 
rescue me.

SHREK
Oh, that's nice. Now let's go!

FIONA
But wait, Sir Knight. This be-ith our 
first meeting. Should it not be a wonderful, 
romantic moment?

SHREK
Yeah, sorry, lady. There's no time.


FIONA
Hey, wait. What are you doing? You should 
sweep me off my feet out yonder window 
and down a rope onto your valiant steed.


SHREK
You've had a lot of time to plan this, 
haven't you?

FIONA
(smiles) Mm-hmm.

Shrek breaks the lock on her door and pulls her out and down 
the hallway.

FIONA
But we have to savor this moment! You 
could recite an epic poem for me. A 
ballad? A sonnet! A limerick? Or something!


SHREK
I don't think so.

FIONA
Can I at least know the name of my champion?


SHREK
Uh, Shrek.

FIONA
Sir Shrek. (clears throat and holds 
out a handkerchief) I pray that you 
take this favor as a token of my gratitude.


SHREK
Thanks!

Suddenly they hear the dragon roar.

FIONA
(surprised)You didn't slay the dragon?


SHREK
It's on my to-do list. Now come on! 
(takes off running and drags Fiona behind 
him.)

FIONA
But this isn't right! You were meant 
to charge in, sword drawn, banner flying. 
That's what all the other knights did.


SHREK
Yeah, right before they burst into flame.


FIONA
That's not the point. (Shrek suddenly 
stops and she runs into him.) Oh! (Shrek 
ignores her and heads for a wooden door 
off to the side.) Wait. Where are you 
going? The exit's over there.

SHREK
Well, I have to save my ass.

FIONA
What kind of knight are you?

SHREK
One of a kind. (opens the door into 
the throne room)

DONKEY
(os) Slow down. Slow down, baby, please. 
I believe it's healthy to get to know 
someone over a long period of time. 
Just call me old-fashioned. (laughs 
worriedly) (we see him up close and 
from a distance as Shrek sneaks into 
the room) I don't want to rush into 
a physical relationship. I'm not emotionally 
ready for a commitment of, uh, this 
- - Magnitude really is the word I'm 
looking for. Magnitude- - Hey, that 
is unwanted physical contact. Hey, what 
are you doing? Okay, okay. Let's just 
back up a little and take this one step 
at a time. We really should get to know 
each other first as friends or pen pals. 
I'm on the road a lot, but I just love 
receiving cards - - I'd really love 
to stay, but - - Don't do that! That's 
my tail! That's my personal tail. You're 
gonna tear it off. I don't give permission 
- - What are you gonna do with that? 
Hey, now. No way. No! No! No, no! No. 
No, no, no. No! Oh!

Shrek grabs a chain that's connected to the chandelier and swings 
toward the dragon. He misses and he swings back again. He looks 
up and spots that the chandelier is right above the dragons head. 
He pulls on the chain and it releases and he falls down and bumps 
Donkey out of the way right as the dragon is about to kiss him. 
Instead the dragon kisses Shreks' butt. She opens her eyes and 
roars. Shrek lets go of the chain and the chandelier falls onto 
her head, but it's too big and it goes over her head and forms 
a sort of collar for her. She roars again and Shrek and Donkey 
take off running. Very 'Matrix' style. Shrek grabs Donkey and 
then grabs Princess Fiona as he runs past her.

DONKEY
Hi, Princess!

FIONA
It talks!

SHREK
Yeah, it's getting him to shut up that's 
the trick.

They all start screaming as the dragon gains on them. Shrek spots 
a descending slide and jumps on. But unfortunately there is a 
crack in the stone and it hits Shrek right in the groin. His 
eyes cross and as he reaches the bottom of the slide he stumbles 
off and walks lightly.

SHREK
Oh!

Shrek gets them close to the exit and sets down Donkey and Fiona.


SHREK
Okay, you two, heard for the exit! I'll 
take care of the dragon.

Shrek grabs a sword and heads back toward the interior of the 
castle. He throws the sword down in between several overlapping 
chain links. The chain links are attached to the chandelier that 
is still around the dragons neck.

SHREK
(echoing) Run!

They all take off running for the exit with the dragon in hot 
pursuit. They make it to the bridge and head across. The dragons 
breathes fire and the bridge begins to burn. They all hang on 
for dear life as the ropes holding the bridge up collapse. They 
are swung to the other side. As they hang upside down they look 
in horror as the dragon makes to fly over the boiling lava to 
get them. But suddenly the chandelier with the chain jerk the 
dragon back and she's unable to get to them. Our gang climbs 
quickly to safety as the dragon looks angry and then gives a 
sad whimper as she watches Donkey walk away.

FIONA
(sliding down the 'volcano' hill) You 
did it! You rescued me! You're amazing. 
(behind her Donkey falls down the hill) 
You're - - You're wonderful. You're... 
(turns and sees Shrek fall down the 
hill and bump into Donkey) a little 
unorthodox I'll admit. But thy deed 
is great, and thy heart is pure. I am 
eternally in your debt. (Donkey clears 
his throat.) And where would a brave 
knight be without his noble steed?


DONKEY
I hope you heard that. She called me 
a noble steed. She think I'm a steed.


FIONA
The battle is won. You may remove your 
helmet, good Sir Knight.

SHREK
Uh, no.

FIONA
Why not?

SHREK
I have helmet hair.

FIONA
Please. I would'st look upon the face 
of my rescuer.

SHREK
No, no, you wouldn't - - 'st.

FIONA
But how will you kiss me?

SHREK
What? (to Donkey) That wasn't in the 
job description.

DONKEY
Maybe it's a perk.

FIONA
No, it's destiny. Oh, you must know 
how it goes. A princess locked in a 
tower and beset by a dragon is rescued 
by a brave knight, and then they share 
true love's first kiss.

DONKEY
Hmm? With Shrek? You think- - Wait. 
Wait. You think that Shrek is you true 
love?

FIONA
Well, yes.

Both Donkey and Shrek burst out laughing.

DONKEY
You think Shrek is your true love!


FIONA
What is so funny?

SHREK
Let's just say I'm not your type, okay?Fiona: 
Of course, you are. You're my rescuer. 
Now - - Now remove your helmet.

SHREK
Look. I really don't think this is a 
good idea.

FIONA
Just take off the helmet.

SHREK
I'm not going to.

FIONA
Take it off.

SHREK
No!

FIONA
Now!

SHREK
Okay! Easy. As you command. Your Highness. 
(takes off his helmet)

FIONA
You- - You're a- - an ogre.

SHREK
Oh, you were expecting Prince Charming.


FIONA
Well, yes, actually. Oh, no. This is 
all wrong. You're not supposed to be 
an ogre.

SHREK
Princess, I was sent to rescue you by 
Lord Farquaad, okay? He is the one who 
wants to marry you.

FIONA
Then why didn't he come rescue me?


SHREK
Good question. You should ask him that 
when we get there.

FIONA
But I have to be rescued by my true 
love, not by some ogre and his- - his 
pet.

DONKEY
Well, so much for noble steed.

SHREK
You're not making my job any easier.


FIONA
I'm sorry, but your job is not my problem. 
You can tell Lord Farquaad that if he 
wants to rescue me properly, I'll be 
waiting for him right here.

SHREK
Hey! I'm no one's messenger boy, all 
right? (ominous) I'm a delivery boy. 
(he swiftly picks her up and swings 
her over his shoulder like she was a 
sack of potatoes)

FIONA
You wouldn't dare. Put me down!

SHREK
Ya comin', Donkey?

DONKEY
I'm right behind ya.

FIONA
Put me down, or you will suffer the 
consequences! This is not dignified! 
Put me down!

WOODS

A little time has passed and Fiona has calmed down. She just 
hangs there limply while Shrek carries her.

DONKEY
Okay, so here's another question. Say 
there's a woman that digs you, right, 
but you don't really like her that way. 
How do you let her down real easy so 
her feelings aren't hurt, but you don't 
get burned to a crisp and eaten?

FIONA
You just tell her she's not your true 
love. Everyone knows what happens when 
you find your...(Shrek drops her on 
the ground) Hey! The sooner we get to 
DuLoc the better.

DONKEY
You're gonna love it there, Princess. 
It's beautiful!

FIONA
And what of my groom-to-be? Lord Farquaad? 
What's he like?

SHREK
Let me put it this way, Princess. Men 
of Farquaad's stature are in short supply. 
(he and Donkey laugh)

Shrek then proceeds to splash water onto his face to wash off 
the dust and grime.

DONKEY
I don't know. There are those who think 
little of him. (they laugh again) Fiona: 
Stop it. Stop it, both of you. You're 
just jealous you can never measure up 
to a great ruler like Lord Farquaad.


SHREK
Yeah, well, maybe you're right, Princess. 
But I'll let you do the "measuring" 
when you see him tomorrow.

FIONA
(looks at the setting sun) Tomorrow? 
It'll take that long? Shouldn't we stop 
to make camp?

SHREK
No, that'll take longer. We can keep 
going.

FIONA
But there's robbers in the woods.

DONKEY
Whoa! Time out, Shrek! Camp is starting 
to sound good.

SHREK
Hey, come on. I'm scarier than anything 
we're going to see in this forest.


FIONA
I need to find somewhere to camp now!


Both Donkey and Shrek's ears lower as they shrink away from her.


MOUNTAIN CLIFF

Shrek has found a cave that appears to be in good order. He shoves 
a stone boulder out of the way to reveal the cave.

SHREK
Hey! Over here.

DONKEY
Shrek, we can do better than that. I 
don't think this is fit for a princess.


FIONA
No, no, it's perfect. It just needs 
a few homey touches.

SHREK
Homey touches? Like what? (he hears 
a tearing noise and looks over at Fiona 
who has torn the bark off of a tree.)


FIONA
A door? Well, gentlemen, I bid thee 
good night. (goes into the cave and 
puts the bark door up behind her)


DONKEY
You want me to read you a bedtime story? 
I will.

FIONA
(os) I said good night!

Shrek looks at Donkey for a second and then goes to move the 
boulder back in front of the entrance to the cave with Fiona 
still inside.

DONKEY
Shrek, What are you doing?

SHREK
(laughs) I just- - You know - - Oh, 
come on. I was just kidding.

LATER THAT NIGHT

Shrek and Donkey are sitting around a campfire. They are staring 
up into the sky as Shrek points out certain star constellations 
to Donkey.

SHREK
And, uh, that one, that's Throwback, 
the only ogre to ever spit over three 
wheat fields.

DONKEY
Right. Yeah. Hey, can you tell my future 
from these stars?

SHREK
The stars don't tell the future, Donkey. 
They tell stories. Look, there's Bloodnut, 
the Flatulent. You can guess what he's 
famous for.

DONKEY
I know you're making this up.

SHREK
No, look. There he is, and there's the 
group of hunters running away from his 
stench.

DONKEY
That ain't nothin' but a bunch of little 
dots.

SHREK
You know, Donkey, sometimes things are 
more than they appear. Hmm? Forget it.


DONKEY
(heaves a big sigh) Hey, Shrek, what 
we gonna do when we get our swamp anyway?


SHREK
Our swamp?

DONKEY
You know, when we're through rescuing 
the princess.

SHREK
We? Donkey, there's no "we". There's 
no "our". There's just me and my swamp. 
The first thing I'm gonna do is build 
a ten-foot wall around my land.

DONKEY
You cut me deep, Shrek. You cut me real 
deep just now. You know what I think? 
I think this whole wall thing is just 
a way to keep somebody out.

SHREK
No, do ya think?

DONKEY
Are you hidin' something?

SHREK
Never mind, Donkey.

DONKEY
Oh, this is another one of those onion 
things, isn't it?

SHREK
No, this is one of those drop-it and 
leave-it alone things.

DONKEY
Why don't you want to talk about it?


SHREK
Why do you want to talk about it?

DONKEY
Why are you blocking?

SHREK
I'm not blocking.

DONKEY
Oh, yes, you are.

SHREK
Donkey, I'm warning you.

DONKEY
Who you trying to keep out?

SHREK
Everyone! Okay?

DONKEY
(pause) Oh, now we're gettin' somewhere. 
(grins)

At this point Fiona pulls the 'door' away from the entrance to 
the cave and peaks out. Neither of the guys see her.

SHREK
Oh! For the love of Pete! (gets up and 
walks over to the edge of the cliff 
and sits down)

DONKEY
What's your problem? What you got against 
the whole world anyway?

SHREK
Look, I'm not the one with the problem, 
okay? It's the world that seems to have 
a problem with me. People take one look 
at me and go. "Aah! Help! Run! A big, 
stupid, ugly ogre!" They judge me before 
they even know me. That's why I'm better 
off alone.

DONKEY
You know what? When we met, I didn't 
think you was just a big, stupid, ugly 
ogre.

SHREK
Yeah, I know.

DONKEY
So, uh, are there any donkeys up there?


SHREK
Well, there's, um, Gabby, the Small 
and Annoying.

DONKEY
Okay, okay, I see it now. The big shiny 
one, right there. That one there?


Fiona puts the door back.

SHREK
That's the moon.

DONKEY
Oh, okay.

DuLoc - Farquaad's Bedroom

The camera pans over a lot of wedding stuff. Soft music plays 
in the background. Farquaad is in bed, watching as the Magic 
Mirror shows him Princess Fiona.

FARQUAAD
Again, show me again. Mirror, mirror, 
show her to me. Show me the princess.


MIRROR
Hmph.

The Mirror rewinds and begins to play again from the beginning.


FARQUAAD
Ah. Perfect.

Farquaad looks down at his bare chest and pulls the sheet up 
to cover himself as though Fiona could see him as he gazes sheepishly 
at her image in the mirror.

MORNING

Fiona walks out of the cave. She glances at Shrek and Donkey 
who are still sleeping. She wanders off into the woods and comes 
across a blue bird. She begins to sing. The bird sings along 
with her. She hits higher and higher notes and the bird struggles 
to keep up with her. Suddenly the pressure of the note is too 
big and the bird explodes. Fiona looks a little sheepish, but 
she eyes the eggs that the bird left behind. Time lapse, Fiona 
is now cooking the eggs for breakfast. Shrek and Donkey are still 
sleeping. Shrek wakes up and looks at Fiona. Donkey's talking 
in his sleep.

DONKEY
(quietly) Mmm, yeah, you know I like 
it like that. Come on, baby. I said 
I like it.

SHREK
Donkey, wake up. (shakes him)

DONKEY
Huh? What?

SHREK
Wake up.

DONKEY
What? (stretches and yawns)

FIONA
Good morning. Hm, how do you like your 
eggs?

DONKEY
Oh, good morning, Princess!

Fiona gets up and sets the eggs down in front of them.

SHREK
What's all this about?

FIONA
You know, we kind of got off to a bad 
start yesterday. I wanted to make it 
up to you. I mean, after all, you did 
rescue me.

SHREK
Uh, thanks.

Donkey sniffs the eggs and licks his lips.

FIONA
Well, eat up. We've got a big day ahead 
of us. (walks off)

LATER

They are once again on their way. They are walking through the 
forest. Shrek belches.

DONKEY
Shrek!

SHREK
What? It's a compliment. Better out 
than in, I always say. (laughs)

DONKEY
Well, it's no way to behave in front 
of a princess.

Fiona belches

FIONA
Thanks.

DONKEY
She's as nasty as you are.

SHREK
(chuckles) You know, you're not exactly 
what I expected.

FIONA
Well, maybe you shouldn't judge people 
before you get to know them.

She smiles and then continues walking, singing softly. Suddenly 
from out of nowhere, a man swings down and swoops Fiona up into 
a tree.

ROBIN HOOD
La liberte! Hey!

SHREK
Princess!

FIONA
(to Robin Hood) What are you doing?


ROBIN HOOD
Be still, mon cherie, for I am you savior! 
And I am rescuing you from this green...(kisses 
up her arm while Fiona pulls back in 
disgust)...beast.

SHREK
Hey! That's my princess! Go find you 
own!

ROBIN HOOD
Please, monster! Can't you see I'm a 
little busy here?

FIONA
(getting fed up) Look, pal, I don't 
know who you think you are!

ROBIN HOOD
Oh! Of course! Oh, how rude. Please 
let me introduce myself. Oh, Merry Men. 
(laughs)

Suddenly an accordion begins to play and the Merry men pop out 
from the bushes. They begin to sing Robin's theme song.

MERRY MEN
Ta, dah, dah, dah, whoo.

ROBIN HOOD
I steal from the rich and give to the 
needy.

MERRY MEN
He takes a wee percentage,

ROBIN HOOD
But I'm not greedy. I rescue pretty 
damsels, man, I'm good.

MERRY MEN
What a guy, Monsieur Hood.

ROBIN HOOD
Break it down. I like an honest fight 
and a saucy little maid...

MERRY MEN
What he's basically saying is he likes 
to get...

ROBIN HOOD
Paid. So...When an ogre in the bush 
grabs a lady by the tush. That's bad.


MERRY MEN
That's bad.

ROBIN HOOD
When a beauty's with a beast it makes 
me awfully mad.

MERRY MEN
He's mad, he's really, really mad.


ROBIN HOOD
I'll take my blade and ram it through 
your heart, keep your eyes on me, boys 
'cause I'm about to start...

There is a grunt as Fiona swings down from the tree limb and 
knocks Robin Hood unconscious.

FIONA
Man, that was annoying!

Shrek looks at her in admiration.

MERRY MAN
Oh, you little- - (shoots an arrow at 
Fiona but she ducks out of the way)


The arrow flies toward Donkey who jumps into Shrek's arms to 
get out of the way. The arrow proceeds to just bounce off a tree.


Another fight sequence begins and Fiona gives a karate yell and 
then proceeds to beat the crap out of the Merry Men. There is 
a very interesting 'Matrix' moment here when Fiona pauses in 
mid-air to fix her hair. Finally all of the Merry Men are down, 
and Fiona begins walking away.

FIONA
Uh, shall we?

SHREK
Hold the phone. (drops Donkey and begins 
walking after Fiona) Oh! Whoa, whoa, 
whoa. Hold on now. Where did that come 
from?

FIONA
What?

SHREK
That! Back there. That was amazing! 
Where did you learn that?

FIONA
Well...(laughs) when one lives alone, 
uh, one has to learn these things in 
case there's a...(gasps and points) 
there's an arrow in your butt!

SHREK
What? (turns and looks) Oh, would you 
look at that? (he goes to pull it out 
but flinches because it's tender)


FIONA
Oh, no. This is all my fault. I'm so 
sorry.

DONKEY
(walking up) Why? What's wrong?

FIONA
Shrek's hurt.

DONKEY
Shrek's hurt. Shrek's hurt? Oh, no, 
Shrek's gonna die.

SHREK
Donkey, I'm okay.

DONKEY
You can't do this to me, Shrek. I'm 
too young for you to die. Keep you legs 
elevated. Turn your head and cough. 
Does anyone know the Heimlich?

FIONA
Donkey! Calm down. If you want to help 
Shrek, run into the woods and find me 
a blue flower with red thorns.

DONKEY
Blue flower, red thorns. Okay, I'm on 
it. Blue flower, red thorns. Don't die 
Shrek. If you see a long tunnel, stay 
away from the light!

SHREK & FIONA
Donkey!

DONKEY
Oh, yeah. Right. Blue flower, red thorns. 
(runs off)

SHREK
What are the flowers for?

FIONA
(like it's obvious) For getting rid 
of Donkey.

SHREK
Ah.

FIONA
Now you hold still, and I'll yank this 
thing out. (gives the arrow a little 
pull)

SHREK
(jumps away) Ow! Hey! Easy with the 
yankin'.

As they continue to talk Fiona keeps going after the arrow and 
Shrek keeps dodging her hands.

FIONA
I'm sorry, but it has to come out.


SHREK
No, it's tender.

FIONA
Now, hold on.

SHREK
What you're doing is the opposite of 
help.

FIONA
Don't move.

SHREK
Look, time out.

FIONA
Would you...(grunts as Shrek puts his 
hand over her face to stop her from 
getting at the arrow) Okay. What do 
you propose we do?

ELSEWHERE

Donkey is still looking for the special flower.

DONKEY
Blue flower, red thorns. Blue flower, 
red thorns. Blue flower, red thorns. 
This would be so much easier if I wasn't 
color-blind! Blue flower, red thorns.


SHREK
(os) Ow!

DONKEY
Hold on, Shrek! I'm comin'! (rips a 
flower off a nearby bush that just happens 
to be a blue flower with red thorns)


THE FOREST PATH

SHREK
Ow! Not good.

FIONA
Okay. Okay. I can nearly see the head. 
(Shrek grunts as she pulls) It's just 
about...

SHREK
Ow! Ohh! (he jerks and manages to fall 
over with Fiona on top of him)

DONKEY
Ahem.

SHREK
(throwing Fiona off of him) Nothing 
happend. We were just, uh - -

DONKEY
Look, if you wanted to be alone, all 
you had to do was ask. Okay?

SHREK
Oh, come on! That's the last thing on 
my mind. The princess here was just- 
- (Fiona pulls the arrow out) Ugh! (he 
turns to look at Fiona who holds up 
the arrow with a smile) Ow!

DONKEY
Hey, what's that? (nervous chuckle) 
That's...is that blood?

Donkey faints. Shrek walks over and picks him up as they continue 
on their way.

There is a montage of scenes as the group heads back to DuLoc. 
Shrek crawling up to the top of a tree to make it fall over a 
small brook so that Fiona won't get wet. Shrek then gets up as 
Donkey is just about to cross the tree and the tree swings back 
into it's upright position and Donkey flies off. Shrek swatting 
and a bunch of flies and mosquitoes. Fiona grabs a nearby spiderweb 
that's on a tree branch and runs through the field swinging it 
around to catch the bugs. She then hands it to Shrek who begins 
eating like it's a treat. As he walks off she licks her fingers. 
Shrek catching a toad and blowing it up like a balloon and presenting 
it to Fiona. Fiona catching a snake, blowing it up, fashioning 
it into a balloon animal and presenting it to Shrek. The group 
arriving at a windmill that is near DuLoc.

WINDMILL

SHREK
There it is, Princess. Your future awaits 
you.

FIONA
That's DuLoc?

DONKEY
Yeah, I know. You know, Shrek thinks 
Lord Farquaad's compensating for something, 
which I think means he has a really...(Shrek 
steps on his hoof) Ow!

SHREK
Um, I, uh- - I guess we better move 
on.

FIONA
Sure. But, Shrek? I'm - - I'm worried 
about Donkey.

SHREK
What?

FIONA
I mean, look at him. He doesn't look 
so good.

DONKEY
What are you talking about? I'm fine.


FIONA
(kneels to look him in the eyes) That's 
what they always say, and then next 
thing you know, you're on your back. 
(pause) Dead.

SHREK
You know, she's right. You look awful. 
Do you want to sit down?

FIONA
Uh, you know, I'll make you some tea.


DONKEY
I didn't want to say nothin', but I 
got this twinge in my neck, and when 
I turn my head like this, look, (turns 
his neck in a very sharp way until his 
head is completely sideways) Ow! See?


SHREK
Who's hungry? I'll find us some dinner.


FIONA
I'll get the firewood.

DONKEY
Hey, where you goin'? Oh, man, I can't 
feel my toes! (looks down and yelps) 
I don't have any toes! I think I need 
a hug.

SUNSET

Shrek has built a fire and is cooking the rest of dinner while 
Fiona eats.

FIONA
Mmm. This is good. This is really good. 
What is this?

SHREK
Uh, weed rat. Rotisserie style.

FIONA
No kidding. Well, this is delicious.


SHREK
Well, they're also great in stews. Now, 
I don't mean to brag, but I make a mean 
weed rat stew. (chuckles)

Fiona looks at DuLoc and sighs.

FIONA
I guess I'll be dining a little differently 
tomorrow night.

SHREK
Maybe you can come visit me in the swamp 
sometime. I'll cook all kind of stuff 
for you. Swamp toad soup, fish eye tartare 
- - you name it.

FIONA
(smiles) I'd like that.

They smiles at each other.

SHREK
Um, Princess?

FIONA
Yes, Shrek?

SHREK
I, um, I was wondering...are you...(sighs) 
Are you gonna eat that?

DONKEY
(chuckles) Man, isn't this romantic? 
Just look at that sunset.

FIONA
(jumps up) Sunset? Oh, no! I mean, it's 
late. I-It's very late.

SHREK
What?

DONKEY
Wait a minute. I see what's goin' on 
here. You're afraid of the dark, aren't 
you?

FIONA
Yes! Yes, that's it. I'm terrified. 
You know, I'd better go inside.

DONKEY
Don't feel bad, Princess. I used to 
be afraid of the dark, too, until - 
- Hey, no, wait. I'm still afraid of 
the dark.

Shrek sighs

FIONA
Good night.

SHREK
Good night.

Fiona goes inside the windmill and closes the door. Donkey looks 
at Shrek with a new eye.

DONKEY
Ohh! Now I really see what's goin' on 
here.

SHREK
Oh, what are you talkin' about?

DONKEY
I don't even wanna hear it. Look, I'm 
an animal, and I got instincts. And 
I know you two were diggin' on each 
other. I could feel it.

SHREK
You're crazy. I'm just bringing her 
back to Farquaad.

DONKEY
Oh, come on, Shrek. Wake up and smell 
the pheromones. Just go on in and tell 
her how you feel.

SHREK
I- - There's nothing to tell. Besides, 
even if I did tell her that, well, you 
know - - and I'm not sayin' I do 'cause 
I don't - - she's a princess, and I'm 
- -

DONKEY
An ogre?

SHREK
Yeah. An ogre.

DONKEY
Hey, where you goin'?

SHREK
To get... move firewood. (sighs)

Donkey looks over at the large pile of firewood there already 
is.

TIME LAPSE

Donkey opens the door to the Windmill and walks in. Fiona is 
nowhere to be seen.

DONKEY
Princess? Princess Fiona? Princess, 
where are you? Princess?

Fiona looks at Donkey from the shadows, but we can't see her.


DONKEY
It's very spooky in here. I ain't playing 
no games.

Suddenly Fiona falls from the railing. She gets up only she doesn't 
look like herself. She looks like an ogre and Donkey starts freaking 
out.

DONKEY
Aah!

FIONA
Oh, no!

DONKEY
No, help!

FIONA
Shh!

DONKEY
Shrek! Shrek! Shrek!

FIONA
No, it's okay. It's okay.

DONKEY
What did you do with the princess?


FIONA
Donkey, I'm the princess.

DONKEY
Aah!

FIONA
It's me, in this body.

DONKEY
Oh, my God! You ate the princess. (to 
her stomach) Can you hear me?

FIONA
Donkey!

DONKEY
(still aimed at her stomach) Listen, 
keep breathing! I'll get you out of 
there!

FIONA
No!

DONKEY
Shrek! Shrek! Shrek!

FIONA
Shh.

DONKEY
Shrek!

FIONA
This is me.

Donkey looks into her eyes as she pets his muzzle, and he quiets 
down.

DONKEY
Princess? What happened to you? You're, 
uh, uh, uh, different.

FIONA
I'm ugly, okay?

DONKEY
Well, yeah! Was it something you ate? 
'Cause I told Shrek those rats was a 
bad idea. You are what you eat, I said. 
Now - -

FIONA
No. I - - I've been this way as long 
as I can remember.

DONKEY
What do you mean? Look, I ain't never 
seen you like this before.

FIONA
It only happens when sun goes down. 
"By night one way, by day another. This 
shall be the norm... until you find 
true love's first kiss... and then take 
love's true form."

DONKEY
Ah, that's beautiful. I didn't know 
you wrote poetry.

FIONA
It's a spell. (sigh) When I was a little 
girl, a witch cast a spell on me. Every 
night I become this. This horrible, 
ugly beast! I was placed in a tower 
to await the day my true love would 
rescue me. That's why I have to marry 
Lord Farquaad tomorrow before the sun 
sets and he sees me like this. (begins 
to cry)

DONKEY
All right, all right. Calm down. Look, 
it's not that bad. You're not that ugly. 
Well, I ain't gonna lie. You are ugly. 
But you only look like this at night. 
Shrek's ugly 24-7.

FIONA
But Donkey, I'm a princess, and this 
is not how a princess is meant to look.


DONKEY
Princess, how 'bout if you don't marry 
Farquaad?

FIONA
I have to. Only my true love's kiss 
can break the spell.

DONKEY
But, you know, um, you're kind of an 
orge, and Shrek - - well, you got a 
lot in common.

FIONA
Shrek?

OUTSIDE

Shrek is walking towards the windmill with a sunflower in his 
hand.

SHREK
(to himself) Princess, I - - Uh, how's 
it going, first of all? Good? Um, good 
for me too. I'm okay. I saw this flower 
and thought of you because it's pretty 
and - - well, I don't really like it, 
but I thought you might like it 'cause 
you're pretty. But I like you anyway. 
I'd - - uh, uh...(sighs) I'm in trouble. 
Okay, here we go.

He walks up to the door and pauses outside when he hears Donkey 
and Fiona talking.

FIONA
(os) I can't just marry whoever I want. 
Take a good look at me, Donkey. I mean, 
really, who can ever love a beast so 
hideous and ugly? "Princess" and "ugly" 
don't go together. That's why I can't 
stay here with Shrek.

Shrek steps back in shock.

FIONA
(os) My only chance to live happily 
ever after is to marry my true love.


Shrek heaves a deep sigh. He throws the flower down and walks 
away.

INSIDE

FIONA
Don't you see, Donkey? That's just how 
it has to be. It's the only way to break 
the spell.

DONKEY
You at least gotta tell Shrek the truth.


FIONA
No! You can't breathe a word. No one 
must ever know.

DONKEY
What's the point of being able to talk 
if you gotta keep secrets?

FIONA
Promise you won't tell. Promise!

DONKEY
All right, all right. I won't tell him. 
But you should. (goes outside) I just 
know before this is over, I'm gonna 
need a whole lot of serious therapy. 
Look at my eye twitchin'.

Fiona comes out the door and watches him walk away. She looks 
down and spots the sunflower. She picks it up before going back 
inside the windmill.

MORNING

Donkey is asleep. Shrek is nowhere to be seen. Fiona is still 
awake. She is plucking petals from the sunflower.

FIONA
I tell him, I tell him not. I tell him, 
I tell him not. I tell him. (she quickly 
runs to the door and goes outside) Shrek! 
Shrek, there's something I want...(she 
looks and sees the rising sun, and as 
the sun crests the sky she turns back 
into a human.)

Just as she looks back at the sun she sees Shrek stomping towards 
her.

FIONA
Shrek. Are you all right?

SHREK
Perfect! Never been better.

FIONA
I - - I don't - - There's something 
I have to tell you.

SHREK
You don't have to tell me anything, 
Princess. I heard enough last night.


FIONA
You heard what I said?

SHREK
Every word.

FIONA
I thought you'd understand.

SHREK
Oh, I understand. Like you said, "Who 
could love a hideous, ugly beast?"


FIONA
But I thought that wouldn't matter to 
you.

SHREK
Yeah? Well, it does. (Fiona looks at 
him in shock. He looks past her and 
spots a group approaching.) Ah, right 
on time. Princess, I've brought you 
a little something.

Farquaad has arrived with a group of his men. He looks very regal 
sitting up on his horse. You would never guess that he's only 
like 3 feet tall. Donkey wakes up with a yawn as the soldiers 
march by.

DONKEY
What'd I miss? What'd I miss? (spots 
the soldiers) (muffled) Who said that? 
Couldn't have been the donkey.

FARQUAAD
Princess Fiona.

SHREK
As promised. Now hand it over.

FARQUAAD
Very well, ogre. (holds out a piece 
of paper) The deed to your swamp, cleared 
out, as agreed. Take it and go before 
I change my mind. (Shrek takes the paper) 
Forgive me, Princess, for startling 
you, but you startled me, for I have 
never seen such a radiant beauty before. 
I'm Lord Farquaad.

FIONA
Lord Farquaad? Oh, no, no. (Farquaad 
snaps his fingers) Forgive me, my lord, 
for I was just saying a short... (Watches 
as Farquaad is lifted off his horse 
and set down in front of her. He comes 
to her waist.) farewell.

FARQUAAD
Oh, that is so sweet. You don't have 
to waste good manners on the ogre. It's 
not like it has feelings.

FIONA
No, you're right. It doesn't.

Donkey watches this exchange with a curious look on his face.


FARQUAAD
Princess Fiona, beautiful, fair, flawless 
Fiona. I ask your hand in marriage. 
Will you be the perfect bride for the 
perfect groom?

FIONA
Lord Farquaad, I accept. Nothing would 
make - -

FARQUAAD
(interrupting) Excellent! I'll start 
the plans, for tomorrow we wed!

FIONA
No! I mean, uh, why wait? Let's get 
married today before the sun sets.


FARQUAAD
Oh, anxious, are you? You're right. 
The sooner, the better. There's so much 
to do! There's the caterer, the cake, 
the band, the guest list. Captain, round 
up some guests! (a guard puts Fiona 
on the back of his horse)

FIONA
Fare-thee-well, ogre.

Farquaad's whole party begins to head back to DuLoc. Donkey watches 
them go.

DONKEY
Shrek, what are you doing? You're letting 
her get away.

SHREK
Yeah? So what?

DONKEY
Shrek, there's something about her you 
don't know. Look, I talked to her last 
night, She's - -

SHREK
I know you talked to her last night. 
You're great pals, aren't ya? Now, if 
you two are such good friends, why don't 
you follow her home?

DONKEY
Shrek, I - - I wanna go with you.

SHREK
I told you, didn't I? You're not coming 
home with me. I live alone! My swamp! 
Me! Nobody else! Understand? Nobody! 
Especially useless, pathetic, annoying, 
talking donkeys!

DONKEY
But I thought - -

SHREK
Yeah. You know what? You thought wrong! 
(stomps off)

DONKEY
Shrek.

Montage of different scenes. Shrek arriving back home. Fiona 
being fitted for the wedding dress. Donkey at a stream running 
into the dragon. Shrek cleaning up his house. Fiona eating dinner 
alone. Shrek eating dinner alone.

SHREK'S HOME

Shrek is eating dinner when he hears a sound outside. He goes 
outside to investigate.

SHREK
Donkey? (Donkey ignores him and continues 
with what he's doing.) What are you 
doing?

DONKEY
I would think, of all people, you would 
recognize a wall when you see one.


SHREK
Well, yeah. But the wall's supposed 
to go around my swamp, not through it.


DONKEY
It is around your half. See that's your 
half, and this is my half.

SHREK
Oh! Your half. Hmm.

DONKEY
Yes, my half. I helped rescue the princess. 
I did half the work. I get half the 
booty. Now hand me that big old rock, 
the one that looks like your head.


SHREK
Back off!

DONKEY
No, you back off.

SHREK
This is my swamp!

DONKEY
Our swamp.

SHREK
(grabs the tree branch Donkey is working 
with) Let go, Donkey!

DONKEY
You let go.

SHREK
Stubborn jackass!

DONKEY
Smelly ogre.

SHREK
Fine! (drops the tree branch and walks 
away)

DONKEY
Hey, hey, come back here. I'm not through 
with you yet.

SHREK
Well, I'm through with you.

DONKEY
Uh-uh. You know, with you it's always, 
"Me, me, me!" Well, guess what! Now 
it's my turn! So you just shut up and 
pay attention! You are mean to me. You 
insult me and you don't appreciate anything 
that I do! You're always pushing me 
around or pushing me away.

SHREK
Oh, yeah? Well, if I treated you so 
bad, how come you came back?

DONKEY
Because that's what friends do! They 
forgive each other!

SHREK
Oh, yeah. You're right, Donkey. I forgive 
you... for stabbin' me in the back! 
(goes into the outhouse and slams the 
door)

DONKEY
Ohh! You're so wrapped up in layers, 
onion boy, you're afraid of your own 
feelings.

SHREK
(os) Go away!

DONKEY
There you are , doing it again just 
like you did to Fiona. All she ever 
do was like you, maybe even love you.


SHREK
(os) Love me? She said I was ugly, a 
hideous creature. I heard the two of 
you talking.

DONKEY
She wasn't talkin' about you. She was 
talkin' about, uh, somebody else.


SHREK
(opens the door and comes out) She wasn't 
talking about me? Well, then who was 
she talking about?

DONKEY
Uh-uh, no way. I ain't saying anything. 
You don't wanna listen to me. Right? 
Right?

SHREK
Donkey!

DONKEY
No!

SHREK
Okay, look. I'm sorry, all right? (sigh) 
I'm sorry. I guess I am just a big, 
stupid, ugly ogre. Can you forgive me?


DONKEY
Hey, that's what friends are for, right?


SHREK
Right. Friends?

DONKEY
Friends.

SHREK
So, um, what did Fiona say about me?


DONKEY
What are you asking me for? Why don't 
you just go ask her?

SHREK
The wedding! We'll never make it in 
time.

DONKEY
Ha-ha-ha! Never fear, for where, there's 
a will, there's a way and I have a way. 
(whistles)

Suddenly the dragon arrives overhead and flies low enough so 
they can climb on.

SHREK
Donkey?

DONKEY
I guess it's just my animal magnetism.


They both laugh.

SHREK
Aw, come here, you. (gives Donkey a 
noogie)

DONKEY
All right, all right. Don't get all 
slobbery. No one likes a kiss ass. All 
right, hop on and hold on tight. I haven't 
had a chance to install the seat belts 
yet.

They climb aboard the dragon and she takes off for DuLoc.

DULOC - CHURCH

Fiona and Farquaad are getting married. The whole town is there. 
The prompter card guy holds up a card that says 'Revered Silence'.


PRIEST
People of DuLoc, we gather here today 
to bear witness to the union....

FIONA
(eyeing the setting sun) Um-

PRIEST
...of our new king...

FIONA
Excuse me. Could we just skip ahead 
to the "I do's"?

FARQUAAD
(chuckles and then motions to the priest 
to indulge Fiona) Go on.

COURTYARD

Some guards are milling around. Suddenly the dragon lands with 
a boom. The guards all take off running.

DONKEY
(to Dragon) Go ahead, HAVE SOME FUN. 
If we need you, I'll whistle. How about 
that? (she nods and goes after the guards) 
Shrek, wait, wait! Wait a minute! You 
wanna do this right, don't you?

SHREK
(at the Church door) What are you talking 
about?

DONKEY
There's a line you gotta wait for. The 
preacher's gonna say, "Speak now or 
forever hold your peace." That's when 
you say, "I object!"

SHREK
I don't have time for this!

DONKEY
Hey, wait. What are you doing? Listen 
to me! Look, you love this woman, don't 
you?

SHREK
Yes.

DONKEY
You wanna hold her?

SHREK
Yes.

DONKEY
Please her?

SHREK
Yes!

DONKEY
(singing James Brown style) Then you 
got to, got to try a little tenderness. 
(normal) The chicks love that romantic 
crap!

SHREK
All right! Cut it out. When does this 
guy say the line?

DONKEY
We gotta check it out.

INSIDE CHURCH

As the priest talks we see Donkey's shadow through one of the 
windows Shrek tosses him up so he can see.

PRIEST
And so, by the power vested in me...


Outside

SHREK
What do you see?

DONKEY
The whole town's in there.

Inside

PRIEST
I now pronounce you husband and wife...


Outside

DONKEY
They're at the altar.

Inside

PRIEST
...king and queen.

Outside

DONKEY
Mother Fletcher! He already said it.


SHREK
Oh, for the love of Pete!

He runs inside without catching Donkey, who hits the ground hard.


INSIDE CHURCH

SHREK
(running toward the alter) I object!


FIONA
Shrek?

The whole congregation gasps as they see Shrek.

FARQUAAD
Oh, now what does he want?

SHREK
(to congregation as he reaches the front 
of the Church) Hi, everyone. Havin' 
a good time, are ya? I love DuLoc, first 
of all. Very clean.

FIONA
What are you doing here?

SHREK
Really, it's rude enough being alive 
when no one wants you, but showing up 
uninvited to a wedding...

SHREK
Fiona! I need to talk to you.

FIONA
Oh, now you wanna talk? It's a little 
late for that, so if you'll excuse me 
- -

SHREK
But you can't marry him.

FIONA
And why not?

SHREK
Because- - Because he's just marring 
you so he can be king.

FARQUAAD
Outrageous! Fiona, don't listen to him.


SHREK
He's not your true love.

FIONA
And what do you know about true love?


SHREK
Well, I - - Uh - - I mean - -

FARQUAAD
Oh, this is precious. The ogee has fallen 
in love with the princess! Oh, good 
Lord. (laughs)

The prompter card guy holds up a card that says 'Laugh'. The 
whole congregation laughs.

FARQUAAD
An ogre and a princess!

FIONA
Shrek, is this true?

FARQUAAD
Who cares? It's preposterous! Fiona, 
my love, we're but a kiss away from 
our "happily ever after." Now kiss me! 
(puckers his lips and leans toward her, 
but she pulls back.)

FIONA
(looking at the setting sun) "By night 
one way, by day another." (to Shrek) 
I wanted to show you before.

She backs up and as the sun sets she changes into her ogre self. 
She gives Shrek a sheepish smile.

SHREK
Well, uh, that explains a lot. (Fiona 
smiles)

FARQUAAD
Ugh! It's disgusting! Guards! Guards! 
I order you to get that out of my sight 
now! Get them! Get them both!

The guards run in and separate Fiona and Shrek. Shrek fights 
them.

SHREK
No, no!

FIONA
Shrek!

FARQUAAD
This hocus-pocus alters nothing. This 
marriage is binding, and that makes 
me king! See? See?

FIONA
No, let go of me! Shrek!

SHREK
No!

FARQUAAD
Don't just stand there, you morons.


SHREK
Get out of my way! Fiona! Arrgh!

FARQUAAD
I'll make you regret the day we met. 
I'll see you drawn and quartered! You'll 
beg for death to save you!

FIONA
No, Shrek!

FARQUAAD
(hold a dagger to Fiona's throat) And 
as for you, my wife...

SHREK
Fiona!

FARQUAAD
I'll have you locked back in that tower 
for the rest of your days! I'm king!


Shrek manages to get a hand free and he whistles.

FARQUAAD
I will have order! I will have perfection! 
I will have - - (Donkey and the dragon 
show up and the dragon leans down and 
eats Farquaad) Aaaah! Aah!

DONKEY
All right. Nobody move. I got a dragon 
here, and I'm not afraid to use it. 
(The dragon roars.) I'm a donkey on 
the edge!

The dragon belches and Farquaad's crown flies out of her mouth 
and falls to the ground.

DONKEY
Celebrity marriages. They never last, 
do they?

The congregation cheers.

DONKEY
Go ahead, Shrek.

SHREK
Uh, Fiona?

FIONA
Yes, Shrek?

SHREK
I - - I love you.

FIONA
Really?

SHREK
Really, really.

FIONA
(smiles) I love you too.

Shrek and Fiona kiss. Thelonius takes one of the cards and writes 
'Awwww' on the back and then shows it to the congregation.


CONGREGATION
Aawww!

Suddenly the magic of the spell pulls Fiona away. She's lifted 
up into the air and she hovers there while the magic works around 
her.

WHISPERS
"Until you find true love's first kiss 
and then take love's true form. Take 
love's true form. Take love's true form."


Suddenly Fiona's eyes open wide. She's consumed by the spell 
and then is slowly lowered to the ground.

SHREK
(going over to her) Fiona? Fiona. Are 
you all right?

FIONA
(standing up, she's still an ogre) Well, 
yes. But I don't understand. I'm supposed 
to be beautiful.

SHREK
But you ARE beautiful.

They smile at each other.

DONKEY
(chuckles) I was hoping this would be 
a happy ending.

Shrek and Fiona kiss...and the kiss fades into...

THE SWAMP

...their wedding kiss. Shrek and Fiona are now married. 'I'm 
a Believer' by Smashmouth is played in the background. Shrek 
and Fiona break apart and run through the crowd to their awaiting 
carriage. Which is made of a giant onion. Fiona tosses her bouquet 
which both Cinderella and Snow White try to catch. But they end 
up getting into a cat fight and so the dragon catches the bouquet 
instead. The Gingerbread man has been mended somewhat and now 
has one leg and walks with a candy cane cane. Shrek and Fiona 
walk off as the rest of the guests party and Donkey takes over 
singing the song.

GINGERBREAD MAN
God bless us, every one.

DONKEY
(as he's done singing and we fade to 
black) Oh, that's funny. Oh. Oh. I can't 
breathe. I can't breathe.

THE END


E agora, vamos para o Bares da Esperançaaaaa.. uhullllll


"BAR ESPERANÇA, O ÚLTIMO QUE FECHA" OU
NÃO SE PREOCUPE, NADA VAI DAR CERTO !
Roteiro cinematográfico de:
Armando Costa
Denise Bandeira
Euclides Marinho
Hugo Carvana
e
Martha Alencar
SEQÜÊNCIA 1 - ABERTURA - BAR ESPERANÇA - EXT. NOITE
Na calçada defronte ao Bar Esperança (O Último que Fecha) pessoas e
grupos de pessoas vão entrando nesse bar. Essas pessoas são
personagens de nossa história: Ivan Guerra, Nina Saraiva, Valfrido
Salvador, Galocha, Tuca Martins, Cabelinho e por último Zeca e Ana
Moreno.
Durante esta seqüência serão mostrados os letreiros iniciais. O último
letreiro dos créditos coincidirá com a entrada de Zeca e Ana Moreno no
bar.
SEQÜÊNCIA 2 - BAR ESPERANÇA - INTERIOR - NOITE
Esporro infernal. Cenário exótico onde vivem os personagens desse
louco-filme: músicos, cantores, compositores, pintores, artistas,
jornalistas, tipos bizarros espalhados por várias mesas - tudo isso
sob o comando da dona do bar, Dona Esperança, que do interior de um
balcão - por trás de uma máquina registradora - comanda todo aquele
universo. Zeca e Ana Moreno, que acabaram de entrar, cumprimentam
alegres as pessoas e se encaminham para uma mesa. Na passagem cruzam
com Prepúcio, o garçom, que vem vindo com uma bandeja cheia de chope
numa incrível demonstração de equilíbrio. Na passagem da bandeja por
sobre as cabeças dos freqüentadores, Zeca rouba dois copos de chope e
sai rindo com Ana Moreno. Prepúcio protesta aos berros:
PREPÚCIO Ei! Esse chope tem dono, porra!
De outra mesa alguém grita:
- Prepúcio! Meu chope!
Conseguindo outro milagre de equilíbrio, Prepúcio vira-se para os
fundos do bar e grita:
PREPÚCIO Calma que eu sou um só!
Numa outra mesa estão sentados Ivan Guerra e Valfrido Salvador. Zeca
senta-se com seu chope enquanto Ana Moreno, de pé, conversa com uma
amiga. Ela chama atenção. Pessoas olham e fazem comentários. Na mesa,
Valfrido Salvador e Ivan estão em meio a uma discussão.
VALFRIDO Tá vendo, Zeca? A bebida está fazendo ela ficar
cada vez mais idiota.
2
ZECA Não me mete nessa, não quero saber. Tou
acabando de chegar (cumprimenta alguém em outra
mesa) Oi!
IVAN (Visivelmente embriagado) Ah, eu que sou
idiota! Você é que está organizando uma
vernissage no mictório desta infecta taberna
pra mostrar esta merda que você chama de arte e
que só serve pra te promover e eu é que sou
idiota. Ah, é? Obrigado...
Valfrido se levanta da mesa, puto da vida, enquanto Ivan continua
resmungando bêbado na mesa. Zeca, desligado do que acontecia, fica
observando carinhosamente Ana que está em pé, conversando com amigas.
Ana, ao sentir o olhar de Zeca, olha pra ele com carinho. Zeca mandalhe um beijo e sussurra:
ZECA (Baixinho) Eu te amo...
Dentro do balcão do bar, microfone na mão, Valfrido anuncia a todos a
realização de sua próxima exposição.
VALFRIDO Olha aí, turma! No próximo dia vinte e seis
será realizada, no mictório do bar Esperança
uma grande festa-show do grande artista
plástico brasileiro Valfrido Salvador - eu
mesmo! O Salvador Daqui!
O bar inteiro reage assobiando e vaiando. Na porta do toalete feminino
de bar, um grupo de mulheres - entre elas Nina - protesta gritando
para Dona Esperança:
NINA Como é que é, Dona Esperança? Um bar deste
tamanho e um banheirinho pequenininho: Assim
não é possível! Olha o tamanho da fila!
Dona Esperança nem responde, perdida na confusão do bar. Galocha
aproveita e se aproxima das mulheres na fila no banheiro, dizendo:
GALOCHA Olha aí, neném! Chegou o Galocha trazendo a
felicidade e a solução para os problemas das
mulheres. Quer ver?
Enquanto vai tirando de uma das bolsas um envelope, continua falando:
3
GALOCHA Um dispositivo simples, em cartolina
esterilizada, facilmente descartável e
higiênico (consegue tirar do envelope um
cartucho de cartolina rosa e exibe vitorioso
para as moças). Eis aqui a salvação das
biriteiras da madrugada: o moderno condutor de
urina descartável!
As mulheres caem na gargalhada e examinam o estranho objeto. Nina
protesta:
NINA Ô babaca, o problema não é fazer xixi de pé ou
sentado. É espaço, sacou?
GALOCHA Aí é que a donzela se engana! Se você já pode
mijar em pé, porque não no banheiro dos homens,
hein? hein? (Empolgado, começa um discurso) Por
que não? Com a ajuda desse simples objeto as
mulheres vão conseguir igualdade de condições
com os homens no lugar onde eles menos esperam.
No mictório!
As mulheres se divertem com o discurso de Galocha: umas dizem que não
têm coragem, outras riem nervosas mas Nina topa e compra uma peça.
NINA Me dá isso aí. Eu tenho coragem!
Galocha recebe sua grana e sai pelo interior do bar apregoando suas
mercadorias. O bar fervilha. Aqui e ali casais namorando. Vai-e-vem no
corredor dos banheiros. Alguém canta de porre em alguma mesa um sambacanção qualquer e por isso muitos vaiam. Agito total. Dentro do
balcão, por trás de caixa registradora, D. Esperança, feliz, dá ordens
a garçons, comandando todo o espetáculo. Ana e Tuca Martins caminham
entre as mesas carregando cada um dois copos de chope enquanto
conversam:
ANA Espetáculo pra índio? Explica isso direito.
TUCA Eu ainda não sei. A Nina é que está
organizando. Tem alguma coisa com tribo de
índio que vai ser expulsa das suas terras.
(Muda de tom) Se der certo eu vou, Ana. Não dá
mais pra segurar - a barra tá muito pesada. Há
dois meses não pinta trabalho...
ANA (Interrompendo) Eu sei, Tuca. Tá pesada pra
todo mundo, mas não é se escondendo no mato que
4
você vai conseguir trabalho - e depois eu não
acredito muito nas idéias da Nina, sei lá...
A caminhada dos dois é interrompida por um pilantra, que com cara de
galã de Cascadura, pergunta a Ana:
GALÃ Como é que uma moça tão bonita como você pode
ser tão má naquela novela? Jura que não vai
entregar aquela carta!
ANA (Desvencilhando-se do chato e continuando a
conversar com Tuca) Não sei companheiro... Tô
por fora... Depois a gente conversa, tá? (Virase pra Tuca) E o filme que você falou que ia
pintar?
TUCA Pintou, mas é só um dia de filmagem... grana
curta ... Agora, o pior você não sabe...
ANA O que?
TUCA O filme é um pornô e eu vou ter que fazer uma
cena de sexo explícito! (Os dois caem na
gargalhada) O filme se chama "A Viúva do SadoMasoquista" e adivinha quem é a atriz?
ANA (Excitada) Quem?
TUCA Áurea Celeste! A primeira dama da pornografia...
Já que você virou uma estrela de TV e abandonou
os amigos (fala representando canhestramente) eu
me jogo nos braços da Áurea Celeste... (ri)
ANA (Também rindo) Vai à merda, Tuca!
TUCA (Saindo com os copos) Tchau, Ana... Te vejo
daqui a pouco.
ANA Tchau, Tuca!
No meio do bar, Passarinho protesta aos berros. Está, como sempre, de
porre.
PASSARINHO Absurdo! Eu não freqüento mais essa estalagem.
Acabei de encontrar uma mulher dentro do
mictório tentando mijar com um negócio meio
5
esquisito. Expulsei ela de lá... ah, expulsei
mesmo! (Grita mais alto) Vamos parar com essas
liberdades aí!
Zeca continua sentado na mesa de Ivan, visivelmente de porre. Junto
com ela está Cabelinho, também de porre. Ana acabou de sentar.
ZECA Ivan, uma vaga prum escritor idiota naquele teu
pasquim?
IVAN Não, o último idiota que eles contrataram fui
eu... (Ri) Porque? Foi demitido? Claro! (Fala
para os outros) Nem a televisão agüentou mais
as besteiras que ele escreve todo dia pra
entorpecer a cabecinha da classe média!
Ana percebendo que aquilo podia ser o começo de uma discussão,
interrompe para desanuviar o ambiente.
ANA Zeca, quer jantar?
ZECA Não. Não quero jantar... (Continua) Estava só
esperando ele acabar o discurso dele pra dizer
que não fui demitido não, entendeu? (Fala para
si mesmo) O que eu não agüento é ficar o dia
inteiro trancado numa sala e tomando cafezinho
feito louco e no fim nunca se resolve nada: é
sempre o mesmo blá-blá-blá. Muito cacique e
pouco índio, seu Cabelinho, esse é que é o
problema! Às vezes dá vontade de voltar a
escrever cartas de amor, tá sabendo?
CABELINHO Mas mesmo assim eu topo uma troca. Eu fico com
o teu trabalho e você fica com a minha mulher,
topa?
IVAN Êpa - é mau negócio pro Zeca, Cabelinho! A tua
mulher é chave-de-cadeia.
ANA E eu, como é que fico nessa troca, hein,
Cabelinho?
ZECA (Para Cabelinho) Obrigado, mas eu não topo...
Fazer negócio com a tua mulher é fazer negócio
com chapéu... ou leva na cabeça ou sai
embrulhado! (Todos riem) Além disso eu estou
6
satisfeito com a minha estrela de televisão
aqui ... (Zeca tenta abraçar Ana)
Ana, percebendo ironia e amargura nas palavras de Zeca, tenta cortar o
papo.
ANA Zeca, é melhor a gente ir embora. Eu gravo
amanhã cedo.
Prepúcio está passando e Zeca aproveita e chama o garçom.
ZECA Prepúcio, limpa essa mesa - lava esses copos e
traz outra rodada. (Ana não gosta)
PREPÚCIO Falou! (Vai tirando os copos) O que é que nós
vemos beber?
ZECA Nós não. Eu vou beber e você vai me servir!
PREPÚCIO Que é isso, Xará? Tá perdendo a elegância?
Cuida dos teus campos energéticos, rapaz!
Equilibra as tuas energias senão vais virar uma
molécula morta, meu irmão (Todos riem na mesa).
Qual vai ser? Chope pra todo mundo?
Todos concordam. Cabelinho fala:
CABELINHO Ô molécula! Aproveita e traz junto com o chope
umas pipocas embrulhadas num saquinho...
Prepúcio sai.
ANA Pra que essa pipoca embrulhada, Cabelinho?
CABELINHO É o seguinte. Todo dia eu chego tarde. Cotinha
já está dormindo. Eu tenho que entrar no maior
silêncio pra ela não acordar, senão já viu o
esporro, né? Mas sempre que eu estou chegando
em casa, o maldito do galo do vizinho começa a
cantar e acorda Cotinha. Agora não. Eu levo um
saco de pipoca e dou pro galo enquanto o
malandro tá lá comendo pipoca eu entro na maior
tranqüilidade, sacou?
A gargalhada geral ecoa no bar.
7
SEQÜÊNCIA 3 - INTERIOR - DIA - ANTE-SALA DO BABY
Sala gelada e acrílica típica da chefão da TV. É a sala de espera de
Baby, o homem que decide tudo na emissora. Zeca entra bem cabreiro. Na
sala estão a secretária, e três outros autores, colegas de Zeca: dois
homens e uma mulher. Zeca entra contrafeito, os 3 estão muito juntos
conversando em voz baixa e não tomam conhecimento de Zeca. Ela sorri
para a secretária que lhe devolve um sorriso gélido e volta a mexer em
seus papéis. Zeca senta-se na pontinha de uma poltrona afastada, todo
empinado, tentando parecer que está à vontade. De repente a mulher
(autora) vira-se e vê Zeca. Dá um grito de alegria, falso, e joga-se
nos braços de Zeca, beijando-o nas faces numa animação irritante pela
insinceridade tão clara. É evidente que ela odeia e sente-se ameaçada
por Zeca.
MULHER Zeca. meu amor! Você está maravilhoso! Li teu
texto! Chorei! Juro que chorei.
ZECA Mas é uma comédia, benzinho...
MULHER Eu sei. Mas o que me comoveu foi a tua garra. É
gozadíssimo mas é emocionante. Você é um grande
dramaturgo!
O outro autor chega-se a Zeca. Também é falso e super-repressante uma
amizade, calor e carinho inteiramente mentirosos. Abraça Zeca, beijalhe a face:
AUTOR 2 Grande texto, Zeca! Grande texto!
ZECA Puxa, muito obrigado! E aí? Estão esperando o
Homem há muito tempo?
AUTOR 3 Tô esperando há 40 minutos.
ZECA É... Pra mim o Homem resolve hoje. Se ele não
gostar do texto que eu entreguei, não sei
não...tôfu...
AUTOR 2 Olha, Zeca, vou te dizer. Se o Homem não quiser
renovar o meu contrato eu tô cagando, sabe? Não
preciso de televisão pra viver... Tô cagando...
MULHER Eu também. Sempre vivi de minhas peças de
teatro, meus livros. Tô cagando pra televisão.
8
ZECA Sei não... Com mulher e filhos eu não posso
cagar muito assim não...
Entra Tomás, assessor de Baby.
TODOS (Se levantam) Oi, como é que é? Tudo em cima,
meu amor? Você está maravilhoso! Que porra
ontem, hein? O Homem tá aí? (A mulher beija
Tomás nas faces com sua habitual alegria
mentirosa. Os autores, do mesmo modo hipócrita,
dão-lhe tapinhas machos e "íntimos" nas costas
tipo "coméquié, bicho", etc)
TOMÁS O Baby não pode receber vocês hoje.
Todos tentam reclamar, Tomás corta.
TOMÁS Tô sabendo, mas o Baby teve que tomar um avião
pra Brasília agora mesmo.
ZECA E o nosso programa, como é que fica?
TOMÁS Não fica. O Baby ainda acha teu texto muito
fraco e quer que você reescreva pra amanhã.
ZECA Amanhã? Assim não dá! Tudo em cima da hora!
MULHER Calma, Zeca, vai devagar...
ZECA Devagar porra nenhuma! Eu já escrevi esse texto
quatro vezes. Não sei mais o que baby quer!
(Zeca acende um cigarro)
TOMÁS Você vai fumar aqui?
ZECA Claro! O Baby não está! Quando o gato sai os
ratos caem na gandaia, né? Ratos!
AUTOR 2 Manera, Zeca, manera ...
ZECA Não dá para manerar. Eu só posso escrever esse
programa se o Baby sentar na minha frente e me
encomendar: "Eu quero isso, isso e aquilo".
Adivinhar não é a minha.
9
TOMÁS Vocês são pagos pra terem idéias a inventar.
ZECA Mal pagos. E vocês querem que a gente invente,
desenvolva, escreva de um dia pro outro. Daí a
gente trabalha 24 horas por dia pra vocês.
MULHER Esfria a cabeça, Zeca. Cuidado, eu te amo...
Mas na verdade o teu texto ainda não estava tão
bom, não ...
ZECA Pomba! Você acabou de dizer que adorou o texto!
AUTOR 2 É bom rever um pouco, melhorar ...
ZECA Você também acha, ó Judas?
TOMÁS Tem que reescrever, claro!
ZECA Se você me disser o que você quer, eu rescrevo.
Mas aqui ninguém sabe querer. Nem o Baby. Fica
você de garoto de recados! Não adianta eu falar
com um gravador, você é um gravador. O Baby
fala no teu ouvido (Faz gesto de falar no
ouvido dele) e você grava no teu
computadorzinho (gasto na cuca de Tomás) e
despeja o recadinho no meu ouvidinho de pinico.
TOMÁS Garoto de recados, é? Pois eu tenho um recado
pra você, Zeca. O Baby leu o teu texto e disse:
"Isso aqui é um cocô. E cuspiu no teu texto."
ZECA Cuspiu?!! Mentira tua, ó gravador ambulante!
TOMÁS Cuspiu! Assim! (Cospe no texto)
ZECA Cuspiu? Assim? (Cospe no texto) Devia ter
cuspido assim! (Cospe num aparelho de TV
ligado) Você é um cocô, meu texto é um cocô, eu
sou um cocô, aliás, como diz um amigo meu, na
cidade em que você nasceu todo mundo era um
cocô igual a você ou alguém escapou de ser
cocô?
TOMÁS Olha a criancice, Zeca! (Ameaçador)
10
ZECA Sou criança, sim! Mas você é pior, é um robô.
Tchau, robô, não trabalho mais aqui. (Rasga o
texto) Passar bem! (Sai. Todos perplexos,
fumando desesperadamente.)
SEQÜÊNCIA 4 - ESTÚDIO DE GRAVAÇÃO - INTERIOR - DIA
Abre em big close de Ana Moreno. Ela está muito maquiada.
ANA "Você é uma medíocre, sua mãe é uma medíocre,
essa família é um aglomerado de medíocres
dominados como fantoches. E o pior: todos
metidos a insubstituíveis."
A câmara se afasta lentamente e mostra Ana num estúdio contracenando
com outra atriz. Câmera da TV, microfones, equipe, tudo as revela.
ATRIZ "Mas Berenice, você não pode entregar aquela
carta! Vai revelar tudo. Nosso mundo vai ruir.
Vai ser um horror pra todo mundo, inclusive
para você."
ANA "Eu quero que tudo vire ruínas. A verdade é o
fogo que vai incendiar e purificar tudo. Eu vou
entregar a carta!"
DIRETOR (Entrando no set) Ótima. Ana, olha mais pra sua
direita que a câmera te pega melhor. Bom, então
vamos gravar!
Azáfama no estúdio. Preparativos técnicos para gravar. Ana vai a uma
mesa posta em cena cheia de iguarias. Vai pegar um croquetezinho.
DIRETOR Pôxa, Ana, tá cansada de saber que não pode
comer a comida da cena que esculhamba a
continuidade!
ANA Só um croquetezinho ninguém vai notar... A
gente nem teve tempo de almoçar hoje! Tô até
com dor de cabeça.
Entra Zeca pelo estúdio, enlouquecido.
ZECA Ana, eu vou me mandar, não sou mais um capacho!
Todo mundo aqui é capachildo, neurótico,
11
ulcerado! (Para o diretor) O câncer da
capachildice te come por dentro! Eu sou livre!
(Rasga os textos que tem na mão, joga tudo pra
cima - uma chuva de papéis - e sai correndo).
ANA Zeca! Zeca! Calma, vem cá!
Ela tenta correr atrás de Zeca, o diretor a impede.
DIRETOR Você tá pensando que vai aonde?
ANA Meu marido. Nunca vi ele assim. Teve uma crise.
DIRETOR Estamos todos em crise eterna. Não vai sair
não! (impede Ana que tenta sair).
ANA Mas o Zeca precisa de mim! Não está vendo? Ele
é teu amigo também. Precisa de ajuda agora!
DIRETOR Em casa você acalma ele. Agora volta pro
cenário que eu tenho que gravar essa cena. Isso
aqui é trabalho, tem hora marcada! Tem que ser
profissional, Ana!
Close de Ana igual ao início da seqüência.
ANA (Muito mais dramática, cheia de demônios) "Você
é um medíocre, seu irmão é um medíocre, essa
família é um aglomerado de medíocres dominados
como fantoches. E o pior - todos metidos a
insubstituíveis!"
SEQÜÊNCIA 5 - APTO DE ZECA - INTERIOR - DIA
Abre nas crianças (Yuri, menino, 11 anos e Babita, menina, 9 anos) que
brigam.
BABITA Você quebrou o meu disco da Rita Lee!
YURI Porque você rasgou minha coleção de ecologia
pra fazer aviãozinho!
Os dois se embolam, aos tapas. Entra Zeca derrotado. Fecha a porta,
nem olha para as crianças que agora quebram um vaso. Zeca vai a uma
gaveta, tira uma pistola de contra-regra, aponta para o ar e dispara -
12
BUM! - As crianças param. Pausas. Vêm o pai. Logo explodem na briga de
novo, correndo para Zeca e queixando-se a ele, aos gritos.
OS DOIS Ela rasgou meu livro! Ele quebrou minha Rita
Lee (etc). Zeca derrotado. O telefone toca,
Zeca procura o fio pelo chão. As crianças atrás
dele gritando sem parar. Zeca procura até achar
o telefone no meio da bagunça total.
ZECA Alô!
VOZ Escuta aqui, ó, a vaca da tua mulher vai ter
coragem de entregar aquela carta? Se no
capítulo de hoje ela mostrar a carta eu vou aí
e dou um tiro nas fuças dessa maluca, ouviu?!
ZECA Vaca vá pra ... (O cara desliga. Zeca possesso)
Desligou...
As crianças assistem TV e ficam hipnotizadas olhando-a. Aparece cena
no aparelho de TV. É Ana (Cena diferente da gravada na seqüência 4).
SEQÜÊNCIA 5-A - CENA DE TV
ATRIZ "Mas Berenice, como você conseguiu essa carta
tão nefasta?"
ANA "Tenho meus mistérios. Não revelo. O que
interessa é que a carta está aqui! (Mostra)"
ATRIZ "Pense bem, Berenice, se você mostrar essa
carta, papai se suicida porque Márcia, sua
irmã, ficará sabendo que é irmã de Rodolfo e
portanto não poderá mais casar com ele, a mamãe
terá uma crise de loucura final ao saber que
Rodolfo é filho de nosso pai com Ágata, que
está no hospital com câncer à morte, e papai se
suicidando nossa fortuna irá toda para Rodolfo,
filho primogênito que então se casará com
Celeste, que ele ama, e nós duas ficaremos na
miséria total. "
ANA (Gargalhada sardônica e ensandecida) "Ah! Ah!
Ah! Eu quero é ver o circo pegar fogo, seus
medíocres!"
13
YURI Pô, mamãe tá de megera nessa novela.
BABITA Tomara que ela entregue a carta pra balançar o
coreto desses caretões!
ZECA (No telefone) Diminui essa porcaria de
televisão Babita! Tô tentando falar aqui! (Ao
telefone) Alô! Pedro? Escuta, Pedro, eu preciso
de trabalho agora. Tô desempregado. Se você
quiser eu escrevo aquelas cartas pra você.
(Ouve) Tem dez? Mas eu topo! Tá legal. Eu passo
aí amanhã. Abraço! (Bate o telefone. O som da
novela sobe altíssimo).
SEQÜÊNCIA 6 - CALÇADA EM FRENTE, EDIFÍCIO ZECA/ANA - EXTERIOR - NOITE
O som da novela domina o mundo. Táxi pára. Ana salta carregando
cabides, roupas, scripts, bolsas enormes atulhadas de bagulhos. Ela
procura dinheiro, desesperada, nas bolsas.
CHOFER Não tá achando o dinheiro, dona Ana Moreno?
Aliás, pensando bem, não precisa pagar, não. Me
dá um autógrafo seu que minha filha é muito sua
fã, dona Ana Moreno.
ANA Espera, vou achar o dinheiro, cacêta!
CHOFER Aliás, pensando melhor, vou lhe cobrar sim,
porque a senhora, Dona Berenice, é uma peste de
gente e vai entregar aquela carta e esculhambar
a vida de todo mundo na novela e a minha mulher
vai ficar de mau humor e me encher meu saco.
Paga e não bufa, Dona Berenice!
ANA Não me enche, ô cretino!
Crianças chegam correndo, rodeiam Ana.
CRIANÇAS Olha a Ana Moreno! Olha a Ana Moreno! É a
Berenice! Berenice tu só faz tolice! Tasca a
Berenice! Tasca!
14
Ana pega suas coisas que vão caindo pelo caminho e corre para a
portaria seguida pela molta. Cruza com duas velhinhas que falam alto
para Ana ouvir.
VELHA 1 Puxa, é a Ana Moreno...
VELHA 2 É. Tô vendo. Mas ela é muito velha pessoalmente.
Pensei que fosse uma jovem. É uma velha sem
graça, desbotada... Vai desgraçada, entrega a
carta, peste!
Ana consegue entrar no edifício e no elevador, um senhor engravatado e
distintíssimo segura a porta do elevador. Ela agradece e entra.
15
SEQÜÊNCIA 7 - INTERIOR DO ELEVADOR - NOITE
Ana cansada, irritada, esbagaçada e o Senhor Formal no elevador.
Silencia. Constrangimento. Eles evitam se olhar. (Explorar cena mímica
de um casal desconhecido em elevador, constrangidos, coisa muito
comum, identificável pela platéia: pequenos "comportamentos" tais
como:
- os dois apertam o botão ao mesmo tempo. Constrangimento de mãos,
etc.
- os dois em silêncio, meio ofegantes, evitando se olharem.
- os dois pigarreiam ao mesmo tempo e se mancam.
- os dois procuram as respectivas chaves (para fazer alguma coisa) e
acham ao mesmo tempo. Mais constrangimento.
- os dois se encaram ao mesmo tempo e desviam o olhar rapidamente.
- o estômago de um dos dois ronca suavemente de fome e
constrangimento. O roncador se mexe e se ajeita para evitar outro
ronco. Os dois fingem não ter ouvido nada. Mais constrangimento.
- o Senhor começa a olhá-la fixamente, ela de perfil para ele,
fingindo não perceber.
SENHOR Desculpe... A senhora não? ...
ANA Não.
SENHOR Não, desculpe, mas a senhora não ...
ANA Não. Não vou entregar carta nenhuma que eu não
sou de Correios e Telégrafos.
SENHOR (Invocadíssimo) Ah, não? Mas que carta?? ...
ANA A carta ... um ás de espadas prum fulano.
SENHOR (Pausa) Não, desculpe, mas a senhora não me é
estranha. Eu a conheço de algum lugar. Perdão,
mas como é mesmo o seu nome?
ANA Me conhece daqui mesmo. Eu sou a Dama do
Elevador! (Ela faz cara sexy, levanta a meia e
mostra as pernas sensualmente. O elevador para
no andar dela e Ana sai, puta, deixando o
Senhor muito perplexo e invocado).
16
SEQÜÊNCIA 8: APTO DE ZECA/ANA - INTERIOR - NOITE
O som da novela fortíssimo. Na sala, as crianças e a empregada
hipnotizadas assistem TV. Voz de Ana e atriz off.
ATRIZ (OFF) "Você é demoníaca, Berenice."
ANA (OFF) "Sou. E hoje estou com todos os meus
demônios funcionando a mil. Estou possuída."
ATRIZ (OFF) "Berenice, essa simples carta pode
destruir a vida de todos nós."
ANA (OFF) "Uma vida como a nossa é melhor que
estoure logo, se coma a si própria. Nossa
vidinha mentirosa, esmagada, falsa, hipócrita,
mutilada, monótona, castrada, é melhor que se
queime para ver se do fogo nasce algo melhor,
mais digno."
Ana entra no apartamento esbaforida, possessa.
ANA Cadê seu pai? Onde é que esse maluco se meteu?
Crianças e empregada não respondem, hipnotizadas pela TV.
ANA Quer me responder?! Cadê o Zeca?!
Babita volta-se para Ana pondo o dedo sobre os lábios e pede silêncio.
BABITA Pssiu... (E volta a olhar a TV)
ANA (Explodindo) Yuri, o Zeca veio pra casa? Já
chegou? Me responde, Yuri!
Os três se voltam para Ana, repressivos.
YURI Não tá vendo que eu tô ocupado?
Ana, possessa, desliga o aparelho de televisão. Todos reclamam. Ana
vai para o interior do apartamento.
YURI Pô, mamãe tá fogo.
17
BABITA Ela tá horrível na televisão e horrível aqui.
Acho que ela pegou alguma doença nessa novela.
Ana abre portas gritando por Zeca, acaba encontrando-o no banheiro,
sentado na privada, máquina de escrever no colo e copo de conhaque na
mão.
ANA Você enloqueceu?
ZECA Eu não!! O mundo ...
ANA Você esculhambou na televisão desde o diretor
até o contínuo e está despedido.
ZECA Não. Eu me despedi. Larguei aquela zorra toda.
ANA Porque, Zeca?!! POR QUE?
ZECA Chegou ao limite máximo de aporrinhação. Dali
em diante dá o câncer generalizado.
ANA Então eu também tenho o direito de explodir.
Mas eu me controlo, agüento. Sabe como?
ZECA Não consigo imaginar.
ANA Porque eu me lembro que tenho um pacto, um
compromisso com você, com meus filhos, com a
vida.
ZECA Eu também. Como você pode ver eu estou aqui.
Não fugi.
ANA Ah, é? Aliás o que é que você está fazendo
sentado na latrina com a máquina de escrever no
colo e esse conhaque nacional horrível na mão?
ZECA Trabalhando. Sou um operário da dramaturgia.
ANA No banheiro? Então tá ...
ZECA Não me reprime, meu amor! Não me reprime!
ANA Você que está me reprimindo. No ano passado
você caiu em crise, resolveu montar tua peça,
botamos todas as nossas economias, estreou e
18
foi um dos mais lindos fracassos do teatro
brasileiro.
ZECA Isso! Foi um fracasso maravilhoso. Todo mundo
que viu a peça adorou, mexeu com as cabeças.
ANA Todo mundo! Aquelas cinco pessoas que foram ao
teatro, você quer dizer ... E agora? Você
abandona o emprego na TV! E as dívidas da peça?
A gente ainda tem que pagar mais de um milhão!
E você está escrevendo o que, no banheiro?
ZECA Cartas de amor. Telefonei pro Pedro - da
gráfica - e ele já encomendou 20 cartas. Dá pra
ir segurando até pintar outra coisa.
ANA Ah, é? Cartas de amor? Operário da dramaturgia,
é?
ZECA Isso aqui (Mostra o papel na máquina) é mais
verdadeiro, arrojado e criativo que todas essas
novelas soporíferas que você faz na TV. Essas
cartas têm sangue! Estão vivas!
ANA Têm! O meu sangue! a minha vida! Porque eu vou
continuar me matando 24 horas por dia no
estúdio e você larga o teu emprego e escreve na
latrina! Você rompeu o teu compromisso comigo.
Com tudo! Coisa de criança!
ZECA Essas cartas dão um dinheirinho, porra!
ANA Não, que o Pedro não paga. Você já sabe disso!
E eu? Eu também tenho minhas fantasias, sabe?
ZECA Então realiza tuas fantasias, Ana!
ANA Não dá. Você tá careca de saber que eu queria
me desligar durante um ano da TV, fazer um
trabalho em teatro como esse que o Ricardo me
chamou ...
ZECA Porque não faz, pombas?!
ANA E quem vai batalhar o feijão? As crianças viram
pivetes assaltando na esquina?
19
ZECA Tá me acusando, me reprimindo ...
ANA Não. Tô denunciando a tua mentira. Você não
reconhece, mas no fundo se acha melhor do que
eu. Trabalhar na televisão te envergonha.
ZECA Acho tevê ótimo. Pode-se jogar muitas idéias,
discutir com milhões de pessoas. Tevê não é pra
aprofundar, é pra massificar, tudo bem, já sei.
ANA Não. Seja sincero. Você não acha TV digna de um
intelectual.
ZECA Nesse ponto é igual a qualquer outra profissão.
Todo mundo trabalhando, morrendo de ódio, mas
tentando dar umas mudadinhas aqui e ali. Tudo
cocô, tudo ótimo, tudo igualzinho, tudo certo,
tudo suicida.
ANA Só que você é do tipo que sabe que 2+2 são 4 -
mas você não agüenta, não é?
ZECA Talvez. Aí às vezes eu quero que 2+2 sejam
cinco. E daí? Porque 2=2 não pode ser
2.437.239?
ANA Daí que isto significa a fome. Desemprego.
Corte para as crianças no corredor ouvindo tudo.
BABITA Você ouviu? Eles falaram em fome.
YURI Da última vez que pintou desemprego a fome aqui
durou um ano.
BABITA Acho que a barra vai pesar de novo.
YURI Vamos executar o Plano Alfa-Um: Abastecimento
de Emergência! (Saem correndo).
O casal discute agora no quarto. Ana tira a maquiagem pesada da
televisão e vai tirando a roupa também.
ANA Zeca, você está sempre sonhando com alguma
coisa que não vai acontecer. É como se você
20
estivesse esperando eternamente a estréia de
uma peça. Essa é a nossa diferença. Pra mim a
peça já estreiou e nós já estamos em cartaz há
muitos anos.
ZECA Então não é uma peça boa ... É chata.
ANA Zeca, ... Eu só tenho medo de não estar
presente na noite da tua estréia.
CORTA PARA as duas crianças carregando zilhões de mantimentos da
cozinha para o quarto deles. Principalmente guloseimas (chocolate,
batata frita, etc.) Estocam tudo no armário do quarto.
BABITA Vem aí um longo inverno.
YURI Os bichos da floresta é que estão certos. O
negócio é armazenar rango pros dias
tenebrosos...
CORTA PARA o quarto dos pais.
ZECA Discutir com a cabeça quente não adianta. Vamos
ao bar pra relaxar.
ANA Não! Não agüento mais aquele bar todo dia!
Aqueles caras chatos todo dia discutindo
aquelas mesmas discussões há quinze anos.
ZECA Só um uisquinho pra esfriar a cuca.
ANA Não! Eu juro que hoje não vou a porcaria de bar
nenhum! Não tenho saco, não agüento!
SEQÜÊNCIA 9 - BAR ESPERANÇA - INT - NOITE
Silêncio. A seqüência inicia em imagem fechada de Zeca que, com a
cabeça enterrada nas mãos, contempla arrasada o tempo da mesa e futuca
um buraco na toalha com o dedo.
À medida que vai levantando a cabeça, vai entrando na trilha sonora e
barulho do bar, e quando seus olhos cruzam com os de Ana (que só agora
é vista) a zoeira chega ao auge. Então numa mesa mais afastada, não a
de habitual. Encaram-se tristes, cansados. Ela começa a dizer alguma
coisa que ninguém escuta pois nessa hora está sendo trocado o barril
de chope cujo chiado característico é seguido por uma espécie de brado
21
tradicional do "Esperança" (a ser criada), entoada por quase todos os
fregueses.
Insert rápido da troca de barris, detalhe de espuma com pressão ou
algo do gênero.
ALGUÉM (OFF) Mais um que morreu. Quem bebeu, bebeu.
Quem não bebeu se fudeu!
Zeca não sustenta o olhar acusatório de Ana e disfarça, acenando pro
garçom.
ZECA Ô Prepúcio... A patroa tá com sede!
PREPÚCIO (Se aproximando) Casal quando senta sozinho ou
tá começando ou tá acabando ... Vê lá, hein,
gente ...
O comentário de Prepúcio aumenta o desconforto entre os dois. Zeca
bate três vezes no pé da mesa.
PREPÚCIO O de sempre, D. Ana?
ANA (Concordando) E o balde de gelo, Prepúcio. Sem
gelo eu não sou ninguém.
ZECA Pra mim traz aquele teu coquetel nocaute que eu
hoje estou precisando.
PREPÚCIO Nocaute ... Era o coquetel preferido do Dr.
Perdigoto!
ZECA (Saudoso) Dr. Perdigoto ... Nunca mais, né?
PREPÚCIO (Saindo) Sumiu. Ninguém sabe. Ninguém viu.
Ana pega um cigarro e Zeca prontamente acende o isqueiro. Sua
gentileza não diminui em nada a irritação contida, mas visível de Ana.
CORTA PARA o Passarinho. A câmera acompanha-o em seu passeio pelas
mesas, aproveitando pra dar uma geral do bar. Não é necessário dizer
que mal se agüenta nas pernas. Dá uma parada na mesa do Cabelinho que
está acompanhado por três carecas e uma sirigaita que lhe cochicha
indecências no ouvido. Clima de embriagada sacanagem.
PASSARINHO Todo careca é brocha, se não é vai ficar, né
não, Cabelinho?
22
Um dos carecas se empomba, quer levantar, mas é seguro pelos outros
dois. Passarinho nem se toca, continua sua circulada. Pára na mesa de
Tuca Martins que está rodeado de gatinhas.
PASSARINHO Aí... Picão, hein?
TUCA (Com falsa modéstia) A gente faz o que pode ...
CORTA PARA: Ivan que entra com o Profeta
ANA (OFF - Arremedando) "não, a gente fica sozinho,
senta noutra mesa ... Conversa ..." Sei!
Ivan acena para a mesa de Ana e Zeca.
Corta para Ana que acena de volta com um sorriso amarelo.
ANA (Entredentes) Pelo menos você podia ficar com
outra cara, né? Esse ar de menino culpado não
lhe cai bem.
ZECA Você me esculhamba durante horas, num momento
que eu tô precisando de apoio, na hora que tô
dando uma puta virada na minha vida ... Você me
arrasa e quer que eu fique com cara de que,
catzo??!
ANA (Desistindo) É ... também falar o quê, né? Tudo
o que a gente diz tá tão gasto ...
Chegam Ivan e o Profeta.
IVAN Vocês não se incomodam se a gente invadir a
privacidade do casal?
Ivan e o Profeta não esperam a resposta, vão puxando cadeiras vazias
em mesas vizinhas e sentando.
ZECA E se eu me incomodar, meu cara Ivan Guerra?
IVAN Aí, caro Zeca, azar o seu. Já tá na hora de
você aprender a viver no coletivo.
ANA Isso ele nunca vai conseguir, Ivan. No mundo
dele só existe ele.
23
ZECA Eu quero é que vocês se ... Deixa prá lá. Deixe
... Nem isso vocês merecem.
PROFETA Prepúcio dos Deuses, me traz uma caipirinha de
cana sem açúcar.
PREPÚCIO (Em tom de sagrado) Tô com uma barbada ótima
pro oitavo páreo. Corre daqui há quinze
minutos, ainda há tempo de fazer o jogo pelo
telefone, vai pagar bem, "Overdose".
IVAN A Última barbada que você me deu, um tal de
"Lança-Perfume" não conseguiu nem chegar ao
starting gate. O safado do cavalo teve cólicas
renais - vê se eu agüento - Agradeço suas
barbadas, Prepúcio, mas me traz um chope bem
gelado e um sanduíche de qualquer coisa.
PREPÚCIO Com molho ou sem molho?
CORTA PARA mesa de Cabelinho que já tá com a mão por dentro da saia da
sirigaita.
CARECA Ih, lá vem tua mulher, Cabelinho.
CORTE RÁPIDO para Cotinha que avança decidida pra cima de Cabelinho. A
sirigaita mal tem tempo de levantar.
COTINHA Tu é mesmo um canalha, Cabelinho, Canalha! Você
me jurou de pés juntos que hoje ia jantar com
as crianças. Sabe que horas são, sabe? (Pra
todo mundo) Sabem há quanto tempo ele não vê os
filhos? Mais de quarenta dias! Quarenta!
CABELO Também, com aqueles horários que eles têm, quem
é que agüenta?
COTINHA Você não quer que eu ponha duas crianças na
escola noturna, quer?
CABELO E você quer que eu venha pro bar às sete horas
da madrugada?! Essa é boa!
COTINHA Não quero que você venha hora nenhuma. Tua casa
não é o bar, a tua mulher não é a D. Esperança
nem foi com um bêbado que eu me casei.
24
CABELO Nem eu me casei com uma megera repressora
insuportável ... Eu fui enganado. Não sabia que
você era tão chata.
COTINHA Sou chata mas eu que seguro teus porres, sou eu
que te dou banho quando você se vomita todo,
sou eu que cuido da tua casa, que crio teus
filhos, que trato da tua roupa, da tua comida,
do feijão que você gosta ...
CABELO Bem que eu tava desconfiado: Eu casei foi com a
empregada.
COTINHA Empregada não, escrava que empregada tem
salário.
Chega Galocha apregoando:
GALOCHA Aí, quem vai: tampão de ouvido? Deixe sua
mulher falando sozinha, não ouça o que não
quer. Seu ouvido é pinico? O melhor remédio
contra chatos! Aí, quem vai? Trezentos
cruzeiros um par, três por mil, é pra
acabar ...
CABELO Dá um aqui pra mim, Galocha!
Cabelinho tampa os ouvidos e a voz da mulher que continua falando
desaparece completamente. Cabelinho sorri satisfeito.
CABELO Ô Prepúcio, traz mais uma rodada!
CORTA PARA mesa de Ana e Zeca. Chega Nina Saraiva beijando e se
esfregando nos três homens da mesa, principalmente em Zeca em que ela
tem um tesão declarado. Para Ana manda um beijinho cínico de longo.
Arranja um jeito e senta-se ao lado de Zeca. Nada passa desapercebido
a Ana.
NINA (Para Ana) Continua torturando o Brasil, Ana,
por causa daquela famigerada carta?
Ana olha sério e não responde. Não gosta de Nina.
IVAN E teu projeto, aquele trabalho na selva em
índios, sai ou não sei?
25
NINA Tá tudo em cima, as músicas tão na cabeça,
algumas eu até já gravei ... Tá faltando é o
resto da trupe: O Salvador só vai poder ir
depois da Festa e o Tuca Martins, nosso ator
principal, antes tem que estrelar mais um drama
pornográfico do nosso cinema. Quer dizer, falta
o texto, que ninguém consegue escrever.
(Olhando para Zeca) O autor que eu queria não
pode, ficou chic, só trabalha pra televisão,
ganha em dólar ...
ZECA Trabalhava, até hoje de tarde. Mandei tudo pra
puta que pariu.
NINA (Entusiasmando-se) Não brinca!
ZECA Não tô brincando. Nunca fui tão lúcido na minha
vida (Olha para Ana).
ANA (Debochando) Claro ... Tão lúcido nunca!
NINA (Excitada) Pôrra, Zeca, até que enfim! Já tava
na hora mesmo. Aquela televisão tava te
matando, matando a tua criatividade, o teu
talento, tava te deixando bundão - o salário
garantido no fim do Mês, tava ficando acomodado
...
ZECA Cansei de incompetência, da mediocridade.
Encheu meu saco!
NINA Foi a coisa mais digna que você já fez na vida,
eu acho, sinceramente!
Nesse momento chega um cara ao lado de Ana. Metido e bonitão
Hippopotamus. Colares de ouro, anéis, camisa aberta, peito cabeludo,
brilhantina no cabelo à la Chiquinha Scarpa. Seu nome: Camelo.
CAMELO Ana Moreno! A mulher mais linda e odiada desse
país!
ANA (De certa forma lisonjeada) Nem tão linda nem
tão odiada.
Reação de Zeca que olha cabreiro pro cara.
26
CAMELO (Sentado ao lado dela) Não tá lembrada de mim,
Ana? A gente estudou junto na Faculdade de
Sociologia, o pessoal me chamava de Camelo ...
por causa da barba ...
O Profeta estende a mão por cima da mesa.
PROFETA E aí, Camelo? Tudo bem? Muita sede? Sabia,
Camelo, que Copacabana, Ipanema e Leblon e
adjacências vão ser tragados pela merda?
Camelo não lhe dá pelota.
ANA (Tentando ser simpática) Você fez sociologia
também?
CAMELO Não lembra de mim? Só porque ficou famosa?
ANA (Sem jeito) O que é isso... Que era um turma
tão grande ...
CAMELO E eu também não era da tua curriola, não. Me
metia em política, você é que adorava uma
passeata, uma manifestação.
IVAN Ah, nada como um dia após o outro.
CAMELO Eu era amigo do Cebola, a gente vivia junto.
ANA (Também não lembrando) Cebola?
CAMELO O Cebola!
NINA Porra, que dupla! Camelo e Cebola!
Camelo não acha graça.
ANA (Tentando lembrar) Cebola ... Cebola ...
CAMELO É, já esqueceu, claro, virou estrela de
televisão ...
ANA Quem me dera, Camelo.
27
CAMELO Eu não sou mais Camelo, meu nome é Peçanha,
André José Peçanha! E caguei prá você, pra sua
novela, pra sua televisão, não preciso de nada
disso. Tô rico, minha filha, tenho muito
dinheiro, muito. Enquanto vocês pensavam em
política eu trabalhava.
ANA Que bom pra você (Já se irritando).
ZECA Você tem muito dinheiro? Então porque não
enrola ele todinho e senta em cima?
PROFETA Me desconta um cheque pra daqui a 90 dias,
hein, dromedário?
Todos riem da cara do Camelo.
CORTA PARA Cotinha que põe Cabelinho pra fora aos pescoções.
COTINHA Vadio!
CABELO Ô Cotinha, pára com isso!
COTINHA Eu te juro que tu vai aprender (E tome-lhe
pescoção).
Passarinho passa e vocifera:
PASSARINHO Abaixo o feminismo radical e ignorante!
Cotinha levanta a mão pro passarinho que se manda rapidinho, Cotinha
aproveita e ameaça a sirigaita.
COTINHA E tu também, sai fora do meu homem, tô avisando
... (p/ o marido) seu bêbado salafrário.
Prepúcio chega tentando apartar.
CABELO Chama a polícia, Prepúcio, o esquadrão da
morte, e qualquer coisa!
COTINHA Vocês todos são cúmplices!
CORTA PARA caixa onde D. Esperança sorri do alto de sua sabedoria.
CORTA PARA outro detalhe engraçado (a ser inserido).
CORTA PARA a mesa de Ana e Zeca. Camelo já sumiu.
28
NINA Eu não tenho nada a ver com a discussão de
vocês, mas acho que cê tá caretíssimo, Zeca,
tem que abrir mesmo ... se abrir pro mundo, ser
dono do teu nariz, tem que partir prum esquema
alternativo, independente.
ANA Se você não tem nada a ver com o papo, e sabe
disso, então é melhor não ficar dando palpite
inútil, Nina.
Chega Prepúcio com mais um rodada pra todo mundo, inclusive nova
garrafa e nova balde de gêlo para Ana. O Álcool já se faz sentir em
todos.
IVAN A gente devia brindar.
ANA (Levantando seu copo) À irresponsabilidade
NINA Ao novo, ser desconhecido, ao índio
brasileiro ...
IVAN A todos nós, oprimidos e fudidos!
PROFETA À merda inevitável que brotará na terra e no
mar.
NINA Você não pensa em outra coisa?
PROFETA Quanto tô acordado, não.
ZECA (Baixo, olhando p/ Ana) Aos insensíveis ...
NINA (Também olhando p/ Ana) pior do que os
insensíveis, são os arrogantes ...
ANA (p/ Zeca, ignorando Nina) Se faz bem pro teu
ego ser insensato como revolucionário só porque
teve um ataque histérico na emissora por causa
de uma crítica, ótimo pra você, azar o seu.
Agora, eu não vou compactuar com isso, não,
aliás, com você, pactos nunca mais!
ZECA Isso parece nome de samba-canção: "com você
pactos nunca mais".
29
ANA Pode parecer o que você quiser, Ivan, mas a
realidade é que a gente tem uma dívida e
combinamos que íamos segurar a barra e pagar,
não tinha nada que pedir demissão, era só até o
fim do ano.
ZECA "Só até o fim do ano"? Pimenta nos olhos dos
outros é refresco, né meu bem?
NINA Coisa carêta, essa necessidade de segurança
como se a vida fosse segura! Ilusão, nêga.
ANA (Estourando) Ilusão? Vocês acham que é fácil
pra mim passar dez horas por dia dentro dum
estúdio, gravando cena: sem as mínimas
condições de trabalho, tendo que decorar
páginas e páginas de besteira, rir, chorar, e
ser a mulher má da novela das oito, com a
população inteira te odiando? Vocês acham que
eu curto?? Que eu tenho prazer em trabalhar na
televisão? Porra!
NINA Então sai, ué! Masoquista?
ANA (Ficando a fim de dar uma bolacha na outra)
quem sabe...?
PROFETA Isso vai dar merda ...
ANA Se você quer saber, já deu! Deu merda, deu
mesmo ! (Se levanta) cansei desse papo, esse
papo é velho, já conheço os passos dessa
estrada, companheiro, isso não vai dar em nada.
São quase treze anos vivendo com esse cara, de
dois em dois anos ele tem uma crise, crise que
nunca dá em porra nenhuma. Crise a gente tem é
pra melhorar, senão é desculpa pra fraqueza.
Ninguém te conhece melhor do que eu, Zeca, não
fica se enganando.
IVAN Senta aí, Ana (Passa um faca de mesa pra ela)
Se quiser pode até matar, mas sem fazer
escândalo, por favor.
ANA Quer dizer que eu não posso falar alto?! E eu é
que sou a repressora! Olha Zeca, eu vou me
30
embora, vou pra casa, minha casa. Você por
favor, arrume um outro lugar pra dormir, tá
legal?! Pra mim chega!
Chega o Galocha.
GALOCHA Tá separando, desquitando? Tenho um quarto jóia
pra alugar, tá afim?
Reação de Zeca.
CORTA PARA:
SEQÜÊNCIA 10: APT. DE IVAN GUERRA. INT/QUARTO. CORREDOR
No meio do quarto uma cama absolutamente estranha: o colchão em vez de
estar no estrado, está no chão, cercado pela estrutura da cama. Com a
CÂMERA baixa, vemos um pé e um braço que saem por baixo.
Um rádio despertador digital toca uma música no volume máximo. A mão
que estava saindo pra fora da cama procura o botão do rádio para
desligar, e continua a dormir com a mão no botão.
A pessoa que está ao lado, também toda coberta, acorda, se mexe um
pouco, se espreguiça e levanta a cabeça daquele buraco. É Zeca, que
toma o maior susto com um enorme pastor alemão que olha pra ele com a
língua de fora e o peito arfando.
Zeca, ao ver o cachorro, fecha os olhos imediatamente e fica pensando
se não ficou mesmo maluco. (Zeca tá com a roupa da noite anterior,
inclusive sapatos).
ZECA (Sacudindo a outra pessoa) Guerra, ê Guerra
acorda ... (baixinho) Você tem cachorro em
casa?
IVAN (Dormindo) que cachorro, pombas ...
ZECA Então levanta devagar e vê se não tem um
cachorro aí no pé da cama.
IVAN Porra, deixa eu dormir, que cachorro coisa
nenhuma, sou lá homem de ter cachorro? (E volta
a dormir).
ZECA (Insistindo) Ô Ivan ... não tô de sacanagem
não, mas eu queria saber se tem ou não tem um
pastor alemão no pé da cama.
31
IVAN Emputecido, resolve levantar pra ver. Quando
ele levanta, o cachorro levanta também. Ele
deita depressa e o cachorro deita também.
IVAN (Refugiando-se debaixo do travesseiro) Eu
preciso parar de beber.
ZECA Eu também, eu juro ... o que é que a gente vai
fazer?
IVAN De que cor que é o seu?
ZECA O meu é manto negro, e tá com uma língua enorme
do lado de fora, vermelha.
IVAN O meu também é manto negro com uma língua
vermelha.
ZECA É possível duas pessoas terem o mesmo delirium
tremons?
IVAN Acho que é ... Não tem aqueles caras que olham
e os dois vêm um elefantinho cor-de-rosa? Então
? A gente tá vendo um pastor alemão manto negro
com uma língua vermelha pendurada.
ZECA Eu juro que não bebo mais ... esse foi o último
porre que eu tomei na vida. Será que o cachorro
ainda taí? Dá uma olhada.
IVAN Eu não, dá você, deteste cachorro. Odeio.
ZECA Alguém tem que olhar ... par ou ímpar?
IVAN Par ...não, ímpar!
Tiram par ou ímpar debaixo do travesseiro.
IVAN (Vitorioso) Ímpar!
Zeca levanta com cuidado e não vê nada.
ZECA (feliz) Sumiu, o bacana.
IVAN Eu já tava ficando preocupado ...
32
E fazem menção de se levantar quando ouvem um leve rosnar do cachorro.
Se viram e o cachorro está do outro lado, olhando pra eles que se
enfiam de novo debaixo das cobertas.
IVAN É o mesmo cachorro?
ZECA Será que é uma invasão de cães?
IVAN E eu tô precisando dar uma mijada, a bexiga não
tá agüentando.
ZECA Eu também. Tem um urinol?
IVAN Urinol???
ZECA Urinol, pinico, comadre.
IVAN Tá vendo urinol também? Primeiro você pergunta
se eu tenho cachorro depois se eu tenho
urinol ... é assim que você retribui a minha
hospitalidade? Você tá me achando com cara de
quê?
ZECA Desculpa, Ivan, desculpa, porra ... mas a gente
vai ter de levantar, alguém vai primeiro ...
IVAN Par ou ímpar?
ZECA Ímpar.
Jogam e Ivan perde. Com o cú na mão, levanta e passa devagarinho pelo
cachorro.
O cachorro levanta e vai atrás de Ivan. Ele pára, encagaçado, e o
cachorro pára também.
ZECA (Jogando p/ Ivan meio sanduíche que tira do
bolso) Toma, dá pra ele um pedaço de pão. Se
ele comer, existe. Delirium tremons não come
pão.
O telefone começa a tocar. Ivan dá o pão pro cachorro que come numa só
bocada quase levando a mão dele junto. O telefone pára de tocar sob
olhares aflitos. Zeca e Ivan se abraçam felizes.
33
IVAN Ainda bem que não era delirium tremons.
ZECA Precisamos tomar um porre pra comemorar.
IVAN Urgentemente! Mas porra, como é que esse
cachorro veio parar aqui?
ZECA E eu é que sei? A casa é tua.
IVAN Mas o cachorro não é!
Ficam intrigadíssimos. O telefone toca de novo. Zeca atende.
ZECA Alô ...
NINA (OFF) Donde fala?
ZECA 259-35 ... não, não .... esse é o meu, sei lá!
NINA (OFF) Zeca? Sou eu, a Nina.
ZECA Ô, meu amor, que que você manda?
NINA (OFF) Pelo amor de Deus, me diz uma coisa,
ontem quando você vieram me trazer em casa,
vocês levaram o meu cachorro? Já procurei que
nem doida, e o meu porteiro disse que viu dois
homens de porre, saindo com ele...
Reação de Zeca e Ivan.
CORTA PARA seqüência seguinte.
SEQÜÊNCIA 11 - APARTAMENTO AUTOR-ATRIZ - INT. DIA
Ana caminha pelo corredor da casa em direção à sala, enrolada numa
toalha de banho, os cabelos presos por grampos, carregando objetos de
uso pessoal de Zeca, quase tropeçando em Babita que a segue de perto,
aparentemente aplicada em ajudar a mãe, arrastando algumas camisas
pela mão. Ana traz uma caixa com objetos do toucador e fala enquanto
anda e ajeita as coisas na caixa:
ANA Separação. Nunca ouviu falar? Se-pa-ra-ção.
34
BABITA Que nem a gente vê na novela?
ANA Para de achar que tudo que você vê na sua vida
...
BABITA Por que, você não gosta mais do papai?
Ana não sabe como responder, hesita, deixa as coisas nas três malas
enfileiradas no chão onde estão separadas roupas, discos, material de
trabalho e curtição de Zeca. Ao lado das malas, Yuri, o outro filho
está sentado, ouvindo o papo. Ana volta para o quarto, Babita atrás
dela.
ANA Gosto ... quer dizer ... não sei, Babita. Eu
tou confusa, ele também está confuso ...
Enquanto isso, na sala, Yuri nervosamente revira as malas do pai a fim
de surrupiar alguma coisa do pai: encontra um par de óculos, bota no
rosto exibindo um sorriso orgulhoso.
ANA (OFF) Não sei, Babita ... Só sei que não dá
mais. Eu não agüento mais viver com seu pai (há
um tom de decisão e raiva nas suas palavras) ...
posso estar errada, mas não dá, não quero mais.
Yuri esconde os óculos nas costas ao ver a mãe entrar na sala com
Babita. Ana para um pouco, sem saber o que dizer e continua arrumando
os discos, nervosamente, na mala. Enquanto isso Yuri, escondido da mãe
mostra os óculos que roubou do pai à irmã e esconde debaixo de uma
almofada. Babita devolve um sorriso de cumplicidade. Yuri vira-se para
a mãe e diz:
YURI Porra, não, não dá pra entender mesmo. Vocês
não vivem dizendo que a gente era uma tribo?
Como é que acabam com a tribo sem consultar a
tribo?
Ana, embaraçada com a pergunta, desconversa.
ANA (Caminhando para o quarto) Yuri, depois a gente
conversa, tá? A mãe vai tomar um banho que já
está na hora da gravação e depois a gente fala
melhor.
Yuri e Babita, na sala, procuram mais alguma coisa pra roubar.
35
Encontram um gravador, discutem entre si a posse dele.
BABITA Você já ficou com os óculos, o gravador é meu.
YURI Ah, é, é? não senhora !!!
A campainha toca, os dois escondem rapidamente o gravador. Yuri abre a
porta; é Zeca. Ele olha, vê as malas e pergunta.
ZECA Tem alguém de mudança?
BABITA Tem; você!!
Ana surge na porta do quarto. Clima de constrangimento.
ANA Botei os discos e os livros numa mala só. As
roupas estão separadas. Se tiver faltando alguma
coisa você me avisa depois.
ZECA Ah, quer dizer que não era um porre? (muda de
tom) ... Olha, eu vim aqui para conversar ...
ANA Mas eu não tenho mais nada pra conversar com
você: e não estou de porre! (vira-se para Yuri)
Quer dizer pro teu pai que é verdade?
YURI Pai, ela mandou dizer que o cacique foi
demitido.
Ana vai saindo da sala, enquanto Zeca responde.
ZECA (Para Yuri) É, vai ver ela já elegeu um novo
cacique ... E vocês, vão concordar?
Ana entra no banheiro batendo a porta. Zeca procura nervosamente entre
os discos um elepê de Roberto Carlos. Acha. Coloca na vitrola e diz
para o filho, falando alto:
ZECA Diga pra tua mãe que eu deixei esse presente
para ela.
Roberto começa a cantar
- "ai, eu vim aqui amor, só pra me despedir..."
36
Zeca pega as malas, beija os filhos e sai.
- "e as últimas palavras desse nosso amor..."
Duas lágrimas rolam no rosto de Ana misturando-se à espuma e a água do
chuveiro.
SEQÜÊNCIA 12 - INTERIOR
Prepúcio está servindo uma rodada de chope para Cabelinho e uns caras.
Cam. abre e mostra que eles estão bebendo dentro do mictório do bar.
Prepúcio está falando:
PREPÚCIO Ela disse que não sai enquanto você não
aparecer nem que tenha de dormir no bar ...
(Ri)
CABELINHO CAGUEI!!! Então eu vou tomar um porre dentro
desse mictório: fica comigo Bochecha? (pergunta
a um desses caras)
BOCHECHA (Meio sem graça, o cheiro lá dentro está
insuportável) É ... quer dizer ... Eu segura-o
um pouco!
CABELINHO Não dá, rapaz, não dá ... a mulher vive
infernizando a minha vida, quer que eu pare de
beber, já imaginou? (Decidido) Eu não saio
daqui!!!
PREPÚCIO Larga a mulher, Cabelo !!
CABELINHO Já tentei Prepúcio, já tentei ... mas ao mesmo
tempo eu sou amarrado na Cotinha - (Orgulhoso)
tu não conhece a Cotinha, Prepúcio!
Prepúcio vai saindo. Cabelinho o chama:
CABELINHO Prepúcio ... se ela for embora você me avisa,
tá? E quando voltar, traz um tira-gosto!
BOCHECHA (Com cara de nojo) Aqui dentro !!!
Durante essa cena haverá um movimento normal de mictório de bar.
Pessoas entrando e saindo, bêbados tentando mijar, etc. Prepúcio sai
rindo. Corte. No interior do bar o movimento é intenso. Passarinho, de
porre (como sempre) anda trôpego entre as mesas, dando trinados
37
imitando pássaros. De vez em quando interrompe os trinados e puxa um
samba-canção.
PASSARINHO "Aço firo de um punhal..." foi teu adeus, pra
mim ..."
Passarinho retoma a caminhada. Para junto da mesa onde estão Ana, duas
amigas e Valfrido Salvador. Passarinho senta. Valfrido está falando:
VALFRIDO Vai ser o maior agito: vou trazer crítico,
imprensa ... o Rio de Janeiro inteiro vai se
apertar dentro do mictório desta espelunca! (Se
entusiasma) vai ser a exposição do ano!!
ANA É ... (sacaneando) pode não vender quadro, mas
promove!
VALFRIDO Promoção sim, porque não? Promoção ... isso é o
que conta; é preciso tirar a arte dos museus,
das paredes, das salas fechadas e criar espaços
novos, invadir os meios eletrônicos, resgatar a
festa popular; entendeu, ô estrelinha de
televisão!!!
ANA Olha aqui, ô Picasso de merda ... primeiro: o
que conta é o valor da obra, sua qualidade, o
talento de quem a faz: segundo - estrelinha de
televisão, é a mamãezinha!
As amigas dão força a Ana. Valfrido começa a esbravejar:
VALFRIDO E o trabalho que você faz tem algum valor? Vive
se promovendo ... (a discussão agora está
acalorada)
Passarinho que a tudo ouvia com cara de enfado e tédio, levanta da
mesa, olha para os quatro e emite um som, como se estivesse vomitando:
PASSARINHO "ELEAAAAAAARRRRRGSGGGSHHHHH"
Feito isso vai sentar na mesa ao lado onde estão Galocha e Dona
Cotinha. Galocha tenta mostrar as qualidades de um produto:
GALOCHA Se o remédio falhar, o laboratório fabricante
lhe paga uma indenização. As estatísticas
mostram que nove entre dez alcoólatras, deixam
38
de beber. Basta a senhora misturar o remédio na
comida do Cabelinho ...!
Cotinha que a tudo ouvia impassiva, sentada numa mesa de bar tomando
uma coca-cola, sozinha, com raiva do marido, explode:
COTINHA O Sr. quer fazer o favor de sumir daqui!!!
GALOCHA (Saindo) A Sra. que sabe, Dr. Cotinha, a Sra.
que sabe ...
Passarinho continua com cara de enfado. Prepúcio chega na mesa.
PREPÚCIO Dr. Cotinha dá pra Sra. esperar o Cabelinho, no
balcão? Tem muita gente querendo mesa ... aí -
eu levo prejuízo, né?
D. Cotinha se levanta e vai para o balcão. Passarinho levanta outra
vez.
PASSARINHO BLEAAAAAARRRGGGGHHHH!
Passarinho caminha em direção ao mictório. (Corta)
No mictório, Cabelinho e Bochecha conversam à porta de um dos
compartimentos. Cabelinho mal se sustenta em pé, segura Bochecha que,
também bêbado, tenta se desvencilhar. Na tampa da privada estão os
copos de chope, maços de cigarro, um pacotinho de amendoim. Passarinho
entra direto para um dos compartimentos e começa a mijar.
CABELINHO Porra, Bochecha! Quer dizer que os ratos
abandonam o navio? Porra, Bochecha, tu não vai
me deixar aqui sozinho ...
BOCHECHA Não dá, Cabelo, não dá ... tá legal, eu sou
solidário ... mas tou precisando respirar ...
este cheiro de pinhobosta tá me assassinando!
CABELINHO Só mais um pouco, Bochecha ... Ela já deve tá
se mandando ...
BOCHECHA Escuta aqui, Cabelinho, vou mostrar que sou
solidário ...Tu segura aqui, eu vou lá fora,
dou um bordejo, vejo se a Cotinha já se mandou
e depois te faço o relatório. Tá legal?
CABELINHO Tá legal, mas me trás um pilot na volta ...
39
Passarinho, que acabou de mijar, sai do compartimento fechando a
braguilha, passa pelos dois, olha-os nos olhos e:
PASSARINHO BLEEEEEAAARRRGGGGHHHH!
Passarinho sai do mictório. Câmera o acompanha. Passarinho ainda de
porre caminha por algumas mesas até que senta na mesa de Ivan Guerra,
que também de porre, resmunga solitário.
A porta do bar se abre e entra um índio. Está vestido simplesmente:
uma calça, uma velha camisa, sandália, e uma bolsa de pano no ombro.
Seu ar é sério, preocupado. Olha para todo o bar como e estivesse
procurando alguém. As pessoas olham para o Índio com expressões
variadas: deboche, espanto, sorrisos. O índio se encaminha para o
balcão. Passa pela mesa de Ivan e Passarinho. Ivan se assusta.
IVAN Passou um índio aqui?
Passarinho rosna, não responde. Ivan sacode a cabeça, fecha os olhos,
cutuca passarinho.
IVAN Passarinho ... Passarinho ... você que é expert
... delirium tremons é só com bichos ou pode
ter gente também? (CORTA)
O índio chega no balcão do bar onde estão conversando Dona Esperança,
atrás da caixa, e Cotinha, no balcão. O índio pergunta por Nina e Dona
Esperança responde que ela deve estar chegando, que ele aguarde. O
índio fica parado junto ao balcão, em silêncio. Dona Cotinha e
Esperança retomam a conversa interrompida.
COTINHA Dona Esperança, eu conheço esse homem como
ninguém. São quinze anos ... quinze anos! Ele
não presta, nunca prestou. Olha, Dona
Esperança, só existem duas coisas capazes de
fazer o Cabelo deixar de freqüentar esse bar.
Uma é fechar o bar. A outra, só eu sei quanto
vai me custar, mas juro que vou fazer ...
DONA
ESPERANÇA (Assustada) Calma Dona Cotinha, calma ...
DONA COTINHA Eu juro que a próxima vez que eu encontrar o
Cabelo dentro desse bar eu vou tirar a roupa
inteira, vou ficar nua em pêlo. Vou fazer um
strip-tease na frente dos amigos dele! Ele vai
40
ficar tão envergonhado que nunca mais entra
aqui!
Ao ouvir isso, o índio olha cabreiro para as duas.
DONA
ESPERANÇA Bem que eu tenho pensado em vender esse bar,
Dona Cotinha ... Ando cansada ... Desde que meu
marido morreu, há dez anos, que eu venho
segurando o bar como meu trabalho... são bons
meninos ... o Cabelinho, boa gente, vi crescer
aqui ... mas é muita loucura, muita loucura
Dona Cotinha ... estou cansada ... (CORTA)
No interior do mictório, vai e vem de pessoas. Cabelinho, solitário,
continua bebendo, agora desenhando meticulosamente a parte inferior da
porta do banheirinho onde estão os copos de chope. Entra uma figura
soturna, aproxima-se de Cabelinho:
FIGURA Por obséquio, o Sr. poderia me emprestar um
pilot?
Cabelinho empresta um de seus pilots. O homem dirige-se a um dos
compartimentos e desenha na porta uma suástica. Volta e, polidamente,
devolve o pilot a Cabelinho dirigindo-se para a saída. Cabelinho
recupera-se do espanto e pula:
CABELINHO Filho da puta! Ei, segura ele (gritando) Eu vi
um nazista - eu vi um nazista!!!
Sai correndo atrás do cara, e quase na porta, lembra-se de Cotinha e
volta chutando as paredes, de raiva. CORTE
No interior do bar, Zeca, Tuca e Nina acabaram de chegar e se
encaminham para a mesa de Ivan e Passarinho. Sentam. Ana, da sua mesa,
vê Zeca. Olha nervosamente para o marido. Zeca também vê Ana. Começa
uma troca de olhares. Zeca fica tenso. Prepúcio traz o índio até a
mesa. O índio senta. - Ivan fala para Zeca.
IVAN Chegou o dono do cachorro ...
Nina se surpreende ao ver o índio.
NINA Oi, Donato! (apresenta o índio as pessoas)
Zeca continua observando Ana. Nina conversa com o índio e Tuca.
41
NINA (Para Zeca) O Donato disse que está tudo
resolvido com a FUNAI: eles autorizaram a
festa; vai ser dia 18 de Dezembro...
Zeca não está prestando muita atenção no papo; seus olhos estão em
Ana.
Conosco vão umas pessoas, né Donato?
Donato confirma com a cabeça.
um padre, um jornalista e um advogado. Tá
ouvindo Zeca?
ZECA (Voltando a si) 18 de Dezembro ... claro!
Na mesa Ana, Valfrido continua discursando. As amigas de Ana continuam
atentas às palavras de Valfrido.
VALFRIDO É preciso abrir espaço pra mediocridade...
acabar com essa idéia de que a arte é
privilégio de uns poucos abençoados (vai se
inflamando e sobe na cadeira) É preciso acabar
com o elitismo!!
Todos vaiam, assobiam e aplaudem. Zoeira total. Neste momento a porta
do bar se abre, e aparecem três policiais fardados. Tensão no bar.
Silêncio. Todos se comportam como se tivessem sido flagrados pelo
inspetor do colégio. Valfrido senta de mansinho na cadeira... Os
guardas caminham até o balcão, cumprimentam D. Esperança, que serve
água mineral para eles. Silêncio. Os guardas agradecem e saem andando.
Silêncio. Os guardas vão embora. Esporro. O bar volta a fervilhar.
Arnaldo, um dos freqüentadores do Esperança, senta na mesa de Ana e
puxa papo. Zeca da sua mesa está vendo. Nina e Tuca tentam convencer
Zeca. Passarinho e Ivan quase dormem.
TUCA Vamos Zeca ... O Valfrido já topou, só falta
você! - vamos sair um pouco deste botequim ...
da cidade!
ZECA (Acabando de olhar Ana) Tá legal, eu topo, mas
antes eu preciso terminar um trabalho.
NINA/TUCA (Espantados) Que trabalho?!
42
ZECA Terminar dez cartas de amor, pra gráfica do
Pedroca ...
NINA (Beijando Zeca) Eu te escrevo quantas cartas de
amor que você quiser...
Ana, de longe, assiste a cena.
SEQÜÊNCIA 13 - SUPERMERCADO - INT. DIA
Ana Moreno percorre as prateleiras de um supermercado tirando
metodicamente, com rapidez e precisão, as compras e conferindo cada
objeto na lista que trás nas mãos. Ela está usando um de seus
disfarces: um boné enorme que cobre seus cabelos, óculos escuros
grandões e uma blusa folgada. Seus gestos são nervosos e rápidos. O
movimento é grande. Mulheres confabulam diante das prateleiras, homens
com máquinas que mudam os preços freneticamente, jovens maridos
fazendo compras com minicalculadoras. De vez em quando alguém olha
para Ana como se fosse reconhecê-la. Ela se assusta, desvia o olhar e
mergulha mais nervosamente no seu ritual. O carrinho está quase cheio.
Em outro corredor paralelo ao de Ana, Zeca leva com muita hesitação um
carrinho quase vazio. Pára diante de cada produto novo, pensa, pega um
pacote, volta atrás e devolve quando encontra um outro. De vez em
quando olha para as mulheres em volta como se quisesse pedir ajuda.
Num desses movimentos Zeca vê - pelo espaço de uma prateleira - a
figura de Ana. Se atrapalha, deixa dois produtos em qualquer lugar,
vai seguir caminho, pensa, pega o carrinho e segue em direção ao
corredor onde está Ana.
Ana prossegue em seu ritual. Zeca vem em sua direção pegando uma coisa
ou outra nas prateleiras. Os dois encontram-se. Pausa. Sorrisos meio
sem graça, ficam um diante do outro, os carrinhos entre eles:
ZECA Oi! Como é que é?
ANA Oi! Tudo bem... na batalha ... E você? (Olha
para o carrinho e ri, maliciosa) Hoje é dia de
compras, é?
ZECA (Sem graça) É ... pra você ver ... (Vira um
pouco a direção do carrinho na mesma direção de
Ana) Tô meio enrolado ... vem cá ... esse
barato de limpeza não tou sacando algumas
sutilezas ... (Os dois já estão caminhando
juntos, meio rindo, naturalmente) Ia comprar
aquele detergente ali, mas bateu a dúvida:
43
detergente lava louça? (Zeca para, olha para
Ana, como um aluno para a professora de
geografia).
ANA (Explodindo numa risada) Claro, ô anafalbeto!
Detergente lava louça. Sabão também, sabia?
(Muda de tom, curiosa) Vem cá, o apartamento do
Ivan não tem infra nenhuma não, é?
ZECA Pois é, uma loucura! (Mostra uma pilha de
pacotes de vela) Luz cortada por falta de
pagamento ... recessão de papel higiênico ...
tampa de privada quebrada ... (faz uma cara
gaiata) por falar nisso, onde fica a sessão de
desentupidores?
ANA (Rindo) Tá ruço, hein?
ZECA (Mentindo que se entregou demais, se
recompondo) Tá ... e você? Ontem na Dona
Esperança te achei meio abatida ... que é que
há? (olha Ana nos olhos)
Diante da pergunta, Ana se irrita, vacila e retoma seu ritmo de
compras, pegando coisas nas prateleiras, Zeca atrás dela.
ANA Nada ... tudo na mesma, né, Zeca. (Confere a
lista) Cansaço, só. Ontem a gravação foi pesada
...
ZECA (Insistindo) ... pois é ... te achei meio
triste (Tentando acompanhar o ritmo de Ana) ...
e as crianças? O Yuri fez as provas? (Corre um
pouco mais para pegar a resposta de Ana).
ANA (Ocupada com a lista de compras) Tá fazendo ...
não estudou nada, claro ... (Pára um pouco,
olha de frente para Zeca, meio provocando) Por
que? Tá preocupado?
ZECA É ... Não sei ... tive pensando que ele deve
estar precisando de um apoio maior, posso até
dar uma mãozinha em português. Aliás, passei
por uma seção de roupas ali na frente ... você
podia comprar um jeans novos pra ele. Ele tá
reclamando que os dele tão churreados.
44
Ana que vinha se absorvendo nas compras outra vez, se irrita e
explode.
ANA Ah, você está preocupado? Será que o Yuri vai
ficar traumatizado porque anda de jeans
esfarrapados porque a mãe dele não tem tempo de
comprar roupa nova pra ele? Pode ser grave, não
é? Como é que você nunca pensou nisso antes,
hein, Zeca? (Fica cada vez mais irritada, agora
é incisiva) Olha aqui: eu estou atrasada, tenho
gravação daqui a pouco, tenho que levar essas
compras em casa, despachar o Yuri pro colégio,
gravar, interromper a gravação, pegar a Babita
no colégio, levar ao dentista, deixar em casa,
voltar para uma externa, noturna, na praça
Saens Pena e ainda nem li o texto. Não dá pra
ficar ouvindo sua pregação pedagógica, tá
legal?
Ana sai empurrando o carrinho a todo pano. Zeca ainda atrás, surpreso
com a explosão.
ZECA Eu só queria saber ...
ANA (Parando, subitamente) eu só queria fazer o que
tenho que fazer. E tem mais: tou precisando da
chave da casa que você ainda não me devolveu.
Tá com ela aí?
Zeca perde o controle. Avança para Ana, puxa o boné, arranha os óculos
escuros e começa a falar alto.
ZECA Ana Moreno, você por aqui! Berenice, é você! Ei
pessoal, olha ela aqui. Tá dizendo que vai
entregar a carta!
Confusão. As pessoas começam a cercar Ana. Pedir autógrafos. Examinála.
MULHER 1 É ela, menina.
MULHER 2 Olha que estruncho, minha filha.
MULHER 3 Ana, me dá um autógrafo?
MULHER 1 Vai entregar a carta, é, escrota?
45
A confusão aumenta. Ana está histérica. Zeca começa a se afastar
gritando.
ZECA Joga bosta na Berenice! joga bosta na Berenice!
Zeca vai se afastando com um sorriso da Dr. Silvana. Ana, no meio da
confusão, está histérica.
ANA Sou, sou a Berenice sim! E tem mais: vou fuder
com a vida de todo mundo na novela! ...
Cafajeste! Eu mato esse cafajeste.
SEQÜÊNCIA 14 - ESTÚDIO DE FILMAGEM - INTERIOR - DIA (OU NOITE)
Claquete de cinema com o título do filme "A VIÚVA DO SADOMASOQUISTA"
e abaixo o nome do diretor: LUIGI DI GRANATO. A câmera descobre o
ambiente: no centro do cenário uma cama enorme, antiga, objetos de
tortura espalhados por toda parte: luvas de boxe, palmatórias, soco
inglês, chicotes de vários tamanhos. Tudo muito doente e muito cafona.
Também câmera, gravador nagra, refletores, rebatedores, parafernália
de filmagem e pessoas da equipe circulando agitadas e manipulando
essas coisas. Algemada e amarrada à parede, inteiramente nua, está
Áurea Celeste, atriz do filme pornô. O maquiador do filme dá os
últimos retoques numa maquiagem exótica que faz em seu corpo. Na
cabeça ela traz um veuzinho negro que lhe cobre o rosto.
ÁUREA CELESTE (Para o diretor do filme) Porra, Luigi, vai ter
que filmar rápido porque essa porra tá
machucando meu pulso, tá legal?
LUIGI Dois minutos. Tô dando as últimas instruções
pro Tuca, falou?
Nesse instante a gente vê o Tuca, inteiramente nu, com duas azinhas
nas costas e uma auréola de arame suspensa sobre a cabeça.
Completamente ridículo. Ela conversa com o diretor com muito jeitinho
porque precisa demais da grana que vai ganhar com esse trabalho.
TUCA Luigi, só mais uma coisa: Será que não dá pra
gente mudar um pouquinho esse teste? É porque
tá meio difícil de decorar - olha só, tem "r"
demais, cara: "Roberta, retornei do além pra te
46
resgatar rapidamente, minha rainha!" Isso dá um
nó na língua!
LUIGI Pelo amor de Deus, Tuca, nem pensar. Isso vai
me dar a maior alteração. Me avisaram pra não
mudar nenhuma palavra do texto. Me dá uma
colher de chá, fala o que tá escrito aí, tá
bom?
TUCA (Concordando, desanimado) Tá bom. Vamos lá.
Assistente está medindo foco em Áurea, fotógrafo corrigindo luz, som
guia testando som etc. Luigi repassa a cena com Áurea e Tuca.
LUIGI Muito bem, minha gente. Vamos de primeira,
hein? (Fala rápido) Tuca vem lá de trás, pula a
janela (Luigi aponta a janela do cenário que é
uma janela grande e baixa), pega o chicote na
cama - esse maior (Na cama estão vários
chicotes e os outros instrumentos de tortura) -
dá o teto: "Roberta etc etc", vai até Áurea,
dá-lhe uma chicotada, vocês começam a trepar e
aí eu corto. Tá bem? (decide) Então vamos
rodar.
ASSISTENTE DE
LUIGI Silêncio no set. Atenção. (Para Tuca) Eu fico
aqui e dou o sinal pra você saltar. Quando eu
baixar o braço.
LUIGI (Para Tuca, cúmplice) Olha, não se esquece do
fundo mental. Prepara aí a maior ereção da tua
vida. Quer um tempo pra se concentrar?
ÁUREA CELESTE (Lá da parede, amarrada) Como é que é? Vai ou
não vai? Tô começando a ficar com fome, porra!
LUIGI (Para Luigi) Não, tudo bem. Pode rodar.
Luigi dá um risinho malicioso e faz sinal com o dedo de "positivo".
Tuca começa a ficar nervoso detrás do cenário e vai repetindo o texto
baixinho: "Roberta, retornei do além pra te resgatar rapidamente,
minha rainha, Roberta, retornei do além etc etc. compulsivamente.
Conserta a auréola na cabeça, olha pro assistente de Luigi que está de
mão levantada pra lhe dar o sinal.
47
LUIGI Som! Câmera! Ação!
O assistente de Luigi ao dar o sinal pra Tuca, sem querer, peida
estrondosamente. Tuca não se agüenta, dá uma gargalhada, mas assim
mesmo solta.
TUCA (Ainda rindo) "Roberta, retornei rainha
rápida ...
LUIGI Corta!
TUCA Desculpa mas é que foi engraçado demais, eu não
me agüentei, tive que rir...
LUIGI Não é isso. Se quiser rir pode rir, ninguém tá
ligando mesmo, tá todo mundo olhando pra Áurea
Celeste nua naquela parede. (Cochicha) Mas tem
que estar de pau duro, cara, senão não tem cena
...
TUCA (Olhando pra baixo, concluindo meio
envergonhado) Claro, claro, é que eu fui
rir ... aí ...
LUIGI (Dando um tapinha nas costas de Tuca, solidário
e gritando pra equipe) Take?!
Tuca vai pro seu lugar, começa a passar o texto, olhando pro próprio
pau, de mãos postas, pedindo pra que ele não falhe ... "Roberta
retornei do além pra te resgatar etc etc. Pela sua expressão, vemos
que ele não consegue a ereção. Vai ficando nervoso enquanto repete o
texto cada vez mais rápido.
LUIGI Som! Câmera! Ação!
Tuca salta triunfal da janela, pega o chicote da cama e brada:
LUIGI "Roberta! Retornei do além pra te (olha pra
baixo e, desanimado, vai baixando o tom de voz)
resgatar... rápida ... (Para Luigi) Vamos mais
uma? Dessa vez eu te prometo ...
ÁUREA CELESTE (Da Parede) Olha aqui, só mais essa. Não vou
ficar aqui de otária amarrada nessa porra dessa
parede o dia inteiro. Ô Luigi, da próxima vez
vê se chama um pau que levante, né?
48
Tuca humilhado, volta à posição. Começa a se concentrar com mais
fervor do que antes enquanto em off Luigi anuncia o Take 3. Tuca, cada
vez mais nervoso, continua repetindo o texto baixinho e rápido,
olhando pra baixo e suplicando.
LUIGI Som! Câmera! Ação!
Tuca já não salta a janela. Apenas a transpõe, cabisbaixo, pega o
chicote e o deixa pendurado na mão. Olha pra baixo, vai começar a
dizer o texto mas não termina. Cai na cama e começa a chorar. Nu e de
asinha. Luigi e o fotógrafo do filme se entreolham. Luigi balança a
cabeça pro fotógrafo como quem diz "com esse cara não vai dar..."
SEQÜÊNCIA 15 - ÔNIBUS CIRCULAR EM MOVIMENTO - DIA/NOITE
Ônibus circular em movimento, cheio. Dentro dele, Tuca, nosso herói
fracassado, sacoleja em pé, apertado entre outros passageiros.
Ressentido, ele conversa com o próprio pau:
TUCA Papelão, hein? (Ele fala olhando pra braguilha)
Me deixar assim na mão ... francamente ...
Parece gato de armazém - dormindo em cima do
saco! Tá legal!
Tuca vai falando cada vez mais alto, irritado, as pessoas ao lado
começam a olhar pra ele meio cabreiras.
Na hora em que eu mais preciso de você, me
fazer uma falseta dessas!
Uma senhora se compadece.
SENHORA Meu filho, você está com algum problema? Tá se
sentindo bem?
Tuca ignora tudo em volta. Continua em sua mágoa.
Quem te viu quem te vê. Nem parece que conheceu as coxas deslumbrantes
de Inês. Depois de ter sido aplaudido de pé naquela sessão de sexo
grupal na casa do Cesinha! Logo hoje que eu precisava descolar essa
grana você me deixa na mão. E agora, como é que vamos sobreviver? Quem
não come não brinca, otário! (Dá um berro dentro do ônibus) Não quer
trabalhar, não, é, vagabundo?
49
SEQÜÊNCIA 16 - APTO DE IVAN - INTERIOR - NOITE
Apartamento às escuras (conta de luz atrasada). Lá dentro estão Ivan e
Zeca cercados por velas - muitas - tentando das iluminação de luz
elétrica mas sem sucesso: parece mais coisa de filme de terror. Ivan,
na sala, fala com alguém no telefone. Ivan anda pela casa inteira
quando fala ao telefone. Aparece e desaparece dos cenários, sempre
pontificando.
IVAN Varela ... Vamos usar um dos nossos recursos.
Vamos cansar eles todos pedindo questão de
ordem. Às três da manhã vai estar todo mundo
cansado e a assembléia vai esvaziar. Quando
esvaziar a gente coloca em votação, percebe?
(Ele o ouve Varela do outro lado da linha)
Sei ... Sei Mas isso não resiste à crítica. O
indivíduo não pode modificar a marcha objetiva
da história.
ZECA (Cantarolando lá da cozinha) "Deixa chover, ô ô
ô deixa a chuva molhar ..."
IVAN (Irritadíssimo) (Tapando um instante o
telefone) Porra, Zeca, quer parar de cantar
essa merda dessa música que eu não agüento
mais?
Zeca está na cozinha com uma única vela na mão, uma panela na outra,
abrindo vários armários, procurando alguma coisa.
ZECA Pois é, rapaz, acordei com essa música hoje,
não consigo parar de cantar. Ei, cadê aquele
pacote de sopa pronta que eu comprei ontem?
IVAN Tá nesse armário debaixo da pia, porra!
Zeca, na cozinha, acaba de achar o envelope da sopa, abre-o joga o
conteúdo na panela, meio atrapalhado, sem saber onde põe a vela. Joga
um pouco de parafina no mármore, queima a mão, abre a torneira, põe o
dedo embaixo pra aliviar, joga fora o pacote da sopa, põe a panela no
fogo - já aceso - e vai botar água quando se dá conta que não sabe
como fazer. Então vai no lixo, pega novamente o envelope e começa a
ler as instruções enquanto cantarola.
50
ZECA "Foi Deus quem fez o amor, o brilho das
estrelas, fez também um seresteiro para
conversar com elas..."
IVAN (Falando com Varela) Tá legal, marca com o
pessoal da comissão amanhã a gente chega uma
hora antes pra acertar os detalhes. (Para Zeca)
Se você não parar de cantar eu vou chamar a
polícia!
ZECA E porque é que você em vez de me encher o saco
não vem aqui me ajudar a fazer o jantar? Essa
tua cozinha é uma zona! Onde é que tem colher?
IVAN (No telefone) Espera um instante, Varela. (Vai
até a cozinha) Por isso é que os casamentos não
dão certo - esse negócio de morar com outra
pessoa é um inferno. "O inferno são os outros"!
(Chegando na porta da cozinha) Já procurou na
geladeira?
ZECA (Jogando água na panela sem desgrudar das
instruções do pacotinho) Não, na geladeira não.
Ivan abre a geladeira e lá dentro vemos um único ovo, uma lata de
cerveja e uma desolação total. Ele abre a gaveta de baixo e pega duas
colheres, fósforos, um martelo, meia cebola, e um pé de sandália
havaiana. Põe tudo em cima da pia.
IVAN (Saindo e voltando pra sala) Vê aí o que você
pode aproveitar. Preguiça de procurar é
foda ... (Volta de novo até a sala e pega o
telefone) Alô ... desculpe, Varela, mas é que
eu tô fazendo o jantar ... Bom, mas seguindo
esse raciocínio qualquer criança vai perceber
que nenhuma classe na história alcançou o poder
sem destacar seus chefes políticos avançados
capazes de organizar o movimento e dirigilo ... (Despede-se de Varela e desliga o
telefone)
A campainha toca. Lá da cozinha, Zeca prova a sopa. A campainha toca
ininterruptamente, Zeca vem correndo atender com a colher na mão.
Abre, já com raiva, dá de cara com o índio. Leva um susto - tá tudo
meio escuro - e logo desculpa-se pois reconhece o índio amigo de Nina.
51
ÍNDIO (Atrapalhado e lembrando-se) Puxa, é mesmo,
sabe que eu tinha me esquecido? Entra, faz
favor ... fica à vontade ... Senta aí (aponta
um sofá horroroso, único móvel da sala) Eu tô
cabando de fazer uma sopa lá dentro, venho já.
Enquanto isso Ivan, na sala faz pra Zeca uma cara de espanto com a
presença do índio como quem pergunta "o que quer dizer aquilo". O
índio por sua vez senta-se no chão e fica lá, mudo, imóvel.
ZECA (Vindo da cozinha, esbarrando com Ivan, dirigias se índio) Quer um cafezinho?
ÍNDIO ...
ZECA (Querendo ser simpático) Uma cachacinha...?
ÍNDIO ...
ZECA Um guaraná em pó! (Pega uma revista no chão) Ou
quer dar uma olhadinha nessa Playboy? (mostra
uma gatona nua)
Índio sentado no chão e altivo não quer nada. Tá com cara de poucos
amigos.
ÍNDIO Nina... sete horas ... aqui.
Zeca vai olhar no relógio quando bate a campainha. Zeca vai abrir
entra Nina com suas roupas loucas, adereços indígenas, cabelão como a
asa da graúna, arfando.
NINA Ô meu amor, tô atrasada, né? É que eu tinha um
apronto marcado com uma figura lá na Cinelândia
mas o cara acabou não pintando. (Olhando em
volta) Ué, que escuridão é essa?
ZECA É ... cortaram a luz, mas eu já paguei a conta,
amanhã vão religar. (Baixinho) Foi bom você
chegar, eu já não sabia o que fazer pra
enturmar aqui com o nosso amigo...
O índio se levanta, ele e Nina se abraçam, ela também senta no chão.
NINA Zeca, você tem que topar. Já falei com o Tuca e
o Salvador, aliás eles devem estar pintando por
52
aí, achei melhor a gente combinar a viagem todo
mundo junto.
ZECA (Contrariado) Porra, Nina, você se precipitou,
meu amor. Eu ainda não sei se vou poder ir ...
aliás ainda não tô entendendo muito bem o que é
que você quer fazer. Vem cá (senta-se também no
chão) Me explica isso direitinho.
NINA Mas o que é mais que você quer que eu te
explique?
NINA Zeca, a gente não tá querendo fazer um
espetáculo tradicional, por isso é que a gente
te chamou. É arte viva, improvisação em cima de
um fato concreto. A gente tá querendo
aproveitar a tua experiência como exjornalista. Os índios tupiripás (aponta pro
índio Donato): essa tribo tá sendo aniquilada
por doenças, pela birita e principalmente pelo
roubo das terras. Vamos transformar esse drama
num espetáculo ou numa peça ou num show. Isso
também pode ficar por tua conta: a forma que a
coisa vai ter.
ZECA Mas o espetáculo vai ser lá na tribo deles?
NINA E porque não? Só pode ser lá. Se fosse aqui
seria um espetáculo tradicional, feito num
teatro da Zona Sul, todo mundo sentado na
cadeira, fumando nos intervalos, depois um
barzinho e no dia seguinte ninguém mais ia
lembrar dos tupiripás. Lá, não. Como nunca isso
foi feito antes, fatalmente terá repercussão.
ZECA Peraí que eu vou ver a sopa lá dentro que ela
já deve estar secando (Levanta-se e vai indo
até a cozinha) Mas vai falando que eu tô
ouvindo.
NINA (Indo atrás dele) Acontece que o povo dele tá
dividido. Já foi tanto filho da puta lá fazer a
cabeça deles que tem muitos que já são a favor
da integração. Noutras palavras - tem uns que
já pensam em aderir a uma economia baseada no
lucro, a rejeitar seus próprios mitos, enfim,
53
exterminar sua própria cultura ... (Enquanto
Nina fala, Zeca vai lhe passando pratos com
sopa e ele vai levando um pro índio Donato,
volta, pega outro, dá pra Ivan e fica com
outro. Vai tomando a sopa e vai falando. Zeca
também está comendo e ouvindo com atenção)
A campainha toca e Zeca vai atender. Entram Tuca e Valfrido Salvador.
Todos se cumprimentam carinhosamente.
TUCA Sopinha jóia, hein?
VALFRIDO Pode crer ...
ZECA Pega um prato pra vocês lá na cozinha.
IVAN (Cochichando com Zeca) Comunidade aqui, não.
Pelo amor de Deus, Zeca. O sonho acabou.
Zeca ignora a gracinha de Ivan. Tuca e Valfrido vêm da cozinha pegar
uma vela porque a de lá se apagou e eles não tão achando a sopa.
ZECA É, eu não tenho nada a perder, mesmo. Topo.
Nina beija Zeca com alegria.
Você, Nina, vê se descola uma câmera de VT pra gente gravar a viagem -
depois a gente usa isso no espetáculo. Tuca e Valfrido vão levantar um
material de pesquisa sobre a questão das terras indígenas e eu vou
conversar com o Donato e a partir das informações que ele for me dando
eu vou escolhendo as situações que a gente pode usar e desenvolver...
Tuca e Salvador chegam da cozinha e escutam Zeca falar, com atenção.
NINA (Eufórica) Seja bem-vindo ao reino da criação
independente!
ZECA É, acho que a única virtude que eu ainda
aprecio é a de ser útil ...
SALVADOR Mas que solene, meu Deus! Deviam tocar um
clarim nesse momento!
TUCA O mínimo que pode acontecer é a gente fazer um
pouco de turismo na Amazônia. (Mudando de tom)
Sério, a idéia da Nina é legal! A gente fica
aqui nesse balneário, nessa pasmaceira ... Eu
54
tô cheio dessa coisa de ficar flanando. Eu
quero ser ator, o que "cria, interpreta e
representa uma ação dramática baseando-se em
textos, estímulos visuais, sonoros ou outros
previamente concebidos por um autor ou criados
através de improvisações individuais ou
coletivas. Utiliza-se de recursos vocais,
corporais e emocionais, apreendidos ou
intuídos, com o objetivo de transmitir ao
espectador o conjunto de idéias e ações
dramáticas propostas; pode utilizar-se de
recursos técnicos para manipular bonecos, e
congêneres; pode interpretar sobre a imagem de
outrem. Ensaia buscando aliar sua criatividade
à do diretor" (E aponta para Zeca)
Todos riem da brincadeira de Tuca.
ZECA Grande!
O índio sorri.
IVAN Vocês conhecem a piada do Zorro e do Tonto?
Conhecem? O Zorro e o Tonto foram salvar uma
tribo de índios de um ataque do exército. Mas,
ao chegarem lá, os índios pensaram que o Zorro
também fosse do exército e começaram a
perseguir ele e o Tonto. Aí, diz o Zorro:
"Tonto, acho que nós estamos perdidos" e o
Tonto responde ...
TODOS (Em côro) "Nós? Nós, quem, cara pálida?
E todos riem da cara de Ivan que fica sem graça.
SEQÜÊNCIA 17 - PRAIA - EXT/DIA
41 graus nas areias de Ipanema. Na praia, em frente a Montenegro, é o
lugar onde nossos heróis fazem ponto. Planos da praia com bicicletas
estacionadas, rede de vôlei com gente jogando, frescobol, e um milhão
e meio de pessoas por metro quadrado. É praia do desbunde, da
sofisticação, dos malucos e dos artistas. Réplicas diurna do Bar
Esperança. Sol a pino. Dia deslumbrante de verão. Todos os diálogos
desta seqüência em off em cima de imagens loucas e engraçadas. Vozerio
de povo e barulho de trânsito completarão a seqüência.
55
VOZ DE TUCA Deixa de ser babaca, Valfrido! Se o coração,
que é feito de artérias e veias, pode falhar,
porque que o pênis que também é feito de
artérias e veias, não pode?
VOZ DE
VALFRIDO Olha aí, turma ... o pênis do Tuca teve um
infarto!! (gargalhadas)
VOZ DE
ALGUÉM Tem soda?
VOZ Não, mas aceito um tapa ...
VOZ Olha os homis!!
VOZ Aquele cara é cana.
VOZ Azar o dele. Quero ver se tem cadeia pra
guardar essa praia toda!
VOZ DO
PROFETA Cumequié, gente boa?
VOZ DE TUCA Vou dar uma caída..
VOZ DO
PROFETA Se você gosta de cocô ...
VOZ DE
SALVADOR Porra, Profeta, dá um tempo - deixa o Tuca
mergulhar ou você acha que com esse calor
alguém tá ligando pra isso? Eu tô cagando ...
VOZ DO
PROFETA Pois é ... a idéia é essa ... conte até cinco:
um, dois, três, quatro, cinco - nesta exato
momento cinqüenta e quatro mil e novecentos
pessoas acabaram de cagar!
VOZ DE
PASSARINHO Pegando uma corzinha, é, é babacas?
VOZ DE ANA (Coquete) Como é que é, gente, posso chegar?
56
VOZ DE
PASSARINHO Claro, chegue-se a nós, ô Bete Davis dos pobres
...
VOZ DE ANA Depende ...
VOZ DE
PASSARINHO De que, estrela da minha vida?
VOZ DE ANA Do veneninho que você trouxe na tua linguinha,
amor.
VOZ DE MULHER Ei, olha ali a moça da novela. Aquela que vai
entregar a carta.
VOZ DE
CRIANÇA Não é ela não, mãe ...
VOZ DE MULHER É sim, quer ver?
VOZ DE
PASSARINHO Os comanches se aproximam ... tchan, tchan,
tchan, tchan. Bete Davis, você está cercada.
LOCUTOR
RÁDIO CIDADE Como é que é rapaziada, agora com vocês a
melô .....
VOZ DE MULHER Berenice, é você ? Sabe que você faz tão bem o
papel de má que parece que é assim na vida
real?
VOZ DE ANA Ah, obrigada ...
VOZ DE MULHER Você me dá um autógrafo para o meu filho?
VOZ DE ANA (Já Bodeada) Se a senhora tiver papel e
caneta ...
VOZ DE MULHER Como? Você não tem papel e caneta pra dar
autógrafo?
VOZ DE ANA Não, a senhora não tem uma xícara de açúcar pra
adoçar meu limãozinho, que está meio amargo?
57
Risos, som da Rádio Cidade invadindo o papo, começa a tocar música
tipo "Meu bem Meu Mal"
VOZ DE TUCA Oi, Nina, tudo legal?
VOZ DE NINA Legal ... (pausa, sobe música) Ainda essa
música! Só que de tanto a gente ouvir na novela
ficou insuportável ... televisão é foda ...
58
VOZ DE
PROFETA Ô Russo, manda uma caipirinha dupla! Vem cá,
como é que tá lá na Polônia? Ha, ha, ha tá
russo, hein Russo?
VOZ DE
ARNALDO Como é que é, Profeta? Acha que tá agradando é?
... (pausa) Mmmm, não acredito, é mesmo a deusa
Moreno, em pessoa?
VOZ DE ANA (Rindo) Oi, tudo bem?
VOZ DE TUCA Ana, Arnaldo. Arnaldo, Ana ...
VOZ DE
ARNALDO De saída?
VOZ DE ANA É, tenho que me mandar ... gravação, aquelas
coisas ...
VOZ DE
ARNALDO Coincidência, eu também ... Cheguei e tenho que
sair!
VOZ DE ANA É? ... por que?
VOZ DE
ARNALDO Pra me preparar pra jantar com você hoje à
noite ...
Risos de Ana. Os dois começam a surgir do meio da multidão andando em
direção à calçada. Ana, retraída, ri muito e disfarça a timidez.
Arnaldo gesticula, faz charme, ataca firme.
SEQÜÊNCIA 18 - APARTAMENTO DE ANA. INT
Abre em close de Yuri, que fala cheio de raiva.
YURI Eu odeio você, odeio! Você não presta!
Corta para Ana que reage espantada. Yuri continua em off.
YURI (OFF) Primeiro você destroi papai, agora quer
destruir toda a nossa família?! Você é uma
59
víbora da pior espécie, Berenice! Eu te odeio e
vou te odiar até o fim dos meus dias!
Corta para Babita que lê as rubricas de um script.
BABITA (Lendo) Berenice ri, cinicamente ... (fazendo a
risada) Ha Ha Ha ... a música sobe, aumentando
o clima de tensão ... close da mão de Berenice
esmagando a rosa vermelha que tem nas mãos.
Close da mão de Babita esmagando um sanduíche que está comendo,
deixando cair ketchup no chão.
ANA A Berenice sou eu, Babita, olha a sujeita que
você tá fazendo! Não precisam interpretar por
favor, tá?
BABITA (Não dá a menor bola, continua lendo) Antonio
Henrique anda de um lado para o outro, tentando
segurar a raiva.
Yuri anda de um lado para outro, fazendo tudo o que Babita vai lendo.
BABITA Berenice continua com seu olhar cínico ... vai
mãe, é você: "Tá nervoso, assim não dá!
ANA "Tá nervoso, Antonio Henrique?"
YURI Você ainda tem coragem de perguntar?
BABITA (Lendo) Antonio Henrique sente o sangue subir à
cabeça, caminha lentamente até Berenice e
cospe-lhe na cara.
Yuri caminha na direção da mãe, lentamente, armazenando saliva.
ANA (De dedo em riste) Se me cuspir na cara fica
três meses sem mesada ... não se atreva nem a
pensar na possibilidade, Yuri.
YURI (Depois de engolir a saliva) Ah, mãe! Você acha
que eu ....?
ANA Eu te conheço, ó ... (bate na barriga) desde
que você tava aqui, meu anjo ... você é um
artista.
60
BABITA (Bem debochada) Filho de peixe ...
YURI Deixa de papo, lê aí, Babita.
BABITA (Procurando no texto) Cadê ... Ah, táqui ...
Cospe na cara dela: Berenice dá outra risada
cínica ... (Faz a risada) Ha Ha Ha! (Mudando de
tom, suspense) De repente eles escutam passos
do outro lado da porta (Faz "sonoplastia" dos
passos) corta para a porta que é aberta
subitamente por Raul.
Silêncio. Ana sabe que a sua personagem fala nesse momento, mas não
consegue lembrar o texto.
ANA (AFLITA) Ai, meu Deus, como é que é?
BABITA (Lendo) Idiota! Você sempre chega na hora
errada!
ANA Idiota! Você sempre chega na hora errada!
A campainha toca. Ana vai atender a porta.
BABITA Então vamo lá ... eles escutam passos do outro
lado da porta (Repete "sonoplastia") corta para
a porta que é aberta subitamente por Raul.
ANA (Abrindo a porta, mas ligada no texto) Idiota!
Você sempre chega na hora errada!
Do outro lado da porta está Arnaldo, o paquera da seqüência anterior
(e acho que também de alguma seqüência do bar, anterior), que fica com
cara de tacho com aquelas duas garrafas debaixo dos braços.
ARNALDO O que que há? Não sou bem vindo?
ANA (Sem jeito) Ô ... não é nada disso, é que estou
ensaiando ... gravação amanhã, meus filhos
estão me ajudando, e essa é uma frase do texto,
não é nada com você, entra.
Reação de Yuri e Babita que antipatizam com Arnaldo de cara.
61
ANA (Envergonhada com seus trajes caseiros) Tô tão
desarrumada, não tava esperando ninguém...
ARNALDO Você não disse pra eu aparecer qualquer hora?
Fiquei com vontade de te ver, aí eu vim. Pra
mim qualquer hora é hora (olhando-a nos olhos,
sedutor) quando vale a pena, é claro ...
Ana não sabe direito como agir, fica confusa.
Já Arnaldo não sente o menor constrangimento, tá em casa.
ARNALDO Trouxe um vinhozinho branco pra gente tomar,
mas precisa dar um gelada, tá meio quente.
Ana pega as garrafas da mão dele e saca a cara fechada das crianças.
ANA (Imediatamente culpada) Eu não te apresentei
meus filhos ... Yuri .... Babita .... esse é o
Arnaldo, um amigo meu ...
Arnaldo passa a mão na cabeça de Yuri que não gosta dessas
intimidades.
YURI Se me chamar de Yuri Gagarin xingo tua mãe e
tua vó, falei?
ARNALDO (Que não se intimida) Falou ... (tira chocolate
do bolso e oferece à Babita) trouxe pra
você ...
BABITA (Virando as costas) Não, obrigado, chocolate me
dá uma caganeira..!
Reação de Ana, passada.
YURI E papai disse que esculhamba os dentes ...
ARNALDO (Segurando a barra) Põe na geladeira, Ana, pelo
menos meia hora ...
ANA Lógico ... claro ...
Ana some no interior da cozinha. Corte Descontínuo. Passagem de Tempo.
62
Abre no detalhe da rolha saindo do gargalo. Arnaldo manuseia o sacarolha com maestria. Limpa a boca da garrafa com um guardanapo e serve
dois copos, sozinho na sala.
Chega Ana, que deu uma ajeitada na aparência.
ARNALDO (Entregando copo à ela) Batom demorado!
ANA A verdade feminina é um fato ... (Brindando)
ARNALDO (Levantando o copo e olhando-a de alto a baixo)
É .. é um fato ... por isso inclusive, que
mulher é tão fascinante ... (Olhando-a nos
olhos) fascinante...! À nossa!
Bebem em silêncio. Arnaldo olha-a com intensidade, interesse, carinho
e tesão. Ana sente e fica transtornada, com uma timidez de Annie Hall.
Clima.
ARNALDO (Reabastecendo o copo dele) Tudo bem?
ANA (Sentindo-se corar) Tudo ... claro ... é
que ... sei lá, eu ...
ARNALDO Você acha que eu fui precipitado em vir assim?
ANA Não, não ... eu
ARNALDO (Cortando) Mas eu sou precipitado mesmo, é uma
coisa minha que aceito com o maior orgulho, até
como dizia um grande filósofo das areias de
Copacabana, quem não se desloca não recebe e
quem pede tem preferência! Eu sou assim: vou à
luta! (Olhando-a nos olhos) claro que quando
vale a pena ...
ANA Um sujeito objetivo, né?
ARNALDO Totalmente! Gostei de você, tô interessado, pra
que fazer número? Mas você pode me mandar
embora, numa boa, eu vou. Inconveniente é a
última coisa que eu desejo ser para você.
ANA Não é nada disso, Arnaldo, não quero que você
vá embora ... pelo contrário ... realmente foi
uma surpresa, eu não podia esperar, mas não
63
posso negar que me sinto até lisonjeada, faz
bem pro meu ego, meu amor-própio ...
ARNALDO Há quanto tempo você tá separada?
ANA Uns dois meses, dois meses e meio ... e se quer
saber, você é o primeiro homem que vem na minha
casa.
ARNALDO (Espantado) Você não saiu com ninguém em dois
meses e meio??! Abstinência ou autopunição?
ANA Não, até que eu saí, dei uma transada, aquelas
coisas, fim de noite e tal, mas realmente não é
isso que é importante agora, minha cabeça tá
tão em outras coisas...
ARNALDO Mas a cabeça não é desligada do corpo ...
ANA É ....claro ... (Não quer dar bandeira)
CORTA PARA:
Ponto de Vista de Yuri e Babita que espreitam o casal pela fresta de
uma porta da cozinha, fecham a porta com ar de conspiradores.
YURI Não tô gostando do papo desse careta.
BABITA Não vou chamar ele de pai nem que me torturem!
Nem morta!
YURI Cê acha que ela vai casar com um panaca desses?
BABITA Sei lá, a gente precisa fazer alguma coisa.
Yuri pega e gira a maçaneta cortando para:
Arnaldo faz um suave carinho com as costas da mão no rosto de Ana, que
vai relaxando cada vez mais.
Arnaldo encosta seus lábios nos dela, meigo e furtivo. Ana fechando os
olhos, languida.
Arnaldo põe a mão na coxa de Ana, de leve. (Ana deve estar de saia).
Lentamente vai subindo com a mão por dentro da saia de Ana, que sente
um prêmito de desejo percorrer-lhe todo o corpo.
Beijam-se finalmente. Daqueles beijos de cinema que ocupam toda a
tela;
64
CORTA PARA:
Reação indignada das crianças que espreitam novamente pela fresta da
porta da cozinha.
YURI Isso tá me cheirando à sexo...
BABITA Sexo?
YURI Vai dizer que não sabe o que é sexo?
BABITA (Não tenho muita certeza) Claro que eu sei!
CORTA PARA:
Arnaldo rodeia os lábios entreabertos de Ana com a ponta de sua
língua;
ANA Vamos lá pra dentro?
ARNALDO Depois desse beijo (E beija-a).
Levantam-se. Câmera corrige até a porta da cozinha que se fecha
silenciosamente.
CORTA PARA dentro da cozinha.
BABITA É aquele negócio de espermatozól, óvulos?
YURI Não é esprmatozól, sua burra, é espermatozóide!
BABITA Eu não quero outro irmão, não.
YURI Isso não tem grilo, ela toma pílula.
BABITA Pílula de que?
YURI Pílula de não fazer irmão (impaciente), cê faz
cada pergunta!
CORTA PARA:
No quarto de Ana, Arnaldo agarra-a mais uma vez. Aperta-a com força em
seus braços, ela se sente bem. Batem na porta. Ana olha para a porta
sem saco.
65
ANA Que é?
YURI (OFF) Manhê, tô com fome.
ANA (Tentando segurar) Yuri, meu amor, você sabe
onde fica a cozinha?
YURI (OFF) Que cozinha?
BABITA (OFF) Mãezinha tô com uma dor de barriga! Que
que eu faço?
YURI (OFF) Faz cocô, ora!
Ana não agüenta, abre a porta e dá com as crianças que estão com a
cara mais sonsa do mundo. Ana sai do quarto, fechando a porta na cara
de Babita que já estava entrando no quarto. Arnaldo senta na cama,
tirando os sapatos com uma expressão ligeiramente cansada, antevendo a
dificuldade da transação.
CORTA PARA: Quarto das crianças. Ana fala séria. Babita e Yuri
fingindo que não estão entendendo.
ANA Nós já conversamos sobre isso, sobre a
possibilidade disso algum dia acontecer. É
normal, eu sou uma mulher separada, e não tenho
a mínima vocação para a solidão. (Encerrando) E
se vocês quiserem conversar mais sobre o
assunto, ótimo, eu vou adorar, mas amanhã! E
não adianta nem tentarem que vocês não vão
conseguir me tiranizar! Fui clara?
Babita dá de ombros e Yuri assobia olhando pro teto.
Ana vai para o seu quarto. Arnaldo chama-a para a cama.
ARNALDO (Carinhoso) Tudo bem?
ANA Sob controle ... aparentemente.
Recomeçam o clima do romance, reacendem o tesão, Ana se desvencilha da
blusa. Pelas paredes ouvimos Yuri e Babita lendo o texto da novela.
YURI (OFF) Berenice dá outra risada cínica. A porta
é aberta subitamente por Raul.
66
Arnaldo, que tenta não ouvir, desabotoa o sutiã de Ana.
BABITA (OFF) Idiota! Você sempre chega na hora errada!
Reação de Ana. Corta rápido para:
SEQÜÊNCIA 19 - BAR ESPERANÇA (VERNISSAGE) - INTERIOR - NOITE
É a noite da já anunciada vernissage de Salvador, o arauto da "retroarte". Bar Esperança em festa. Música alta, pessoas elegantemente
vestidas contrastando com outras de jeans, Prepúcio e outros garçons
passando por entre os presentes com bandejas de bebidas e canapés,
pessoas que não se viam há muito tempo se cumprimentam efusivamente e
falsamente - enfim, tudo o que caracteriza esse tipo de encontro
artístico-social. Todo o beautiful people presente, ao lado de
críticos de arte, loucos, desbundados, artistas-para-sempre-anônimos,
etc. Nossos personagens principais vão chegando aos poucos.
Embora seja uma vernissage não há nas paredes do bar Esperança. Apenas
setas brancas penduradas como quadros, indicando uma direção.
Excitada, uma granfina comenta com outra:
GRANFINA 1 Setas! Que bom gosto! Isso é pura arte Pop.
Você conhece as setas do Andy Wharhol no Museu
de Nova York?
Mas antes que a outra responda, Passarinho, que tudo ouvia, se
intromete:
PASSARINHO Arte pop é catzo, ô babaca, essas setas tão só
indicando a direção da exposição, idiota!
Reação das granfinas sem graça que começam a andar na direção das
setas.
CORTA PARA Salvador, cercado de pessoas à sua volta, todos falando
alto e de copo na mão, com ares inteligentes. Salvador está vestido
com um terno branco, colete branco, camisa branca, sapato branco. Um
cabeludo maricas aproxima-se dele:
CABELUDO (Abraçando-o) Genial! Genial, Salvador. E você
está super chic de branco.
SALVADOR É que eu sou uma extensão dos meus quadros.
67
O cabeludo maricas dá um abraço sexy de aprovação na cintura de
Salvador.
CORTA PARA uma panorâmica dos quadros de Salvador e só agora vemos que
a exposição acontece no mictório do bar porque os quadros estão
pendurados nos azulejos da parede e dentro de cada compartimento,
acima da privada.
Os quadros são telas em branco, de tamanho variado, com o preço
embaixo. Os menores custam 50.000,00 e os maiores 200.000,00. Em
alguns está escrito ao lado vendido.
As pessoas andam pra lá e pra cá fazendo comentários.
Entra no mictório uma velhinha de aspecto bizarro, lembrando a Dona
Benta do Sítio do Pica-Pau Amarelo, só que com um ar meio gaiato.
CORTA PARA Salvador, que no meio da roda em que está comenta:
SALVADOR Engraçado, parece que eu conheço essa senhora
de algum lugar, mas não é possível. Eu devo
estar louco ...
A velhinha vai olhando os quadros em branco atentamente, até que pára
ao lado de uma gatona com ares existencialistas que está há horas
olhando fixamente o maior deles. A velhinha pergunta:
VELHINHA Gosta?
GATONA (Laconicamente) Adoro.
VELHINHA É? ... Por que, hein?
GATONA Porque é uma discussão sobre o vazio, sobre o
limbo, numa região onde não existe dor nem
alegria, apenas a contemplação e o sentimento
Zen de integração com um todo. É ao mesmo tempo
primitivo e atômico, nascimento e morte,
momento intermediário, susto e perplexidade ...
A velhinha tira um lenço da bolsa, enxuga a testa e afasta-se
imediatamente e rapidamente da gatona estratosférica.
CORTA PARA Salvador que, depois de observar de novo a velhinha,
reconhece-a e ai até ela correndo.
68
SALVADOR (Chegando nela e falando baixo pra disfarçar)
Cabelinho, que idéia é essa? Por que é que você
tá com essa roupa maluca?
CABELINHO (No mesmo tom) Foi o único jeito de vir à tua
festa. Cotinha hoje tá de ovo virado. Me
trancou em casa e eu tive que subornar a
empregada pra poder sair. É claro que ela vem
aqui me procurar mas duvido que me
reconheça ...
CORTA PARA Zeca e Nina que estão conversando num canto.
ZECA O Salvador é um cara-de-pau, mesmo - inventar
essa exposição!
NINA Por que?
ZECA Pelo amor de Deus, Nina, você não está levando
isso a sério. Isso tudo é só pra ele morrer de
rir depois.
NINA Não sei, acho que na verdade ele quer dizer
alguma coisa com isso ...
ZECA Não! Até você?!!
CORTA PARA dois caras também cochichando num canto:
CARA I Vai você primeiro, então ...
CARA II Rapaz, tô te dizendo, não tem nada, vamo lá que
você vai ver ...
CARA I Sei lá se aquilo é uma escultura? Pode pegar
mal...
CARA II Escultura o cacete, isso aqui é um banheiro, eu
tô apertado e aquilo é um mijador de metal - e
caguei pro mundo, quer ver só?
Cara II vai até o mijador, desvencilhando-se do Cara "I" que tenta
impedi-lo. A gente vê ele de costas fazendo xixi, olhando em volta,
vendo que não provocou reação nenhuma. Olha então para o Cara "I" faz
sinal de "positivo" pra ele o Cara I vem correndo seguir seu exemplo.
Ao vê-los, uma maluca comenta com seu namorado (Os dois com pinta de
quem está viajando de ácido):
69
MALUCA Que barato! Um happening! Misturar os sucos
vitais com a obra de arte! Esse Salvador é um
gênio ...
NAMORADO (Dracão) Pode crer ...
CORTA PARA rodinha em torno de Salvador onde ele está explicando:
SALVADOR (Pedante) A idéia é lembrar às pessoas que
existe um marco zero na arte. É lembrar o
começo, o nada, a revolução do zero, ou seja, o
momento de onde tudo parte. Acho que isso é uma
obsessão em qualquer artista plástico...
TIETE QUE
ESTÁ EM
VOLTA Extraordinário, Salvador, se eu tivesse
dinheiro levaria todos. Infelizmente só poderei
ficar com um dos menores.
Salvador sorri indulgente.
Mas nesse instante, um senhor que estava de costas para a rodinha, não
se contém, vira e fala, nervoso. Ele usa um óculos fundo de garrafa e
tem tiques.
SENHOR Escuta aqui, ô Sr. Salvador. Fique sabendo que
pra mim o senhor não é nem Salvador Daqui, nem
Dali nem de parte alguma. O senhor é um engodo,
uma fraude e eu lamento ter que ouvir tanta
asneira dessa gente burra que, coitados,
apreciam isso que o senhor ousa chamar de arte!
(Apopléctica) Isso é um insulto à sensibilidade
de um ser humano! Isso é um deboche! E foi
muito boa idéia expor essa coisa num banheiro
porque realmente é - com perdão às senhoras
presentes - uma merda!
SALVADOR E quem é o senhor?
SENHOR Sou crítico de arte do Planeta Diário e ...
Cotinha irrompe pelo mictório adentro e Ana junto com Arnaldo vem
atrás tentando segurá-la. Ela está transtornada, com cara de quem vai
fazer um escândalo.
70
ANA Cotinha, por favor, calma ...
COTINHA (Aos gritos empurrando todo mundo, como quem
procura) Cadê o Cabelinho? CABELINHO!!! Eu sei
que tu tá aqui, desgraçado, aparece,
infeliz!!!!
Ana tenta acalmá-la inutilmente. A essa altura todos pararam e Cotinha
dá seu vexame em solo.
COTINHA Ele está escondido em algum lugar, esse
miserável! Mas deixa estar que hoje eu vou me
vingar.
Cabelinho vestido de velhinha, num canto, sua frio. Prepúcio ao seu
lado, tentando escondê-lo.
COTINHA (Dá um grito) Aparece, CÃO!!! (Espera um tempo.
Silêncio) Ah, é? Tá bem, foi você que pediu.
(Cotinha começa a desabotoar a blusa que está
vestindo, Ana interfere, ela continua) Não Ana,
eu disse a ele que na próxima vez que ele
viesse pra cá sem me avisar eu ia fazer um
strip-tease. Vou fazer e acabou-se ( E arranca
a blusa)
A situação vai se descontraindo. As pessoas começam a aplaudir Cotinha
que agradece os aplausos e continua se despindo. Depois da blusa, a
saia, depois o sutiã - alguém começa a cantar o "Homem do Brasil de
Ouro" e Cotinha começa a agir como uma verdadeira "stripper". O show
começa a esquentar e depois de alguns segundos o grande sucesso da
noite é Cotinha.
Cabelinho, vestido de velha, sem poder fazer nada, sua frio e cutuca
Prepúcio entredentes:
CABELINHO Faz alguma coisa, cretino! Ela vai me
arruinar!!!
Prepúcio que está gostando do show e aplaudindo também, replica:
PREPÚCIO Deixa a morena dançar, Cabelo, tu também não é
nenhuma flor que se cheire ... (E continua
aplaudindo Cotinha).
CABELINHO Judas Escariotes, você me paga, filho da puta!
71
Salvador aproxima-se disfarçadamente de Cabelinho e dá-lhe uma bronca
disfarçando.
SALVADOR Olha aqui, Cabelo, isso não vale! A vernissage
é minha e quem dá o show é tua mulher?! Essa
não! Dá um jeito dela parar senão ninguém mais
compra quadro! ...
CABELINHO (Arrasado, enterrando a cabeça nas mãos) Não
posso, não posso, se ela me vir assim me dá um
tiro (e solução)
O crítico do Planeta Diário está agora conversando com um admirador de
Salvador, explicando-lhe:
SENHOR Isto sim, é a verdadeira arte ... (Admirando o
strip de Cotinha) É a Body Art (Fala aos
gritos e puxa aplausos)
Alguém de porre grita lá de trás:
ALGUÉM Eu compro! Eu compro! Quanto custa esse quadro?
Frenessi geral. Cotinha, vendo o quanto está agradando, agora está
mais glamurosa ainda.
CORTA PARA Ana que conversa com Arnaldo, num canto.
ANA Essa é demais! (Rindo) Arnaldo, a Cotinha -
você pode não acreditar - mas é a mulher mais
bem comportada e submissa que eu conheci na
minha vida ...
ARNALDO (Rindo) É maravilhosa, ela! Genial! Nunca vi
vingança mais engraçada na minha vida!
ANA Vamos sair daqui um pouco, meu amor? Tô
sufocando no meio dessa multidão.
Ana puxa Arnaldo, saem do mictório do bar e vão para o salão levando
seus copos. O salão está quase vazio, poucas pessoas nas mesas, e,
numa delas, Zeca e Nina estão sentados. Ana vê de longe Nina se
despedir de Zeca deixando-o sozinho na mesa. Ana desvia o olhar e se
fixa em Arnaldo.
72
ANA (Brincando) E faça o favor de se comportar
porque senão eu vou seguir o exemplo da Cotinha!
Esse é o quinto chope que você toma!
ARNALDO Se você fizer um strip tease público eu vou ser
o primeiro a aplaudir! (Faz um carinho no rosto
de Ana)
ANA Sabe, você é uma experiência nova pra mim...
Nunca transei com ninguém assim ... tão ...
tão ... liberal. Também, tantos anos com uma
pessoa só ... E o Zeca, não é que ele fosse
propriamente um cara ciumento mas ...
ARNALDO (Sério) Eu não gosto dessa coisa de ciúme. O
amor entre duas pessoas adultas só pode ser o
encontro entre duas liberdades. Deus me livre de
você deixar de transar com alguém por minha
causa! Eu estou apaixonado por você e o teu
prazer é o meu prazer também. Não quero que você
se sinta amarrada a mim, porque também eu não
estou amarrado a você. Acho que se a gente
pensar e agir assim, o nosso relacionamento tem
futuro.
ANA É ... claro ...
ARNALDO (Dando um beijinho em Ana) Meu amor, antes do
quinto chope vou fazer pipi e já volto, tá?
Arnaldo se levanta, ambos sorriem.
CORTA PARA Zeca que de sua mesa viu que Ana está sozinha. Zeca vai até
a entrada do bar e põe "stardust" com Willie Nelson. Volta e, já meio
trôpego, vai até ela. Ela sente a aproximação e se prepara, na
defensiva:
ANA (Ao vê-lo chegar - lacônica) Oi, Zeca.
ZECA (Ainda de pé, apoiado com as duas mãos na mesa
dela) Ex-marido ainda tem algum direito?
ANA Nenhum, Zeca.
ZECA Mesmo assim eu não posso ficar quieto vendo
você fazer besteira!
73
ANA (Começando a se zangar) Como besteira, Zeca?
Que história é essa?
ZECA (Despejando) Ana, esse cara não é homem pra
você. É um outro universo, outra cabeça,
entende? É uma pessoa que não se liga a
ninguém, tem mil mulheres ao mesmo tempo.
ANA E quem é você agora? Irmã Paula? Você nunca foi
disso, Zeca ...
ZECA Ana, esse cara leu meia dúzia de livros de
Reich e acha que é a Revolução Sexual
personificada ... Ele não está namorando você,
está namorando uma tese...
ANA Zeca, não tô interessado na opinião que você
tem dele ...
ZECA Mas talvez esteja interessada em saber que ele
é casado e parece que a mulher dele é genial.
ANA (Levou um susto e está sem ação. Gagueja)
Não ... não deve ser, Zeca, senão ele teria me
falado. Ela é uma pessoa liberal, não tem
porque esconder ... (Mas Ana não consegue
disfarçar sua surpresa)
ZECA Justamente, Ana, por ser liberal, ele acha que
te contar isso é irrelevante. Aí um dia ele te
apresenta à mulher - que - todo mundo diz, é
uma pessoa legal e de quem ele nem sonha se
separar. Eu tô só preparando o teu espírito.
ANA Eu não quero que ninguém se separe por minha
causa, Zeca e (começa a chorar enquanto fala)
eu não quero que você NUNCA MAIS, mas NUNCA
MAIS se aproxime de mim pra me ajudar, se você
acha que isso é ajudar. Tem mais, eu mudei
muito, você não me conhece mais, não sabe mais
o que eu penso, o que eu sinto, muito menos o
que eu espero de um relacionamento com um
homem. (Indignada) Me deixa em paz, Zeca, me
esquece e muito obrigada por ter estragado
74
minha noite!! (Ana levanta-se num repelão sai
chorando em direção à porta.)
Arnaldo que estava cagando avista Ana sair correndo e alcança-a na
porta do bar. Ela o abraça com força e ele lhe dá vários beijos, nos
olhos, no pescoço, na boca, sem fazer perguntas mas solidário e
carinhoso.
Zeca que observa tudo, sozinha, da mesa, sente-se pior ainda e percebe
o fora que deu.
CORTA PARA Final da Seqüência 19.
Zeca, na fossa, bebe sozinho. Chega Passarinho sempre agressivo.
PASSARINHO Ah, sei, tás aí fazendo caras de intelectual
fingindo que tem vida interior intensa, né?
Vocês não passam de uma caganita humana que se
vende pra televisão.
ZECA Poupa meu saco, Passarinho ... Eu já me despedi
da tevê.
PASSARINHO Ah, sei, tás aí fazendo caras de intelectual
independente fingindo que tem peito pra saltar
fora do sistema, né? Não passas de um chefe de
família burguesa e oportunista.
ZECA Eu me separei da minha mulher, Passarinho. Vê
se me esquece, tá?
PASSARINHO Ah, sei, tás agora fazendo caras de intelectual
liberado e homem vivido, aberto às novas
experiências sexuais reichianas, né? Não passas
de um machão latino, devasso, castrado e
castrador.
ZECA Ô, Passarinho, te conheço há vinte e cinco
anos. Se você é meu amigo me deixa em paz aqui
com a minha birita.
PASSARINHO Ah, sei, fazendo caras de intelectual com
grandes problemas existenciais que aparecerão
na sua própria peça de teatro, né? Sou teu
amigo mas você continua sendo um bundão.
75
ZECA (Explodindo) Ô Passarinho, poupa-me da tua
amizade, tá? Poupa-me da sua amizade!!!
PASSARINHO Ah, sei, fazendo caras de intelectual de
geração perdida, fingindo que é agressivo e
vingador, né? Seu Hemingway de merda!
ZECA Que praga, você, Passarinho ... Eu tenho que
sair daqui, sumir, desaparecer, não agüento
mais! Vocês todos!
PASSARINHO Ah, sei, fazendo agora caras de intelectual
marginal e metido a ecologista, anarquista,
fingindo de feminista, livre e selvagem, né?
ZECA Porra, não há guarda chuva contra você, hein,
Passarinho?!
PASSARINHO Ah, sei, citando poema de João Cabral de Melo
Neto pra posar de sensível e bem informado, né,
ô babaca?!
ZECA Já entendi. Só tem uma saída. Há anos você
provoca isso. Vamos sair na porrada! (Pessoas
em volta vendo a discussão e o desafio)
PASSARINHO Ah, sei, posando de intelectual que toma
resoluções dostoievskyanas e vitais, ô babaca?!
ZECA Mas não vamos brigar aqui no bar, não. Aqui tem
a turma do deixa-disso e separa a briga. Vamos
num lugar deserto, sair na porrada firme, até
um dos dois não agüentar mais levantar do chão.
Vamos lá! Agora vamos lá! (Pessoas olham, não
sabem se intervêm ou não, deixam-nos sair)
(Zeca já empurrando Passarinho para fora do
bar).
PASSARINHO Ah, sei, fazendo caras de cowboy contido e
valente que explode, né, ô babaca?!
SEQÜÊNCIA 19-A - RUAS E PRAIA - EXTERIOR - NOITE
Zeca andando firme e decidido, Passarinho atrás dele. Andam por várias
ruas. Param. Olham-se desafiadores.
76
ZECA Não, aqui não. Ainda tem gente que pode separar
a briga. Quero te arrebentar num lugar
sossegado!
Zeca anda mais apressado e decidido. Passarinho segue-o (Andam por
outras ruas. Às vezes param, olham-se com ódio, seguem) (Chegam à
praia. Os dois param. Planos gerais dos dois na praia deserta. Eles
pulam para a areia. Andam em direção ao mar. Param).
ZECA Então é isso mesmo, né, Passarinho?
Passarinho olha Zeca na defensiva.
ZECA Como é que é? É porrada mesmo que você procura?
Passarinho olha Zeca na defensiva.
ZECA Como é que é, ô porra?
Passarinho calado, na defensiva.
ZECA Você é um fascistinha de merda. Cadê tua
agressividade agora? (Vai se exasperando) Como
é que é? Olha não dá pra te arrebentar assim a
frio. Me dá uma porrada na cara! Pra me subir o
sangue! Vai! (Expõe a cara) Dá! Dá uma porrada
na minha cara! (Passarinho olha-o sério).
Porra, você não é ninguém (Zeca explode) É uma
cabeça fascistinha rondando pelos bares! (Zeca
chuta areia, há uma cesta de lixo preto, Zeca
corre e chuta o lixo, chuta muitas vezes, tenta
destruir a cesta de metal. Não consegue.
machuca-se Zeca Transtornado).
Você é um merda. Eu sou um merda, isso aqui
tudo é um imenso cagalhão! Tudo isso é fraude,
é mentira, é hipocrisia - vocês, nós todos,
vocês pensam uma coisa, falam outra e fazem uma
terceira! Tudo bundão! Todos nós somos uns
bundões! Chega de mentir! Tudo bundão
mentiroso! Nós somos a caricatura de nós
mesmos!
Planos gerais dos edifícios da orla da Vieira Souto. A praia imensa
vazia. O mar. A voz de Zeca aos gritos. Volta a plano próximo dos
dois. Passarinho, perplexo, olha Zeca que chora desesperado, na areia,
77
no meio do lixo da lata. Fica um tempo assim. Passarinho tenta fazer
um gesto de se aproximar de Zeca mas é incapaz. Plano geral. Os dois
parados na praia entre o mar e os edifícios. Ao longe os soluços de
Zeca. Volta plano próximo. Zeca se recompõe.
ZECA Troço mais ridículo ... Quanta babaquice ...
Tudo babaquice, caricatura ...
Zeca se aproxima de Passarinho, de repetente. Passarinho assusta-se e
faz um gesto de defesa. Zeca ri.
ZECA Não é nada não, ô meu irmão em babaquice. É só
pra evitar o vexame. Todo mundo viu a gente
sair pra brigar. Então vamos voltar com cara de
quem brigou.
Zeca despenteia Passarinho aos tapas, rasga-lhe a camisa, abre e
decompõe sua própria camisa e seu próprio cabelo.
ZECA Vamos embora, que você não é nada.
Andam de volta à calçada. Calados. Sobem a calçada.
PASSARINHO Ah, sei, agora estás fazendo caras de
intelectual desesperado que não tem nada a
perder na vida ...
Zeca olha-o com ódio. Depois começa a rir, gargalhadas, morre de rir.
Passarinho olha-o sério. Zeca, chorando de tanto rir, abraça
Passarinho e vão os dois, bêbados, atravessando a Vieira Souto, de
volta.
ZECA (Às gargalhadas) É ... Vamos voltar pro bar,
mesmo. É o nosso refúgio ...
SEQÜÊNCIA 20 - APTO DE IVAN - INTERIOR - DIA
No banheiro, o editor faz a barba frente ao espelho. Na sala, Zeca
arruma coisas da viagem: maletas, embornais, capangas, objetos mil,
uma desordem geral.
IVAN O que você está fazendo não passa de uma
explosão emotiva, pequeno-burguesa, egoísta,
voluntarista, infantil. És o que, agora? Um
Marechal Rondon da cultura?
78
ZECA Você também, poupe-me da sua amizade, cara ...
IVAN (Ao espelho, encarando-se altivo) Você não quer
mudar o mundo, quer é quebrar o brinquedo que
nem uma criança barulhenta. Você está brigando
com o seu pai.
ZECA (Arrumando as coisas) Quem sabe de mim sou eu.
IVAN Zeca, a verdadeira mudança só pode ser feita
quando todas as forças vivas da nação se
levantarem numa invencível frente única das
oposições, percebe?
ZECA Vocês não se emendam ...
IVAN (Discursa para o espelho) Um dia todo o povo
organizado derrubará as oligarquias e sentará
vitorioso no lugar que lhe cabe.
ZECA Não vai dar todo mundo ...
IVAN (Ivan está no auge do arrebatamente) Olha-se
fixamente ao espelho. Sua expressão vitoriosa
vai cedendo até tornar-se uma cara de enfado,
um rosto alquebrado. Ele se olha, depois abre a
gaveta sob o espelho, pega uma pistola, aponta
para a própria fronte. Olha-se sério. Um tempo.
Cara seríssimo, sentido. Dispara. Faz click!
Ele guarda a pistola e segue fazendo a barba,
quase alegre, como se nada tivesse acontecido.
Na sala, o tempo todo, o índio Donato toca a sua flauta num canto.
Zeca escreve à máquina, desiste, joga fora os papéis. Zeca disca,
telefona. Ana atende do outro lado.
ANA Alô ... (Pausa) Alô! Fala quem é ô idiota!
Fala!
Zeca querendo falar sem conseguir. Ela desliga. A televisão de Ivan
está ligada e o índio Donato vê agora um filme de selva que está
passando. Ele se interessa. Fica vidrado.
ZECA Ele não pode ver selva que ataca-lhe o
banzo ...
79
Zeca telefona de novo. Aparece Ana irritadíssima ouvindo
ANA Alô! Alô! (E desliga)
IVAN Se você é babaca o suficiente pra telefonar pra
tua mulher porque então não fala com ela de uma
vez?
ZECA Não liguei pra ela não ...
IVAN Claro que não ... Babaca ... Pedindo pinico ...
Entra Nina cheia de embrulhos.
IVAN O que é isso aí?
NINA Uma câmera de video-tape. Tudo em cima, Zeca?
ZECA (Desanimado) Tudo ...
NINA Qual é o grilo?
IVAN Ele está com saudade da mulherzinha e
vacilando.
ZECA Vacilando está a sua mãe.
O índio Donato recomeça com a flauta.
IVAN Ai, não tenho saco pra folclore ingênuo!
ZECA (Sorrateiro, no telefone) - (Calado, ouvindo)
ANA Alô! Alô! Quem é, ô imbecil?!
ZECA (Disfarçando a voz) Você vai mesmo entregar
aquela carta ô sua filha da puta?!
SEQÜÊNCIA 21 - APTO DE ANA MORENO - INT. NOITE.
Ana está deitada na cama ao lado de Arnaldo. Clima trepada. Os dois se
amam. O telefone toca e Arnaldo, com ódio, pula por cima de Ana e pega
o telefone aos berros:
80
ARNALDO ALÔ!!! (Logo muda de fisionomia) desculpe ... é
pra você ... (Entrega o telefone para Ana).
Arnaldo, visivelmente aborrecido, acende um cigarro. Ana pouco fala,
responde monossilabicamente uns "sei, sei ...", mas aos poucos vai
ficando séria. Arnaldo, com tesão, se impacienta.
ANA Tá legal, Ricardo, não precisa se desculpar ...
tudo bem - fica pra outra! Tchau!
Ana desliga o telefone, arrasada.
ARNALDO O que é que houve?
ANA Era o Ricardo dizendo que o novo produtor da
peça escolheu a Letícia Bueno pra fazer o papel
que eu ia fazer ...
ARNALDO Ué ... mas não estava tudo certo? você não
assinou contrato?
ANA Que contrato! Como sempre eu acredito nas
pessoas e depois danço, claro!
ARNALDO (Se levantando e indo para a sala colocar um
disco) Mas qual a razão, o Ricardo disse alguma
coisa?
ANA ... que o novo produtor disse que precisava de
uma estrela para garantir o retorno do
investimento, como sempre!!! que eu sou muito
boa atriz, sou muito conhecida, coisa e tal,
mas que sem uma grande estrela ele tem medo de
por a grana.
Arnaldo acabando de colocar o disco, e voltando para o quarto.
ARNALDO Mas o Arnaldo não escreveu o papel pra você?
ANA Escreveu, e daí? A grana fala mais alto! (Muda
de tom) Me desespera essa idéia de que eu
preciso ser estrela pra fazer uma peça boa, ou
um bom filme!
ARNALDO (Sentado na cama, ao lado dela) E porque não
ser uma estrela? Se quiser posso ser seu
81
empresário ... (Arnaldo abraça Ana, que tenta
evitar. Na vitrola, Roberto Carlos começa a
cantar - "ai, eu vim aqui amor, só pra me
despedir ...)
ANA Não brinca, Arnaldo ... eu tô falando sério!
Acho babaquice esse negócio de estrela ... e o
pior é que eu avisei aos caras da TV que eu não
ia renovar contrato por causa desta peça, pode?
Arnaldo não se contém, e avança sobre Ana. Ana a princípio reluta, mas
depois se entrega. De repente ela saca a música que está tocando na
vitrola e corre até a sala para desligar a vitrola. Volta para a cama,
e se joga nos braços de Arnaldo.
SEQÜÊNCIA 22 - BAR. INT. NOITE
Bar com poucos fregueses, tipo 8 horas da noite. Numa das mesas estão
Zeca, Yuri e Babita. As crianças jantam, felizes e excitadas por
estarem no bar, acompanhadas do pai. Prepúcio está acabando de servir
chope e guaraná. Babita fala:
BABITA O senhor vai ficar muito tempo?
ZECA Não sei ... um mês, dois talvez ... eu não
estou pensando na volta ...
YURI Vai ganhar muita grana, pai?
ZECA Para de pensar em grana o tempo todo,
menino ... É a tua mãe que anda enfiando isso
na sua cabeça? (Muda de tom) Eu não vou por
causa de dinheiro ... é um trabalho novo que me
interessa; vou a lugares que eu nunca vi,
trabalhando com gente que eu gosto, é isso!
Estou a fim de mudar, começar tudo de novo ...
BABITA ... esquecer mamãe ... (sorri)
ZECA E quem te disse que eu ainda estou apaixonado
pela tua mãe? (os dois olham para Zeca sem
acreditar em suas palavras) é ... também é pra
esquecer tua mãe ...
82
Galocha ao ver as duas crianças na mesa, encosta e já manda uma
cascata.
GALOCHA Olha aí, tou vendendo carteira falsificada pra
menor freqüentar os botecos, vai levar?
ZECA Se manda, Galocha!!
Galocha sai apregoando suas mercadorias.
GALOCHA Revistinha pornográfica - pílula anticoncepcional, olha aí, leva tudo na minha mão!
BABITA Pai, todo mundo que vem aqui é maluco?? ...
YURI É sim! ... Aqui, por exemplo, tem um maluco que
põe nome maluco no filho!
ZECA (Indignado, para Babita) Quer dizer pro seu
irmão, esse "geninho", que Yuri é o nome do
primeiro cara que foi lá em cima olha a terra
de longe? E sabe o que é que ele descobriu? Que
a terra é azul!
YURI E daí? Isso é razão para alguém se chamar Yuri?
Zeca vai responder mas não consegue. E vendo a
inutilidade daquela conversa, volta a beber seu
chope. Babita interrompe o silêncio:
BABITA Pai, posso pedir um favor?
ZECA O que?
BABITA Já que você vai viajar, não dá pra você
adiantar logo a nossa mesada..??
Zeca vai brigar com a filha, mas desiste, vira-se e grita:
ZECA Prepúcio!!! A nota!
SEQÜÊNCIA 23 - APTO ANA MORENO - INT. NOITE
Ana e Arnaldo na cama, acabam de trepar. Clima de relaxamento. Ana se
enrosca no corpo de Arnaldo, beijando-o. Carícias. Ana dengosa e se
espreguiçando, acende a luz e fuma um cigarro. Arnaldo tenta uma outra
83
carícia, mas é docemente repelido por Ana. Tentativas, brincadeiras,
etc.
ANA ... não Arnaldo, eu não quero mais ...
ARNALDO Só mais uma ... (Cara de pidão)
ANA (Um pouco irritada com a insistência) ... eu
não quero mais Arnaldo ... tudo bem!!
Arnaldo se levanta para colocar a roupa. A campainha toca. Ana coloca
um robe, e vai a sala abrir a porta.
ANA É o Zeca com as crianças ... (sai) Corte
Na sala, Ana abre a porta. Parada, está uma mulher de seus trinta e
poucos anos, olhando Ana, fixamente. Ana se encabula e a mulher
pergunta:
MULHER O Arnaldo está?
ANA (Sem entender muito) Quem quer falar com ele?
MULHER (De cabeça baixa, impassiva) Diz a ele que é a
Lúcia ...
Nesse momento Arnaldo está chegando na sala, abotoando a camisa.
Espanto com a presença da própria mulher. Ana saca, e arrasada, se
encosta junto a um móvel. A mulher fala:
MULHER Desculpe Arnaldo ... eu tentei resolver sozinha
mas não consegui ... o Beto não está bem ...
crise de asma ... como eu estou sem carro; a
essa hora ... vou precisar de você ...
Arnaldo com cara de panaca, fica sem ter o que dizer. Finalmente fala.
ARNALDO Claro... vamos lá ...
Arnaldo antes de sair, faz uma cara envergonhada, tipo "eu não tenho
culpa" e fala
ARNALDO Desculpe, Ana ... (e sai junto com Lúcia)
Ana fica ali em silêncio, perplexa, constrangida, e sem forças. Doída.
84
SEQÜÊNCIA 24 - BAR - INT NOITE
O bar está agitado como sempre. Os personagens de sempre. Numa das
mesas estão Cotinha e Cabelinho. Ela completamente nua e ele vestido
de velhinha. Os dois se amam e conversam. Numa outra mesa estão Ana e
Ivan Guerra. Ana está se lamentando.
ANA Crise braba, seu Ivan; crise braba!
IVAN Sentimental ou artística?
ANA Tudo!! Fim do casamento, fim da peça, fim do
teatro, fim de caso ... eu estou num beco sem
saída ...
IVAN Ótimo, bendita crise a sua! A gente só recomeça
quando chega ao fim. (Carinhoso) está na hora
de mudar, Ana - começa agora!
Ana acaricia a mão de Ivan, agradecendo o apoio. Bebe um gole e
continua a falar:
ANA Claro, eu vou sair dessa ... (Muda de assunto)
e o profeta que não chega ... eu tou louca pra
ver esse cassete.
IVAN Está com saudade do Zeca?
ANA Claro que estou; eu gosto do Zeca - ele é pai
dos meus filhos, e tá há um mês sem mandar
notícias, eu tenho que estar curiosa...
IVAN Eles mandaram o cassete pra redação, o Profeta
deve estar chegando ... (Muda de assunto) Eu
gosto do Zeca. Meio porra-louca, mas eu gosto
dele ... Está sempre explodindo, sempre em
movimento; não se acomoda nunca!
ANA (Sentiu as palavras de Ivan) É ... eu acho -
que puni o Zeca com muito rigor...
Nesse momento Arnaldo se aproxima da musa. Ana percebeu mas finge que
não vê. Ivan continua falando.
IVAN Não ... você não conseguiu foi harmonizar as
diferenças ... é difícil, Ana! As pessoas
85
exigem que o parceiro seja o modelo fiel
daquilo que eles sonharam .. e depois se
desiludem ... isso não existe! A tarefa mais
difícil pra duas pessoas que se amam, é superar
essa fantasia, viver o outro como ele é -
harmonizar as diferenças, Ana!!! Corte.
Mesa de Cotinha e Cabelinho. Os dois continuam se namorando. Voz off
do Ivan -
IVAN (OFF) Vê só o Cabelo e a Cotinha ... eles
conseguiram harmonizar as diferenças ... estão
felizes! (Rindo)
Ana sente as palavras de Ivan. Bebe um gole e olha para o relógio,
impaciente. No balcão do bar, Prepúcio está acabando de arrumar o
video-cassete. Passarinho (bêbado como sempre) passa cantando:
PASSARINHO "Afiei meu canivete
no capim barba do bode
faz tempo que nóis não mete
faz tempo que nóis não fode..."
PREPÚCIO Vai pra casa, seu Passarinho!
PASSARINHO Que casa ... quem tem casa é marimbondo, ô
idiota!!
E segue feliz seu caminho. Na mesa de Ivan e Ana, Galocha acabou de
sentar.
GALOCHA (Roubando uns salgadinhos) Licencinha, D. Ana
vou descansar as pernas ... é uma batalha!!!
(Se refastelando)
IVAN Tem remédio pra dor de corno, Galocha?
GALOCHA (Respondendo de um salto) Não, mas vou lançar
amanhã nesta birosca, a maior invenção do ano.
Os dois, rindo, se interessam. Galocha continua:
maletinha pra comunista fugir !!!
(Gargalhadas) É verdade! Dentro tem: escova de
dentes, pasta, toalha, um pinico e o Capital!
sabe como é né, a barra pode ficar pesada de
86
repente, é sempre bom a rapaziada ficar
preparada, né?
A porta se abre e Galocha entra com a fita cassete na mão, gritando:
PROFETA "Tchan, tchan tchan tchan..."
Todos aplaudem. Profeta se encaminha para o balcão levando a fita.
Preparativos para a exibição. Cadeiras são colocadas em volta do
balcão. Tudo pronto, surge a imagem. No vídeo, surgem Zeca, Tuca e
Valfrido. Estão num pedaço de floresta na margem de um rio. Junto com
eles estão o Índio Donato e mais dois índios (aculturados) três homens
e duas mulheres. Pelo aspecto, estão exaustos de uma longa marcha. Uns
sentados, descansando, outros fumando um cigarro pra relaxar.
Mosquitos incomodam bastante. Fadiga e suor. Zeca está com o
microfone; no lado estão Tuca e Valfrido. Nina opera a câmera de V.T.
NINA Atenção ... gravando !! (OFF)
ZECA (Cansado, mas orgulhoso) Boletim n° 1 do
Grupo ... (dar o nome do grupo) diretamente do
interior do Estado de Mato-Grosso. Essa região
tem o nome de Barra do Mateus e se estende por
uma área de 150 mil km2: dentro desta área está
a reserva dos índios Tupiripá.
agora Valfrido fala:
VALFRIDO E é pra lá que nós vamos!!! É lá que o
grupo ... (Dá o nome do grupo) vai estreiar o
seu próximo espetáculo - "BOLETINS
BRASILEIROS". Pela primeira vez um grupo de
artistas apresenta o seu trabalho numa aldeia
de índios. (Vai se entusiasmando)
Zeca interfere:
ZECA É bom lembrar também, que o espetáculo é sobre
os índios ... Tuca, apresenta as pessoas que
estão conosco ...
TUCA (Pegando o microfone) Esse é o padre Achilles,
da prelazia de São Mateus que vai nos
acompanhar até a aldeia dos Tupiripás. Aquelas
são duas religiosas que trabalham com padre
87
Achilles. O senhor tem alguma coisa a dizer a
respeito da nossa proposta de trabalho, padre?
PADRE Não sei ainda ... é no mínimo curioso! O
importante, é não usar o índio como objeto de
uma sofisticação cultural ... (Zeca interrompe,
apresentando outro homem)
ZECA ... este é o jornalista João de Castro, da
Revista Careta de Cuiabá, que vai documentar
pra sua revista o nosso trabalho ...
JORNALISTA O que o padre Achilles estava querendo dizer é
que os índios Tupiripás é que devem ser os
beneficiados - pelo trabalho de vocês. Quanto
mais vocês divulgarem o drama dos Tupiripás,
melhor pra eles. É preciso - que cada
brasileiro conheça a tragédia das populações
indígenas ... (o último homem interrompe)
HOMEM ... pra vocês terem uma idéia, a superfície
total - dessa área é de 150 mil km2, pois bem;
foi vendida no cartório dessa região uma área
de 200 mil km2!!! É o que nós chamamos de
"superposição de títulos de propriedade"! Mas
ela não podia ser vendida, ela pertence aos
Tupiripás ... é importante divulgar isso! (Nina
avisa que a fita está acabando)
ZECA Esse é o Dr. Angelo, advogado da Pastoral do
Estado - que está assessorando o Padre Achilles
e os índios Tupiripás - De Barra do Mateus,
interior de Mato-Grosso - Boletim n° 1 do Grupo
(Diz o nome do grupo) (Fala pra Nina) deixa eu
dar um recadinho Ivan: pede ao Cabral, do
Fantástico, pra ele usar esse material no
programa, e pede
ao ..."KYLIXCVRTPKOIUL"CPOIU...
A imagem desaparece. TV é desligada. Gargalhada geral no Esperança.
Profeta fala:
PROFETA A Nina, como câmera-man é um número; se
continuar assim - esse vai ser o último
boletim!!! (Rindo)
88
IVAN (Com raiva) Bando de babacas!!! Não sabem que a
luta - dos índios faz parte de uma luta maior:
a luta pela mudança da sociedade! Enquanto não
mudar o sistema, o problema do índio vai
continuar...
ANA (Com raiva) Enquanto isso, eles vão se fudendo,
né? Tu já gosta de um discurso, hein?
PREPÚCIO Cala a boca, Ivan! Você não consegue nem mudar
a cueca, quanto mais mudar o sistema!
Passarinho que resmungava num canto, interfere:
PASSARINHO Pobres! Estão sempre falando de pobres! Eu
tenho a solução pra acabar com a pobreza: basta
encher o Maracanã de água, e jogar todos eles
lá dentro ... acaba a pobreza!!!
Ivan sai enfurecido.
IVAN Eu vou embora ... o nível está muito baixo!
Os dois homens que estavam na mesa com D. Esperança, levantam e se
despedem. Ana fica sozinha na mesa, observando Cotinha e Cabelinho.
Depois de algum tempo, resolve ir até a mesa deles. Ana senta.
ANA Posso sentar? (Cotinha está dando mil beijos de
agradecimento em Cabelinho) Estou atrapalhando?
COTINHA Claro que não ... senta! (para Cabelinho) Você
é o melhor marido do mundo ...
CABELO Tudo bem, não precisa puxar meu saco...!
ANA O que é que houve?
COTINHA É que eu fui convidada para estrelar uma
campanha publicitária pro Brasil inteiro: TV,
jornal, revista, tudo, durante seis meses. Mas
eu preciso aparecer nua, e o Cabelinho não
queria deixar ...
CABELINHO No bar ainda vá lá, mas pro Brasil inteiro ...
e ainda por cima propaganda de papel higiênico,
pode? (Ana ri)
89
COTINHA O que é que tem? Vai ficar bonito ... eu, nua,
coberta de papel higiênico que vai se
desprendendo do meu corpo, com o vento, e o
locutor falando - "MAGENTA uma brisa passando
pelo seu corpo", - não é bonito?
CABELINHO É ... vai virar estrela ...
Ana sorri, admirada com o casal.
SEQÜÊNCIA 25 - ESCRITÓRIO DO CHEFÃO DA TV. INT. DIA
Ana Moreno entra flutuante na ante-sala do chefão da TV. Está
lindíssima: cabelos soltos, boca e olhos maquiadíssimos, um vestido
leve e decotado que cai sobre o corpo como um papel Magenta que
Cotinha descrevia na cena anterior. Mal vê a secretária. Dirige-se
para a porta do gabinete de Baby. O assinante tenta detê-la.
ASSISTENTE Ana! Você tinha marcado com ele? ... espera um
pouquinho que ...
ANA (Impassível, como uma estrela) Pode deixar, não
precisa avisar ...
Dirige-se para a porta de Baby e abre. (Corte)
Cara de surpresa de Baby que lia uns papéis por trás de sua mesa de
acrílico. Vários monitores ligados. Escritório luxuosamente decorado.
Ana está dramaticante parada à porta, pose de estrela que vai
enfrentar o palco do Carnegie Hall. Pausa. Sorriso. Fecha a porta por
trás dela.
BABY Ana Moreno! (Levanta-se em direção a Ana) Só
mesmo você ... entrar aqui desse jeito (faz
uma cara de gozação) Veio me trazer a famosa
carta?
ANA (Dirigindo-se a ele com um ar muito casual)
Pois é ... nada de muito dramático ..., só uma
visitinha, a gente nunca se vê.
Ana caminha um pouco, reconhecendo o gabinete de Baby, tocando em uma
estátua, uma planta, e joga-se no sofá, cruzando as pernas, com uma
cara muito blasé.
90
ANA E aquela sua adega fantástica? Não vai me
oferecer uma vodka daquelas bem geladinhos?
Baby parece não perceber a cena, sorri, vai até o bar e serve uma
vodka. Entrega o copo a Ana e volta para a sua mesa, como quem espera
o início do espetáculo.
Ana toma uns dois ou três goles seguidos, entremeados de sorrisos e
olhares para os monitores. Baby, impassível, espera, mexendo numa
caixinha que muda constantemente as imagens dos monitores, consultando
papéis.
ANA (Decidida) Olha, Baby, vou abrir o jogo com
você. Eu sou uma boa atriz. Você sabe disso, o
público sabe disso. Meu papel na novela rendeu
muito mais do que vocês imaginavam. Agora, acho
que chegou a hora de ...
O telefone toca interrompendo o discurso de Ana. Baby atende, ainda
olhando pra ela, vai mudando de cara e ficando furioso.
BABY Sei, sei ... sei ... mas eu já disse, está uma
merda ... Tavares, merda a gente não salva,
Tavares. Merda a gente dá descarga, latrina
abaixo ... Desmancha tudo, joga fora e bola um
outro cenário. E tem mais, demite o Soleno e
aquela equipe de merda!
Baby desliga o telefone com força, vira-se para Ana, sorrindo
suavemente.
BABY Desculpe, meu anjo ... você tava dizendo ...
Retomando a pose, descruza as pernas e caminha pela sala, copo na mão,
despejando charme.
ANA Pois é... eu acho que chegou a hora de definir
minha posição aqui ... Eu acho que não estou
sendo bem aproveitada, que não sou uma atriz de
papéis secundários. Eu sei que vocês ainda não
decidiram o papel principal da novela das oito.
Sei que vocês estão entre dois nomes: o meu e
um outro. E eu quero esse papel, não sei se a
outra quer tanto quanto eu, mas eu quero. E
acho que vocês devem investir em mim. Vocês
estão sempre precisando de uma estrela, não
estão? Então!
91
Ana está acendendo um cigarro, com pose de Joan Crawford, é
interrompida por Baby, que se levanta ao seu encontro.
BABY Ana ... será que você ainda não sabe que eu
odeio fumaça de cigarro?
ANA (Representando e fazendo charme) Você não vai
pedir a uma estrela que apague o cigarro, vai?
BABY (Rindo) Tá bem, hoje você pode, tá?
Ana solta uma baforada, bebe mais um gole de vodka, sustenta a pose e
retoma o discurso.
ANA Baby, vocês ainda não perceberam, mas eu sou a
estrela que vocês precisam. Sou uma puta atriz,
tenho garra, por que não?
O telefone toca outra vez, Baby se inclina para atender por cima da
mesa, Ana próxima a ele. Enquanto Baby fala, Ana começa a perceber que
o cigarro virou um problema. A cinza está crescendo e ela não acha um
cinzeiro. Esbarra em Baby, se enrola no fio de telefone procurando um
cinzeiro em cima da mesa. Baby fala quase rosnando no telefone, "sei,
sei", "Claro que não" "eu já disse que esta merda não vai pro ar
desse jeito" enquanto acompanha as buscas de Ana, até que desliga o
telefone, aperta o botão do interfone e berra para a secretária:
BABY Dona Matilde, arranja um cinzeiro para dona
Ana. É. Um cin-zei-ro
Baby desliga o interfone, Ana dá um sorriso de charme, percebe a gaffe
do cigarro, bebe um gole de vodka pra concertar e se engasga.
Baby já percebeu a jogada, ri, e tenta dissuadir Ana:
BABY Tá legal, Ana, já sucumbi ao teu charme ...
(muda de tom). Olha, sou teu amigo há dez
anos ... é impressão minha ou você veio aqui
dar pra mim pra conseguir um papel na novela da
oito? Não acredito, você não é disso!
Vai empurrando delicadamente em direção à porta, enquanto fala. Ela
começa a cair do tipo. A secretária entra com o cinzeiro, ela se
atrapalha mais ainda: agora é o copo, o cinzeiro, o cigarro e o carão
de Baby.
92
BABY O papel nem está definido ainda, muita coisa
vai mudar ... Olha, tou indo pra Nova York, na
volta a gente conversa ...
Ana, já completamente desarmada, tenta negar.
ANA Olha, Baby, você tá trocando os canais ... eu
nem de longe ...
BABY (Ainda levando Ana) Tá legal, eu me enganei ...
a gente fala depois ... Ah, e o Zeca? (Ri) Diz
pra ele que ele tem razão, nós somos loucos
mesmo ... (Ri outra vez, segura Ana pelos
ombros com um ar paternal) ... mas o lugar dele
é aqui, ele pode voltar quando quiser.
Baby empurra Ana suavemente pela porta afora.
BABY Juízo, hein, menina.
Dá um tapinha carinhoso no rosto de Ana que esboça um sorriso sem
graça.
SEQÜÊNCIA 26 - BAR - INTERIOR - NOITE
No interior do bar, lotado, começa a correr o boato e que o bar foi
vendido e vai fechar. As pessoas não acreditam. Umas mais nervosas,
outras céticas, outras tristes, outras bolando uma festa pro
fechamento. E há uma turma que discute que providências tomar pro bar
não fechar - liderando a turma está Ivan Guerra. Ana está presente
junto com Galocha e Passarinho. Ivan, aos berros, faz um discurso:
IVAN Eu vou falar com o Albino ... deixa comigo ...
ele vai conseguir do Governador o cancelamento
da venda do Esperança! Esse bar é um patrimônio
- cultural da cidade - não pode ser negociado
como uma mercadoria qualquer!
Todos aplaudem Ivan. Delírio no bar. Ivan se empolga:
mais uma vez a cultura brasileira é ameaçada, -
companheiros ... é preciso dizer BASTA! ...
93
Nesse momento a porta do bar se abre, e entram Cabelinho e Cotinha.
Ela vestida com um casaco de pele e ele, como sempre, com roupa de
velha. Os dois estão molhados da chuva que cai lá fora. A platéia ao
ver Cotinha vestida, grita em coro:
GALERA "TIRA - TIRA - TIRA"
Cotinha, ignorando os apelos da turma, se encaminha para mesa de Ivan,
desfilando como uma estrela, seguida por Cabelinho orgulhoso. - Na
mesa de Galocha está falando:
GALOCHA Nós fazemos uma barricada aí na porta, ninguém
vai conseguir entrar ...
PASSARINHO Ótimo ... eu bebo todos os barris!
ANA Pois eu acho que devia fechar mesmo ... e devia
fechar com uma tremenda festa!!!
Cotinha e Cabelinho sentam na mesa. Cumprimentos, abraços. Cotinha ao
saber do fechamento do Esperança, protesta:
COTINHA Mas não podem fechar! A gravação do meu
comercial foi toda bolada em cima do mictório do
Esperança ... se ele acabar perde a graça!
Cabelinho consola Cotinha. Passarinho dá força a Ana.
PASSARINHO Eu também acho que uma festa é a melhor
homenagem que a gente faz ao Esperança ...
A discussão esquenta. Ivan acusa todos de reacionários porque só
pensam em festa e não defendem a cultura. Galocha propõe fazer um
leilão da gravatinha borboleta do Prepúcio. A platéia continua pedindo
para Cotinha tirar o casaco. Cotinha, dengosa, acena da sua mesa como
uma estrela, recusando polidamente. O Profeta entra correndo no bar e
se encaminha para a mesa de Ana. Senta ofegante e fala:
PROFETA Ana, chegou um telex no jornal dizendo que -
houve uma confusão com o espetáculo do pessoal,
- na tribo dos índios.
Nervosismo na mesa. Ana quer saber de mais detalhes: Profeta continua
falando.
94
O pessoal da sucursal diz que as informações -
são confusas ... falam também no
desaparecimento do grupo de artistas ... o
pessoal do telex vai telefonar pra cá, quando
chegar mais notícias.
Silêncio e expectativa na mesa. Cotinha percebe e resolve desanuviar o
ambiente. Sobe em cima da mesa, e gloriosamente, deixa cair o casaco
de pele. A platéia aplaude, delirantemente, a nudez de Cotinha.
SEQÜÊNCIA 26-A - PRAIA - EXT - DIA
Esta seqüência é a continuação da seqüência anterior; como se a praia
fosse uma extensão do bar. A discussão continua: fechamento do
Esperança e desaparecimento do grupo de artistas. Enquanto os diálogos
continuam em off, as imagens mostram: mulheres lindas, ginástica de
velhos, cachorros fazendo xixi, tudo que - possa definir o cenário
exótico da Montenegro. Som musical dos milhares de radinhos de pilha
ligados na praia.
CORO DE VOZES OFF "A PRAIA - UNIDA - JAMAIS SERÁ VENCIDA!!!"
VOZ OFF de Ivan A luta pelo Esperança é a luta
pelas liberdades democráticas!!!
VOZ DE ALGUÉM Cala a boca, babaca!
VOZ DE IVAN Babaca é a mãe!
Voz em off de uma mulher qualquer
Tira a mão daí, Ricardinho ... mamãe - tá
olhando !!!
RICARDINHO (OFF) Deixa neném ... (Voz de tesão) a gente
cobre com a toalha ... ninguém vai ver ...
MULHER Ai, Ricardinho ... ai... (gozando)
VOZ DE ANA Até agora, nada; nem a FAB e nem a FUNAI
conseguiram localizar o grupo!
VOZ DE MULHER Mas uma semana é muito tempo, menina!
PASSARINHO (OFF) Vai ver... já morreram...
95
ANA (OFF) Vai a meda, Passarinho!!
IVAN (OFF) É isso mesmo, Ana! Eles são uns otários!
(Rindo) "O Exército Brancaleone da Cultura
Brasileira!!!"
ANA (OFF) Deixa de ser escroto, Ivan; você sabe que
deu certo ... a imprensa não fala de outra
coisa ... os homis mandaram abrir inquérito pra
apurar as denúncias ... Os Tupiripás viraram
discussão nacional, claro que deu certo!!!
A discussão aumenta. Loucura geral. De repente, do meio daquela
multidão, emerge um enorme arroto, como se apaziguasse os ânimos. A
platéia delirando, aplaude.
SEQÜÊNCIA 27 - CASA DE ANA MORENO - INT. DIA
Na casa de Ana, uma equipe de TV faz uma entrevista com a atriz. Quem
comanda é uma repórter. Quando a cena começa, a entrevista já está no
meio. Ana está sentada num sofá tendo Yuri e Babita ao lado.
REPÓRTER Mais uma pergunta, Ana ... quem são as pessoas
que fazem parte do grupo (Dá o nome do grupo)
ANA Nina Saraiva, Tuca Martins, Valfrido Salvador e
o Zeca, que você e os tele-expectadores já
conhecem ... Os quatro fundaram o grupo, e, -
eles mesmos bolaram o espetáculo ...
REPÓRTER ... pra índio (!!??)
ANA E por que não? Eles achavam que, enquanto
artistas, podiam realizar um trabalho que
servisse à causa dos índios!
REPÓRTER (Virando-se para os espectadores) Pois eu acho
que serviram ... o drama dos Tupiripás é
manchete dos principais jornais do país, no dia
de hoje. (Volta-se para Ana) Mas se não servir à
causa indígena, pelo menos o sucesso do grupo
está garantido! Fala-se que grandes empresas
estão interessadas em ter o grupo sob contrato,
é verdade isso?
96
ANA (Visivelmente aborrecida com a pergunta) Não sei
... ainda não tem nada certo! O importante é
descobrir onde eles estão ... e eu aproveito e
faço daqui um apelo às autoridades pra que não
interrompam as buscas.
REPÓRTER (Virando-se para a Câmera e interrompendo - Ana)
É isso aí minha gente ... dois meses depois
continua o drama do desaparecimento do grupo (Dá
o nome do grupo) !!! Bom dia e até amanhã ...
dentro do nosso quadro no programa - ALÔ MULHER
- Até lá!
SEQÜÊNCIA 28 - BAR - INTERIOR - NOITE
Bar Esperança enfeitado com bolas de gás. Batucada. Apitos. Gente com
chapeuzinhos de papel na cabeça. Clima de festa e algazarra. Pessoas
andando pra lá e pra cá. Uma enorme faixa com os dizeres: "O BAR
ESPERANÇA NÃO FECHARÁ". Câmera desce e mostra no meio do zum-zum-zum,
um agrupamento de mesas que lembra uma espécie de comitê eleitoral -
com uma urna de lona pendurada na frente. Sentados atrás das mesas
estão Cabelinho e Profeta. Os dois, agitados, mexem em papéis, dizem
frases em voz alta, slogans que protestam contra o fechamento do bar.
Saúdam Ivan que entra com Ana.
IVAN (Curioso) Como é que tá o movimento?
CABELINHO Acho que vamos vencer. A maioria já aderiu à
resistência. Vão ter que demolir o bar com a
gente aqui dentro!
Planos de pessoas recolhendo assinaturas. Uns assinam, outros não. Os
que não assinam ridicularizam a tal resistência.
ANA Ivan, pelo amor de Deus, quer parar com essa
palhaçada? Eu vou embora pra casa!
IVAN Fica aí, meu amor, sossega o facho! Eles não
vão aparecer só porque você voltou pra casa.
ANA Mas eu tô nervosa. Não agüento essa confusão.
Entra Passarinho.
97
PASSARINHO É barricada, é? Faz com barril de chope que eu
bebo ela todinha ...
Ivan se levanta da cadeira e brada:
IVAN Companheiros, estamos aqui para mais uma
manifestação de protesto contra a prepotência!
O fechamento do Bar Esperança é um ato
arbitrário, contra as liberdades democráticas e
contra a mais pura tradição do povo brasileiro!
Cabelinho e Profeta puxam aplausos e a multidão dentro do bar dá
urros, alguns vaiam, zoeira geral. Ana, desanimada, senta-se numa mesa
próxima. Galocha passa apregoando:
GALOCHA Senhoras e senhores, não percam essa
oportunidade! São os últimos bilhetes para a
rifa da gravata borboleta do Prepúcio. Por
quinhentas pratas qualquer um pode ser o feliz
proprietário dessa raridade! (E exibe a gravata
borboleta toda ensebada de Prepúcio)
Ana acha graça, abre a bolsa pra tirar o dinheiro enquanto Galocha sai
atropelando as pessoas com sua pechincha.
Prepúcio aproxima-se de Ana.
PREPÚCIO Sinto ter que desalojá-la, senhorita, mas
preciso dessa mesa.
Prepúcio arrasta a mesa para o centro do bar onde, ligando várias
mesas, ele está fazendo um enorme "L" em cujo centro está um bolo
iluminado para uma espécie de "Ultima Ceia" para os habitués do bar. O
ti-ti-ti continua a mil. Todas as ações se desenrolam ao mesmo tempo:
o comitê contra o fechamento do bar continua seus discursos, Galocha
continua vendendo rifas, Prepúcio arrumando mesas etc.
Cotinha adentra o recinto ruidosamente.
COTINHA Povo do Esperança! Cheguei! E tenho o prazer de
apresentar-lhes meu último show!
Cotinha sobe na grande mesa em forma de L e começa a tirar a blusa. A
multidão aplaude freneticamente. Prepúcio vai até a vitrola
rapidamente e coloca um disco de mambo tipo Perez Prado. Cabelinho vai
até lá e pára o disco. Todo mundo vaia.
CABELINHO Cotinha, meu bem, por favor, hoje não, tá?
98
COTINHA (Excitada, de cima da mesa) O Esperança vai
fechar? Pois hoje eu também vou fechar... e com
chave de ouro!
Mas Cabelinho não deixa, começam a discutir, o pessoal em volta se
mete, confusão.
Cabelinho arrasado, pede a Prepúcio.
CABELINHO Dos Deuses, me arranja um coquetel nocaute.
Corta para Ana que de sua cadeira observa, quieta, aquela confusão
toda. Ana olha o bar e toda aquela gente com ternura, com nostalgia. O
som vai sumindo. Só vemos as imagens das pessoas excitadas, o correcorre, milhões de coisas acontecendo, mas em som. É o ponto de vista
de Ana. A câmera olha através do olhar de Ana. E esta cena vai se
fundindo com cenas antigas do bar. Ana tem os seguintes flashes:
(SEQ. 1) Quando Zeca a observa Zeca de longe, manda-lhe
um beijo e sussurra: "Eu te amo".
Galocha vendendo "Discret" na porta do banheiro das mulheres.
(SEQ. 9) Quando Nina lhe pergunta: "Continua torturando
o Brasil, Ana, por causa daquela famigerada
carta?"
(SEQ. 1) Quando ela e Tuca caminham entre as mesas
segurando seus copos de chope e ela pergunta:
"Espetáculo pra índio?"
(SEQ. 9) Quando ela diz: "Olha, Zeca, eu vou me embora.
Vou pra casa, minha casa. Você, por favor,
arrume um outro lugar pra dormir, tá legal? Pra
mim chega!
Passarinho, de porre, puxa um samba canção:
"Aço frio de um punhal foi teu adeus pra
mim..."
(SEQ. 19) Quando Cotinha faz seu primeiro strip-tease.
Quando Zeca diz a ela que Arnaldo é casado.
De repente Ana acorda de seu devaneio com um grito de Galocha.
99
GALOCHA Atenção, rapaziada, vai rodar a rifa (Ele fala
de cima da mesa em "L" que de repente virou um
palanque pra quem quiser se manifestar - e
descobre, num passe de mágica aquela gaiola
redonda de metal, cheia de bolinhas numeradas.
Dá várias rodadas enérgicas. Suspense. Abre a
janelinha. Cai uma bolinha. Ela via olhar mas
alguém lá de atrás grita): BINGO!!!
É Zeca que entra, seguido por Tuca e Salvador. Estão num estado
deplorável. Sujos, com roupas maltrapilhas, descabelados, barba
crescida, picados de mosquitos. Mas sua expressão é de enorme
felicidade. Salvador tem um tucano no ombro.
TODOS Zeca! Salvador! Tuca! O que que houve! Não é
possível (etc, etc)
Todos correm para abraça-lo. Os quatro são cercados e carregados nos
ombros da multidão. Aplausos, beijos, batucada, assovios etc.
Ana, surpresa, emocionada, fica indecisa se deve correr até lá ou não.
Acaba se decidindo: vai correndo abraçar Zeca mas não consegue porque
ele sumiu na avalanche de abraços. Ela fica meio perdida tentando
chegar lá, rindo, feliz, até que avista o Tuca. Abraça-o, beija-o,
depois beija Salvador, os três se abraçam ao mesmo tempo, embolados,
caem por cima das cadeiras etc. Prepúcio já foi pagar uma super rodada
de chope e está trazendo os copos. Gritaria. Cunfusão. Zeca conseguiu
sentar a duras penas no centro da mesa em "L". Todo mundo senta em
volta para ficar perto dele. E quando chegam os chopes faz-se um
brinde entre todos que lembra a imagem da Última Ceia. Galocha bate
uma foto Polaroid.
Passarinho, totalmente de porre, vira-se para Zeca e diz:
PASSARINHO Já lhe vi em algum lugar, não sei se numa
carranca de chafariz ou num cabo de guardachuva!
D. ESPERANÇA (Para Salvador) Cadê a Nina?
SALVADOR Ficou por lá. (Todos riem)
TUCA Ela é maluca mesmo.
CORTA PARA Zeca e Ivan que começam uma conversa. As pessoas vão se
dispersando pelo bar. Tuca e Salvador vão sentando em outros lugares
pra contar suas histórias. Salvador exibe seu tucano orgulhosamente.
100
IVAN Olha, não vou discutir contigo. Você é meu
amigo, eu achei que você tinha morrido, você
não morreu, eu tô feliz por isso, então vamos
beber! (Levanta seu copo de chope para Zeca,
fazendo um brinde).
ZECA Nem tem muito o que contar. A barra pesou lá
com o negócio de uma cabana ter pegado fogo e a
gente teve que se picar. Aí nos embrenhamos
pela floresta e de repente a gente se perdeu.
Mas graças a Deus e o pessoal da FUNAI recebeu
um aviso por um rádio amador e acabou um avião
da FAB encontrando a gente. Mas até a gente
saber disso foi foda.
IVAN Águas passadas, companheiro. E eu prometo que
ainda deixo você morar na minha casa se você
prometer que nunca mais vai sair daqui pra
fazer outra besteira dessas.
ZECA (Olhando sério pra Ivan) Ivan, eu gostaria que
você soubesse que eu não me arrependo
absolutamente de ter ido. Ao contrário, me
sinto muito melhor agora. Saí desse espacinho
restrito em que a vida da gente circula. Me
sinto mais vivo, pode crer. Por que é que isso
te ameaça? Porque é que ninguém aqui quer
correr risco? E mesmo que a gente tivesse feito
um papelão, o que é que tem? Pelo menos a gente
deu assunto pra vocês conversarem, pelo menos
agitou a cabeça de vocês. É muito fácil
ridicularizar quem arrisca uma experiência nova
quando a gente fica parado, bundão, no mesmo
lugar.
IVAN Ué, então se foi essa maravilha, por que é que
você não ficou lá?
ZECA Não seja simplista, Ivan. Foi legal, e tudo.
Mas meu lugar não é só lá. (Seu olhar cruza com
o de Ana) E ter ido serviu inclusive pra eu ver
que posso ser mais útil aqui. Mas foi lá que eu
entendi isso direito, sacou?
Nesse instante chega Tomás, o sub-chefe da televisão. Tomás está
simpático (ao contrário das outras vezes em que apareceu). Salvador
101
aproxima-se curioso quando o vê chegar na mesa de Zeca. Ana continua
observando.
TOMÁS Ivan, dá cá um abraço, ô bichão! Folgo em vê-lo
são e salvo!
Espanto de Zeca.
TOMÁS Soube que você chegou e vim correndo te dar as
boas-vindas e te fazer uma proposta. Quer ouvir
sentado ou vai ficar de pé?
ZECA Por que?
Passarinho e Ivan, atentos, têm um ar de deboche. Ana continua
observando, Salvador também.
TOMÁS O Baby teve uma idéia genial. Ele quer
transformar a aventura de vocês numa série pra
televisão tipo "Dramática Aventura de Artistas
Perdidos na Selva"! Não é legal?! Vocês
voltariam lá, fariam o mesmo espetáculo e
depois se perderiam em meio aos perigos da
Amazônia!
ZECA Pra mim não dá, Tomás.
TOMÁS Vamos esquecer os rancores, Zeca ... É legal
pra emissora e pro teu grupo!
ZECA Aí é que está. Nós não somos um grupo. Cada um
tem sua cabeça, sua vida. Pra mim não dá.
Pergunta pros outros, pode ser que eles
topem...
TOMÁS Nem pensar, tem que ter você. A gente sabe que
a iniciativa foi tua.
ZECA Engano seu, tudo partiu da Nina que ficou por
lá.
IVAN (Completando) E que não voltou porque deve
estar com vergonha de encarar a gente depois de
ter feito essa cagada toda.
TOMÁS Mas afinal, Zeca, qual é o grilo?
102
ZECA Não tem grilo, Tomás. É que esse trabalho pra
mim já acabou. Eu não tô a fim de reviver essa
experiência. Ela já me serviu demais e foi boa
paca pra minha cabeça. A tua idéia pode ser até
boa - não vou julgar - mas tô mais a fim de
fazer uma coisa nova. (para Tuca que está ao
lado) Você tá a fim, Tuca?
TUCA Não, obrigado. Quem gosta de passado é museu.
(E beija, orgulhoso, uma gatinha com quem está
enroscado).
Salvador se intromete.
SALVADOR Aqui, Tomás, vamos levar um papo?
TOMÁS Sobre?
SALVADOR Vem cá (Puxa Tomás) Eu ouvi esse teu papo com o
Zeca. É o seguinte... Eu tô interessado.
E vão andando.
IVAN Bravo! Vou te fazer uma proposta bem mais
interessante do que a do Tomás. Olha, tamos
fazendo uma frente de resistência contra o
fechamento do Esperança. Já temos mais de mil
assinaturas e pretendemos ficar aqui em
vigília ...
ZECA E daí que tão fechando o Esperança? Ótimo! Deixa
fechar. Isso aqui já deu o que tinha que dar.
Agora vai começar outra história que a gente não
sabe qual é, mas que tem que começar, Ivan. Acho
ótimo que feche. Todos nós precisamos mudar.
Agitar. Deixa chover, ôôô deixa a chuva
molhar ... (e sai dançando).
CORTA PARA Ana que ouviu a conversa entre Zeca e Ivan e agora olha
para Zeca enternecida. Pensa um pouco e num repelão levanta-se e vai
até ele. Senta-se ao lado dele que está conversando com Ivan e o
Profeta. Quando ela chega os dois e o resto das pessoas em volta vão
se retirando discretamente.
ANA Estou feliz por você ter chegado.
103
ZECA Será? (Novelesco) Com um marido morto você
poderia reconstruir sua vida ao lado do homem
que ama ...
ANA Brincadeira de mau gosto, Zeca. Afinal você é o
pai dos meus filhos. Não quero que eles sejam
órfãos, nunca.
ZECA Falar nisso como é que eles estão?
ANA Umas pestes como sempre.
Zeca sorri.
ZECA Já tão chamando seu namorado de pai?
ANA Não tenho mais namorado...
ZECA La donna è mobile ...
ANA Não, não é isso não. É que eu meio desaprendi a
namorar, tantos anos com você ... e essas
amizades coloridas ... Não sei ... Na verdade,
perdi o interesse. Não era a pessoa exata pra
mim.
ANA (Cuidadosa) E a Nina?
ZECA Casou com um cacique (e ri).
ANA (Também rindo) Mentira!
ZECA Verdade. Mas não é bem assim, claro. O negócio
é que pra você fazer alguma coisa pelos caras
tem é que ficar lá mesmo. Acompanhar a vida
deles. É como fazem os padres que estão lá,
fazendo um trabalho genial. E além disso ela
ficou paradona no cacique, isto é, juntou o
útil ao agradável."
Pausa. Os dois estão nessa "brincadeira" de amigos mas o clima vai
ficando constrangedor. Os dois se olham, os olhares se encontram,
riem, baixam a cabeça etc.
104
ANA E ZECA Eu queria ... (Acham graça porque falam ao
mesmo tempo. Riem)
ANA Fala!
ZECA Não, fala você!
ANA É ... sabe o que é? ... Bom ... Ih, andei
fazendo cada besteira que você nem imagina ...
ZECA Imagino sim. (Disfarçando) Por falar nisso,
você já entregou aquela carta, Berenice?
ANA (Rindo) Entreguei! Entreguei! Graças a Deus,
tirei mil toneladas das minhas costas. Ufa, foi
um alívio.
ZECA E agora?
ANA Não sei. (Pausa) E você?
ZECA Também não sei.
ANA Pois é, pena que o trabalho não deu certo.
ZECA Não - deu certo sim! Ou melhor, não é pra dar
certo.
ANA (Rindo) Quer dizer que continuas o mesmo ...
ZECA É que a gente raciocina em termos de uma coisa
ou outra. É melhor raciocinar em termos de uma
coisa e outra, ou seja, as coisas se somam, não
se excluem. Tem que ter lugar pra erro e pra
acerto. Se o que a gente faz é radical, pode
ser bom porque as pessoas discutem o nosso
radicalismo e assim elas mudam um pouco também.
As pessoas discutem: "Ele tá errado mas eu
também tô. Ela radicalizou demais mas eu tô
parado demais" - Então não tem esse negócio de
"dar certo". Não tem esse negócio de certo e
errado. É tudo essa confusão toda mesmo. Ih, tô
querendo ser inteligente demais. Vamos mudar de
assunto?
ANA (Pegando a mão de Zeca) Eu sou muito boba,
Zeca?
105
ZECA (Rindo, apertando a mão dela) Um tanto ao
quanto ...
ANA Sabe qual é a impressão que eu tenho? De que
você estacionou o carro na calçada e eu em vez
de te cobrar uma multa te condenei à cadeira
elétrica.
CORTA PARA Ivan que comenta com Cabelinho a reconciliação apontando
para os dois. Lá no fundo do bar alguém de porre começa a puxa a
música "Bandeira Branca" já num começo de carnaval. Zeca e Ana ouvem,
riem enternecidos. A música continua crescendo, vai virando um cordão
no bar. O cordão se aproxima da mesa deles: "Bandeira Branca, amor/Não
posso mais/Pela saudade que me invade eu peço paz/Saudade mal de amor,
de amor/Saudade dor que dó demais/Vem meu amor/Bandeira Branca eu peço
paz..." Eles se olhando nos olhos ignoram as pessoas em volta que já
cercaram a mesa. Ele diz:
ZECA Me dá um beijo?
ANA É, acho que um beijo vai bem.
Ana dá-lhe um beijo curto. Olham-se de novo. Abraçam-se, dão um longo
beijo. O cordão de "Bandeira Branca" vai levando-os junto. Eles saem
abraçados, agora também cantando. Nesse cordão vão saindo todas as
pessoas do bar.
CORTA PARA o lado de fora - cada pessoa que vem saindo é fotografada
pelo Galocha. (Isso pode dar um efeito de stop motion na tela
apresentando os nomes dos atores e cada um que vai aparecendo). Quando
já estão todos na rua cantando
CORTA PARA o interior do bar vazio e silencioso. Essa imagem de
silêncio será alterada com a cena ruidosa da rua numa montagem
intermitente. Lá fora as pessoas andando pela rua e ainda cantando vão
mostrando os souvernirs do bar que cada um descolou: Ana ficou com o
disco do Willie Nelson, Ivan com um cinzeiro enorme, o Passarinho
ganhou a gravata borboleta do Prepúcio, Cotinha enverga uma faixa onde
se lê "Vênus do Esperança", o Profeta com uma válvula de puxar
descarga, Tuca com um quadro etc (coisas que caracterizam o bar). De
repente a multidão avista um outro bar que se chama: "Continuação - O
Primeiro que Abre" - pois o dia está nascendo. A maioria entra nele,
outros se dispersam pela rua e o Galocha está perguntando a todo mundo
se quer comprar o cartão que ele tem na mão. Ninguém dá bola pra ele,
até que ele se decide:
106
GALOCHA Bom, se ninguém quer comprar...
E joga o cartão pra cima. A câmera acompanha o vôo do cartão que numa
trucagem vai se fixar no meio da tela. Nele está escrito a palavra
FIM.
.......................
107

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)