import '../App.css'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function Techniques() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <h1 className="display-4">Techniques</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">Nobody is a villain in their own story. We are all heroes in our own stories </p>
          <i>— George R. R. Martin</i>
        </div>
      </div>

      <div className="col-md-6"></div>
      <div className="card flex-md-row mb-4 box-shadow h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <strong className="d-inline-block mb-2 text-success">Design</strong>
          <h3 className="mb-0">
            <a className="text-dark" href="#">Post title</a>
          </h3>
          <div className="mb-1 text-muted">Nov 11</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to dditional content.</p>
          <a href="#">Continue reading</a>
        </div>

        <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18eeca52e10%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18eeca52e10%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"></img>
      </div>


      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-16-1" className="blog-post-title">2.1: What Are The Rules?</h2>
              <p className="blog-post-meta">January 1, 2014 by <a href="#">zerda</a></p>
              <div id="content">

                <p>DEFINE TECHNIQUES AND WHY THEY'RE IMPORTANT</p>

                <h2 id="post-2-2" className="blog-post-title">2.2: The 'Closed Door' Rule</h2>

                <div className="p-3 mb-3 bg-light rounded">
                  <p className="mb-0"> "He was standing in front of a wall of darkness, and on the other side of was something unendurable, something too dreadful to be faced"<a href="#f7"><sup>7</sup></a></p>
                  <p></p><i>— George Orwell, Nineteen-Eighty Four.</i></div>

                <p>The unknown is one of the most potent forms of terror. Therefore, you want to keep your source of horror ‘unknown’ for as long as possible. Also, as everyone’s personal fears are slightly different, what the reader is imagining will always trump whatever you can serve up. As quoted by Stephen King, The unknown is one of the most potent forms of terror. Therefore, you want to keep your source of horror ‘unknown’ for as long as possible. Also, as everyone’s personal fears are slightly different, what the reader is imagining will always trump whatever you can serve up. As paraphrased by Stephen King:</p>
                <p className='indent-text-1'><i>“The protagonist throws [the door] open and there is a ten-foot-tall bug […] “A bug ten feet tall is pretty horrible” the audience thinks, “but I can deal with a ten-foot-tall bug. I was afraid it might be a hundred feet tall.”</i><a href="#f1"><sup>1</sup></a></p>

                <h2 id="post-2-3" className="blog-post-title">2.3: Internalising Stress and Frustration </h2>
                <p>Don’t underestimate burdening mains with little stresses unrelated to the source of horror, even things as simple as little things going wrong (lost car keys, late for work, disrupted marital relationship, child bullied). As long as it’s not transparently set up (running from monster, get in car, car won’t start, no previous indication car had fault). Done effectively, these things can actually add to a later build up of horror. </p>
                <p>Examples: </p>
                <p>In the short story, Nightmare at 20,000 Ft,<a href="#f2"><sup>2</sup></a> it's implied the protagonist is mentally ill, even suicidal before he even gets on the plane, this makes the main character stressed even before he sees the gremlin.<a href="#f2"><sup>2</sup></a></p>
                <p>In the short story, The Grin of the Dark,<a href="#f3"><sup>3</sup></a> a bunch of things go wrong for the protagonist which are unrelated to the main source of threat (e.g. bank balance comes up negative; film reels burn up; things go missing, etc) but collectively help to build a sense of dread.</p>

                <h2 id="post-2-5" className="blog-post-title">2.5: Horror Schizophrenia </h2>
                <p>Where there are so many threats you can’t distinguish between the genuine threat and the red herrings. </p>
                <p>EXPLAIN WHY THIS IS EFFECTIVE </p>
                <p>Example: In the Events on Poroth Farm,<a href="#f4"><sup>4</sup></a> the white moth, ‘huge spider’, multitude of insects trying to get in and moss growing on the walls had nothing to do with anything, but they served as red herrings to distract you from the real sources of horror. </p>
                <p>Example: In the Grin of the Dark,<a href="#f5"><sup>5</sup></a> potentially everything is out to get the main, but we know some of it red herrings because it turns out it never happened, or its coming from a trusted character (e.g. his GF or GF’s child says something that sounds threatening). </p>

                <h2 id="post-2-6" className="blog-post-title">2.6: The Double </h2>
                <p>Horror typically follows fantasy genre in that like = like, and unalike =/= unalike – e.g. black represents bad, white good; blue ‘us’, red ‘them, beauty is good, ugliness is bad, etc – but you can play with this in horror by making what is bad almost identical to what is good, save for a tiny difference, which doesn’t become evident to the main character until it’s too late; an example may be a street filled with tame friendly cats where the monster is a doglike creature and therefore the protagonist cannot distinguish whether the animal pacing outside their window at night is a cat or a dog. </p>
                <p>Example: In Arthur Machen's The Great God Pan,<a href="#f6"><sup>6</sup></a> the evil woman is 'supernaturally beautiful'. </p>
                <p>Example: In the Grudge,<a href="#f7"><sup>7</sup></a> without any visuals, the kid that makes meowing sounds cannot be distinguished from a harmless cat. Of course, if the meowing is the kid, once you have the visual confirmation it's too late.</p>
                <p>Example: in German folklore, because angels are blindingly bright, they turn off lights and candles so as not to blind people in their presence, before taking them to heaven. However, there is a mythical creature called ‘Der Grosse Man’ (The Tall Man), a german boogeyman, also does this, before taking a person to hell. Thus, if the lights short, you can’t tell which it is in your presence. </p>

                <h2 id="post-2-7" className="blog-post-title">2.7: The Carrot or the Whip </h2>
                <p>Most horror specialises in the ‘the whip’ form of motivating its protagonists to undertake action to advance the plot. This means their motivation is to get away from something, or eliminate its influence in their lives. </p>
                <p>The greatly underused alternative is ‘the carrot’; where protagonists are motivated to pursue something or obtain it which is what gets them into trouble. </p>
                <p>Example of the whip: Nightmare on Elm Street,<a href="#f8"><sup>8</sup></a> the kids are trying to defeat Freddy (i.e. minimise or eliminate his influence in their lives), which motivates them to actively go to sleep. </p>
                <p>Example of the carrot: Pet Sematary,<a href="#f9"><sup>9</sup></a>  the main character is trying to resurrect his dead kid, not escape or defeat anything. </p>
                <p>Example of a mix of both, a typical M.R James story where the character is trying to locate and obtain treasure such as ‘A Warning to the Curious’;<a href="#f10"><sup>10</sup></a> these can often convert into a ‘whip’ story where the character then attempts to return or destroy said treasure to prevent being haunted or killed.  </p>

                <h2 id="post-2-8" className="blog-post-title">2.8: The False Fork</h2>
                <p>This is where a character has a choice of seemingly equally bad things. The horror is not whether or not a bad thing will happen because that is certain – the horror is being forced to choose, and having some psychological sense of responsibility for your own doomed fate. This is even more effective where the character must choose within a relatively short time limit. A variation is where one choice will directly and negatively affect the main a little, and the other choice will negatively affect another on a greater scale. </p>
                <p>Example: In the film Sophie’s Choice,<a href="#f11"><sup>11</sup></a> the protagonist has to select which of her children dies. </p>
                <p>Example: In the Saw film series<a href="#f12"><sup>12</sup></a> captives choose whether to torture themselves in an effort to escape, or whether to be tortured by the machine imprisoning them and die. </p>
                <p>Example: In Pet Sematary<a href="#f13"><sup>13</sup></a> the protagonist has to choose between never seeing his dead son again, and resurrecting him with the risk that what is revived is not entirely his son. </p>
                <p>Example: In the short story The Entrance by Gerald Durrell<a href="#f14"><sup>14</sup></a> there is a very small-scale version of this when the character must rush downstairs to break a mirror before the monster can climb out of it. Because the character realises he won’t be fast enough to reach the mirror in time, the character has the choice to throw the lantern in his hand at the mirror to shatter it, however if he misses, the monster will be able to escape and he will be in the worse position of being in pitch black darkness AND with the monster coming for him. </p>

                <h2 id="post-2-9" className="blog-post-title">2.9: Coward or Courageous</h2>
                <p className='purple-bold'>I. Main Character Point of View (POV)</p>
                <p>It’s more effective to make the main character braver than average, or at least braver than the reader, or more skeptical of danger. This will mean the main will go forth into scenarios which will make the average reader anxious. This is more exciting to read than a timid protagonist who balks at scenarios which would make the reader yawn.</p>
                <p>For instance, imagine a scene with 3 people: 2 cowards and one extremely brave person. The lights short, the generator’s in the shed outside. Who is going to volunteer to get it? Obviously the brave person, and that’s the person you want the narrative to follow. </p>
                <p>In other words, by virtue of their very nature, the brave are going to plausibly end up in more nerve-wracking scenarios – otherwise, you must plausibly justify the cowardly characters getting into these situations in the first place (aside from contorting implausible excuses, such as the good old “car battery inexplicably dying, necessitating overnight stay at haunted house”). </p>
                <p>Also, the brave will continue on even in the face of little warning signs which would cause the more anxious reader/viewer to turn back – here’s another analogy; a dark wood, and a character who has to progress through it – which is scarier? The character is a coward and jumps at every sound, even stupid things like a bird squawking and as soon as they see a shadowy shape stalking them, puts their head down and sprints; or the character is brave and ignores even legitimately questionable sounds, and doesn’t notice or ignores the shadowy shape getting closer behind them? (Answer – the latter, because in the first scenario, reader/viewer is relieved by behaviour of the character, but in the latter, the reader/viewer is the frustrated by the character’s behaviour, and therefore their relief is deferred, providing more tension).</p>
                <p>Another way of putting it is that the tension rises for the viewer (who considers themselves not as brave as the brave person) being forced (in one sense, against their will) to journey with the brave character– by comparison it’s not saying much if the person who gets scared was a coward anyway.</p>
                <p>A variation of this (to the same effect, but it works with coward characters as well) is to have the reader know more than the main character – that way, the main character may make missteps which take them, unknowingly, closer to the source of danger, which will put the reader on edge.</p>
                <p>The above point is open to debate, however. There are examples of effective horror where the protagonist starts off as a nervous wreck even before the horror (e.g. Haunting of Hill House). Note, though, in that example the protagonist has brave foils in the other characters, and the protagonist is trying to impress or look ‘put together’ in front of them.</p>
                <p>Sometimes a nervous character might work because it acts as a promise to the reader that the character will seriously go off the rails, and appeal to their schadenfreude, like saying ‘you think the character’s a mess now, wait ‘til they sleep in the haunted house’. So like a lot of writing rules, you need to exercise some judgment in how to apply it. </p>

                <h2 id="post-2-10" className="blog-post-title">2.10: Strange Bedfellows</h2>
                <p>The main actually cohabitates with the source of horror, normally inadvertently. </p>
                <p>Example: In The Events on Poroth farm,<a href="#f15"><sup>15</sup></a> Protagonist was tricked into remaining on the farm while the woman was possessed by the alien, because he doesn’t realise the extent of what’s happening.</p>
                <p>Example: Pet Sematary has the main remaining in the residence with the cat. In both of these examples there is a fairly plausible logical explanation for why they remain in the residence, either they don’t know the full extent of what’s going on, or there is some false reassurance or ulterior goal (e.g. In Pet Sematary, father put up with the cat and wanted it to be fine for the sake of the daughter). Another explanation may be that the source of horror is actually in part connected to a loved one of the protagonist.</p>
                <p>An alternative to this is that the cohabitee is not the source of horror, but they’re not exactly the protagonist’s main choice of ally either:</p>
                <p>Example: The Haunting on Hill House (book and ’63 film);<a href="#f16"><sup>16</sup></a> The protagonist is a fairly timid, repressed, emotionally vulnerable, conservative type personality, whereas Theo is more confident, vivacious, sure-minded and an (implied) bisexual/lesbian. Many times the protagonist experiences the source of horror, she is alone with Theo, creating tension by the threat that her fear and need for comfort and reassurance would be exploited (or misinterpreted) by Theo.   </p>
                <p>Example: In Pigeons from Hell<a href="#f17"><sup>17</sup></a> the sheriff who accompanies the protagonist to investigate the mansion provides an added source of tension in the story; he is sceptical of the protagonist’s account and cynically orders him back into the house to show him around, although the protagonist would rather not (and any sane person would get out of there). Added to this, the protagonist’s friend was possessed and attacked him at the start of the story; there is no guarantee this won’t happen again.  </p>

                <h2 id="post-2-11" className="blog-post-title">2.11: The Gaze</h2>
                <p>Visuals are a powerful conveyance of horror – therefore you want to develop a rule for how much your mains are permitted to see; there are 2 main alternatives:</p>
                <p className='purple-bold'>I. Don't Look</p>
                <p>Probably the more commonly used. The general idea is that if you see it, you’re dead, obviously because it’s found you and wants you dead, and by seeing it, you (and the viewer/reader) adverts to that fact. The best example is a lovecraftian horror (if you look at it, you go insane), but is ubiquitous in much Hollywood horror. This is more effective where the main does not automatically die when they see ‘it’ but actually have a chance of survival if they hurry – an example is the slenderman games (and clones such as wick) where half the battle is trying to know where to look in order to not look.</p>

                <p className='purple-bold'>I. Don't Blink</p>
                <p>The general concept behind the game ‘red light, green light’ – I.e. movement only occurs when you’re not looking. Examples can be found in the games Kraven Manor and Five Nights at Freddy’s. You can employ this in fiction where a location is described twice, with subtle ominous differences the second time.</p>
                <p>There is an example with a ‘plant’ seen in a window in Ramsey Campbell’s short story ‘Peep’,<a href="#f18"><sup>18</sup></a> which is gone the next time the protagonist looks (and when you realise retrospectively it wasn’t a plant). This trope works even better where the source of horror seems totally innocuous or even interesting and intriguing and the main inadvertently gets up close to it, and only later realises (e.g. finds the thing mysteriously absent) with belated horror what its true nature was.</p>

                <h2 id="post-2-12" className="blog-post-title">2.12: Horror by Depth </h2>
                <p>In a bad horror story, the underlying plot is not scary; when all the key facts are revealed, there is a sense of relief that the threat, now known, is manageable or was not as bad as previously imagined. Conversely, in a good horror story, the underlying plot is the scariest feature, and it’s only by reaching the end and putting together all the key facts that you realise how scary things are.</p>
                <p>Films with an overreliance on jump scares tend to demonstrate this. A film can be about anything (scary or non-scary) and can still market itself as a horror if it has a handful of jump scares, i.e. it doesn’t require an underlying scary plot. A good yardstick is whether a person can start watching at any point in the film and still be scared – in a film with only jump scares, the answer will be yes. In a good horror story, the depth of the horror only becomes known as the plot goes on. It’s the acquisition of new knowledge about the events, or the unfolding of events, or the provision of context which makes the film scarier – this cannot be gained by watching the film at any random point.</p>
                <p>Example: In the film ‘It Follows’,<a href="#f18"><sup>18</sup></a> the premise is; ‘creature constantly walks after person who had sex with cursed person’. You learn everything you need to know very quickly, therefore everything which follows (pun intended) can only be a rehash of what you already know. If the film wanted to be deeper, it could have had the creature innovatively begin to contradict expectation, e.g. the creature walks off a roof, falls on the ground and continues walking, unhurt; teaching the viewer that the creature can’t be hurt by falls. Alternatively, it could have been shown boarding a plane, or walking through a great body of water. In all these cases the acquisition of this new knowledge about the abilities of the creature would have made the film scarier.</p>
                <p>Example: In the film A Tale of Two Sisters,<a href="#f19"><sup>19</sup></a>  the ultimate knowledge gained at the end of the film; that the sister was accidently killed by the course of events, without anyone knowing, is scarier than the superficial ghost appearances throughout the film (a similar twist is in the Orphanage).<a href="#f20"><sup>20</sup></a></p>

                <h2 id="post-2-13" className="blog-post-title">2.13: The Absence </h2>
                <p>A corollary of the closed door rule. If you can’t show the source of horror, then the problem arises of how to make it present in the story. One way to do this is to suggest its presence through a conspicuous absence.</p>
                <p>Example: Some of these devices were used in Poe’s The Raven poem, which involves a (possibly not quite sane) man, who mourns his dead wife, pours over ‘forgotten lore’ alone in his chamber, speculates about being haunted by demons, and hears tapping at his door. It turns out to be nothing, and then (possibly) a raven. If we read as horror, the correct response is “is that all?” the poet has created an absence which can be filled in by the reader’s imagination. There are so many possible explanations hinted at (the man is insane, the raven is actually a demon, the wife’s ghost is trying to communicate with him, etc) that the absence of a source simultaneously contains suggestions a source.</p>
                <p>Example: Mackintosh Willy by Ramsey Campbell – the story’s namesake doesn’t make much of an appearance in the story, rather we learn about him due to inferences made about him, e.g. inferences made about eyes and round objects suggest that he gouges out people’s eyes (which itself implies why no one literally sees him).</p>
                <p>Example: Bird Box: The entire plot is supported by one big absence. We don’t know anything about the monsters. We don’t even know if they are monsters</p>

                <h2 id="post-2-14" className="blog-post-title">2.14: Changing the Rules </h2>
                <p>Throughout a horror story, the reader is constantly trying to work out what the source of horror is and how it operates, i.e. ‘the rules’. It is more effective to ‘change the rules’ about how the source of horror operates, than to become too predictable. This is why jump scares in films exhaust themselves quickly; the audience expects a jump scare and they get one. Just be careful not to change the rules so drastically your story becomes inconsistent. It’s not so much the outright throwing away the rules you’ve already committed yourself to; it’s more about gradually revealing a little bit more to the reader so they suspect not that the rule has changed but that their prior assumption about the rule was wrong or incomplete.</p>

                <h2 id="post-2-15" className="blog-post-title">2.15: I Am Supernatural </h2>
                <p>Readers expect the monster to be the source of horror in a horror story, so you can catch them off guard by inexplicably making a protagonist the source of horror in an incident, which implies the protagonist is doomed to have supernatural events happen merely by virtue of existing. The events should go unexplained (and preferably limit yourself to one, or two distinctly unique ones – too many suggests they actually have controllable supernatural powers – and the point is not to confirm, only to make your reader wonder). This is a good way to mitigate monster fatigue (see also ‘horror schizophrenia’ for use of red herrings). Also, the supernatural event doesn’t have to originate from your protagonist, only a protagonist – in fact, it’s arguably creepier (as the following examples demonstrate) for a secondary or even minor character to display this ability (e.g. someone formerly thought of as another victim of the horror), because you know less about them.</p>
                <p>Examples</p>
                <p>(1) The section is too long to provide verbatim, but in ‘Salem’s Lot<a href="#f20"><sup>20</sup></a> a gravedigger is filling up the grave of a deceased child – whose body is lying in the closed coffin at the bottom of the grave – and feels watched, which subsides with distance from the grave, and vice versa. Gravedigger suspects the (unseen) dead child’s eyes are open and watching him (through the coffin lid). This nags him to the point of being utterly convinced the embalmer accidently left the child’s eyes open, and he finally gives in to suspicion and takes the lid off – the dead child’s eyes are open.</p>
                <p>(2) From The Haunting of Hill House:</p>
                <p className='indent-text-1'><i>
                  [Theodora's] insistence on naming Hill House troubled Eleanor. It’s as though she were saying it deliberately, Eleanor thought, telling the house she knows its name, calling the house to tell it where we are; is it bravado? “Hill House, Hill House, Hill House,” Theodora said softly, and smiled across at Eleanor. </i></p>
                <ul><li>In this example – though not clear from paragraph – Theodora is actually a psychic who is reading Eleanor’s thoughts and taunting her in response;</li></ul>
                <p>In both of these examples, a character exhibits knowledge they couldn’t possibly have by natural means, which is played for unnerving effect because it’s unexplained why the characters have the knowledge. The suggestion is that merely being in the presence of the supernatural gives you limited, context-specific supernatural abilities.</p>

                <h2 id="post-2-16" className="blog-post-title">2.16: False Alarm </h2>
                <p>Characters may be on high alert due to the suspected presence of a source of horror. This can limit your ability to have the characters perform necessary plot action (e.g. leave the house, take transport, go out at night, etc). One way to mitigate this is to have a false alarm or ‘misunderstanding’ scare. The sillier the actual explanation is, or the more melodramatic the character’s response, the better, as characters can laugh it off and regain confidence, making it more plausible for them to go ahead and do the necessary plot action.  </p>
                <p>Example:</p>
                <p>In The Whole Town’s Sleeping,<a href="#f21"><sup>21</sup></a> a serial killer is on the loose and the main characters are out late seeing a movie. They have reason to believe one of them, ‘V’ is being stalked. One notices a stranger enter the movie theatre and sit right behind V, and they both run out. It turns out to be someone else. This mitigates the characters’ fears, making it more plausible that they carry on undaunted.</p>

                <h2 id="post-2-17" className="blog-post-title">2.17: Worse than the Stories </h2>
                <p>Any time you have a character foreshadow a monster or object of horror, you want the actual appearance of the monster/horror to be worse. You want the actual appearance to convey some novel sense of horror as to not make it redundant – it should be as horrifying as the stories, and worse. For instance, one of your side characters says they’ve seen a ghost. When your main character sees the ghost, he doesn’t realise it’s actually a headless ghost. There are more subtle – if you can call horror subtle – examples in Pet Sematary; the stories the protagonist hears about reanimated bodies refer to animals, and an adult man, whereas the first time he sees a reanimated body, it’s a child, which gives the reader something new.</p>

                <h2 id="post-2-18" className="blog-post-title">2.18: Amnesia </h2>
                <p>Your character may experience something so horrifying that it induces selective amnesia, i.e. they forget the specific incident. If this sounds highly contrived and convenient, it probably is, but I believe, in exclusive circumstances, it can be done effectively. </p>
                <p>An example is in Sphere,<a href="#f21"><sup>21</sup></a> by Michael Crichton, where the protagonist enters a mysterious alien sphere at some point one third into the story, which causes his fears to manifest in reality, however the reader doesn’t learn this until the end because the protagonist doesn’t remember doing it, therefore, according to him, he never did. There are a number of reasons why it works and you can apply these to justify your own use of this trope:</p>

                <p className='purple-bold'>(1) Character's memory cannot be trusted</p>
                <p>Sphere builds paranoia because multiple people are accused of entering the sphere, one confirmed, two others (protag included) unconfirmed, while all three deny that they did. Therefore, it’s not necessary to assure the reader that protag did enter the sphere, only that he may have without knowing and the Sphere is capable of exercising this influence.</p>
                <p className='purple-bold'>(2) The event is relived</p>
                <p>If something horrifying happens to a character who then gets amnesia, it’s a cop out for the reader who wants to see the horrifying thing happen themselves. In order to get around this, you should have the character relive the event.</p>
                <p>This happens in sphere as the protag enters the sphere, which is related to the audience. </p>

                <h2 id="post-2-19" className="blog-post-title">2.19: Avoiding the Closed Door </h2>
                <p>There are multiple ways to avoid the closed door rule. Two main ones are:</p>
                <p className='purple-bold'>I. Through A Glass Darkly</p>
                <ul>
                  <li>The more obvious, and common method, is to reveal your monster or scary phenomenon only in part. However, this method is fairly transparent and can frustrate your reader’s impatience to see the thing in full. It is cheap if the monster is merely in the dark or the protagonist catches a faint glimpse before running away in fear. Some other ways of getting around this:</li>
                  <li>Pet Sematary: apparitions in the forest are off the path protagonist is single-mindedly following.</li>
                  <li>Various Lovecraft stories: people go crazy if they look at the monsters full on; also, the monsters tend to be very difficult to find.</li>
                  <li>The Events on Poroth Farm: alien in disguise of human.</li>
                  <li>A Warning to The Curious: reversal from the norm; the monster/ghost hides or conceals itself from the protagonist.</li>
                  <li>August Heat (W.F Harvey), Brushdogs (Stephen Graham Jones), Solaris (Stanislaw Lem): Protagonist is confused or uncertain as to time/place/identity of monster.</li>
                  <li>Children of the Corn (Stephen King), The Midwich Cuckoos (John Wyndham): Protagonist underestimates the threat of the monster (in this case, in form of children).</li>
                  <li>The Mist (Stephen King) Children of the Kingdom (T.E.D Klein), From Beyond (Lovecraft): the monster and protagonist inhabit different ‘worlds’, meeting only when the barrier between is dissolved.</li>
                  <li>Crouch End (Stephen King): the protagonist unintentionally gets closer and closer to the monster every time they try to get to safety.</li>
                  <li>Death Ship (Richard Matheson) Dial Tone (Benjamin Percy): the protagonist has already been ensnared by the ‘monster’ but doesn’t realise it.</li>
                  <li>Duel (Richard Matheson), Nightmare at 20,000 Feet (Richard Matheson): the monster’s true identity is concealed by their occupation or behaviour.</li>
                  <li>Ringing the Changes (Robert Aickman) the monster only comes out on a certain day/date/time.</li>
                  <li>Shadetree (J. Michael Reeves): the monster’s true nature only comes out after it changes disposition towards the protagonist/someone.</li>
                  <li>Shadetree (J. Michael Reeves): the monster’s true nature only comes out after it changes disposition towards the protagonist/someone.</li>
                  <li>The Children of Noah (Richard Matheson) It’s not clear who, of a number of candidates, the ‘true’ monster is.</li>
                  <li>The Haunting of Hill House: uncertainty whether there is a monster, or if the scary events are just coincidences/imagined.</li>
                </ul>

                <p className='purple-bold'>II. Horror Roulette</p>
                <p>Another method is to leave some separate phenomena unexplained/unexplored. You might have a scary location that’s attracted a lot of strange stories, and the characters who’ve gone in there before have different experiences of what happened inside. When your protagonist finally goes in, you can make it that some of the stories are realised, while some aren’t. This creates a sense that any one person faced with the horror phenomenon will not feasibly glimpse every scary possible event, creating a sense of a ‘roulette’ where you cannot get every kind of result in one go/exposure.  </p>
                <p>The ‘Roulette’ can be deceptively similar to ‘Glass Darkly,’ so take care to distinguish: the latter happen in real-time in the plot, but vaguely, whereas the former never happens.</p>
                <p>Pet Sematary has clear examples of both of the above, so I’ll use it to distinguish the two:</p>
                <p className='blue-bold'>(A) Examples of Through A Glass Darkly:</p>
                <ul>
                  <li>Victor’s precognition and dream appearance;</li>
                  <li>The Wendigo’s true form;</li>
                  <li>Daughter’s precognition;</li>
                  <li>The thing that followed Louis out of the swamp after he buried Gage there.</li>
                </ul>
                <p className='blue-bold'>(B) Examples of Horror Roulette:</p>
                <ul>
                  <li>The cause of Judd’s ‘voices’ (as Louis never hears any voices in Little God Swamp/Dead Man’s Swamp);</li>
                  <li>What Judd saw in the swamp which he refuses to describe.</li>
                </ul>
                <h2 id="post-2-20" className="blog-post-title">2.20: De-masking</h2>
                <p>Not every horror story needs to be formatted like an episode of Scooby Doo where the culprit is unmasked and the phenomena is explained. However, a horror story always needs some explanation. It doesn't have to come at the end, and it doesn't have to be exhaustive. </p>
                <p>For the purpose of this concept, I’ll distinguish two types of horror phenomenon: ‘myths’ and ‘novelties’.</p>
                <p><u>(1) Myth</u></p>
                <p>This is where the source of horror has occurred previously (possibly many times, and predictably) at least enough to generate a ‘myth’ of the thing (e.g. a house is said to be haunted). These stories tend to have parts in the beginning where the experiences of previous ‘hauntees’ are described to prime the protagonist and reader for the actual events.</p>
                <p>Don’t confuse this term with the dictionary definition of ‘myth,’ i.e. bigfoot, Hercules, or true love.</p>
                <p><u>(2) Novelty</u></p>
                <p>This is where the source of horror has never happened before (or never been reported/publicised before). For example, the film ‘Alien,’ is a first contact story with an alien. There are no stories preparing the ship crew for what happens, and everything that happens is first time event.</p>

                <p className='purple-bold'>I. The Reveal</p>
                <p>Revealing or explaining the source of horror is the default: it’s what the reader expects. They have a right to expect this, as, by setting up a story about unexplained event/s, you make a ‘promise’ that you will explain the event by the end. </p>
                <p>'Novelties' and 'Myths' can both contain reveals. However, 'novelties' must contain reveals, because the reveal is the only form of explanation a novelty has. And you need some explanation.</p>
                <p className='purple-bold'>II. The Mystery Survives</p>
                <p>There are numerous legitimate reasons you wouldn’t want to reveal your monster, e.g:</p>
                <ul>
                  <li>It would, admittedly, look silly if described in the light of day;</li>
                  <li>It subverts the logical rules of reality;</li>
                  <li>It would no longer be scary;</li>
                  <li>There is too much content and detail to describe;</li>
                  <li>It would distract from the plot, raising more questions than answers.</li>
                </ul>

                <p>So you don’t want to reveal your monster, or even provide an explanation for the events. Even some of the best horror stories are in this category. Some would even argue providing a decent explanation kills the story, per se.</p>
                <p>Know that a lack of explanation only works in stories which are ‘myths.’ This is because myths have an explanation built into them – failing a reveal, the reader will just assume the myth is true.</p>

                <p>Examples (by the same author, Josh Malerman):</p>
                <p>Bird Box is a ‘myth’ story. Although the events have never happened before collectively, much of what we learn about the events is conveyed by previous ‘hauntees’ experiences and theories. The agreed ‘story’ is that monsters have appeared on earth and looking at one causes suicidal madness. For this reason, obviously, one is never physically described, which means there is no confirmation, no reveal. However, the ending is not unsatisfying because an ‘agreed story’ has been provided, and that’s enough. </p>
                <p>House at the Bottom of a Lake is a ‘novelty’ because the titular ‘house’ found by the protagonists is unheard of; not known by anyone before then. Everything that happens thereon is totally new. However, the story has no reveal, and this is immensely frustrating and ineffective, because the story provides literally no explanation for the events, so the reader is left not knowing what the story was even about. </p>


                {/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

                <ThoughtForm />

                <ThoughtList />

                {/* ------------------------------------------------- footnotes --------------------------------------------- */}

                <div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">Stephen King, <i>Danse Macabre.</i></li>
                    <li id="f2">Richard Matheson, <i>Duel: Terror Stories.</i></li>
                    <li id="f3">Ramsey Campbell, <i> The Grin of the Dark.</i></li>
                    <li id="f4">T. E. D. Klein, <i> The Events on Poroth Farm. </i> </li>
                    <li id="f5">Ramsey Campbell, <i> The Grin of the Dark.</i></li>
                    <li id="f6">Arthur Machen, <i> The Great God Pan </i> </li>
                    <li id="f7">Ju-On: The Grudge, <i> 2002 </i>, also see the American remake, The Grudge. <i>2004</i> </li>
                    <li id="f8">Nightmare on Elm Street, <i> 1984. </i> </li>
                    <li id="f9">Pet Sematary, <i> 1983. </i></li>
                    <li id="f10">M. R. James, <i> A Warning to the Curious and Other Ghost Stories. </i></li>
                    <li id="f11">Sophie’s Choice  <i> 1982. </i></li>
                    <li id="f12">Saw Series, <i> 2004-Current. </i></li>
                    <li id="f13">Stephen King, <i> 1983. </i></li>
                    <li id="f14">Gerald Durrell, <i> The Picnic and Suchlike Pandemonium.</i></li>
                    <li id="f15">T. E. D. Klein, <i> The Events on Poroth Farm.</i> </li>
                    <li id="f16">The Haunting of Hill House, <i> 1959.</i></li>
                    <li id="f17">Robert E. Howard, <i> The Horror Stories of Robert E. Howard.</i></li>
                    <li id="f18">Ramsey Campbell, <i> Dark Companions.</i></li>
                    <li id="f19">It Follows, <i> 2014.</i></li>
                    <li id="f20">Stephen King, <i> 1983.</i></li>
                    <li id="f21">Edgar Allen Poe, <i> 1845.</i></li>
                    <li id="f22">Dark Companions, <i> 1982.</i></li>
                    <li id="f23">Josh Malerman, <i> 2003.</i></li>
                    <li id="f24">Stephen King, <i> 1974.</i></li>
                    <li id="f25">A Tale of two Sisters, <i> 2003.</i></li>
                    <li id="f26">Stephen King, <i> 1974.</i></li>
                    <li id="f27">Shirley Jackson, <i> 1959.</i></li>
                    <li id="f28">Stephen King, <i> 1974.</i></li>
                    <li id="f29">Michael Crichton, <i> 1987.</i></li>
                    <li id="f30">Stephen King, <i> 1983.</i></li>
                    <li id="f31">T. E. D. Klein, <i>1972.</i></li>
                    <li id="f32">Stephen King, <i> 1974.</i></li>
                    <li id="f33">M. R. James, <i> A Warning to the Curious and Other Ghost Stories. </i></li>
                    <li id="f34">Midnight House and Other Tales, <i> 1910.</i></li>
                    <li id="f35">Stephen Graham Jones, <i> The Best Horror of the Year: Volume Two.</i></li>
                    <li id="f36">Stanislaw Lem, <i> 2014.</i></li>
                    <li id="f37">Stephen King, <i>Night Shift.</i></li>
                    <li id="f38">John Wyndham, <i> 1957.</i></li>
                    <li id="f39">Stephen King, <i> 1980.</i></li>
                    <li id="f40">T.E.D Klein, <i> 1980.</i></li>
                    <li id="f41">H. P. Lovecraft, <i> 1920.</i></li>
                    <li id="f42">Stephen King, <i> Nightmares & Dreamscapes.</i></li>
                    <li id="f43">Richard Matheson, <i> 1953.</i></li>
                    <li id="f44">Benjamin Percy, <i> 2013.</i></li>
                    <li id="f45">Richard Matheson, <i> 1971.</i></li>
                    <li id="f46">Richard Matheson, <i> 1961.</i></li>
                    <li id="f47">Robert Aickman, <i> 1955.</i></li>
                    <li id="f48">J. Michael Reaves, <i> 1982.</i></li>
                    <li id="f49">Daphne du Maurier, <i> 1952.</i></li>
                    <li id="f50">Algernon Blackwood, <i> 1907.</i></li>
                    <li id="f51">Richard Matheson, <i> 1957.</i></li>
                    <li id="f52">Josh Malerman, <i> 2003.</i></li>
                    <li id="f53">Josh Malerman, <i> 2016.</i></li>
                  </ol>
                </div>

                {/* ---------------------------------------------------------------------------------------------- */}

              </div>
            </div>

            <nav className="blog-pagination">
              <a className="btn btn-outline-primary" href="#">Older</a>
              <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
            </nav>

          </div>

          <aside className="col-md-4 blog-sidebar">
            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">About</h4>
              <p className="mb-0-1">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Index</h4>
              <ol className="list-unstyled mb-0">
                <li><a href="#post-2-1">2.1: What Are The Rules?</a></li>
                <li><a href="#post-2-2">2.2: The 'Closed Door' Rule</a></li>
                <li><a href="#post-2-3">2.3: Internalising Stress and Frustration</a></li>
                <li><a href="#post-2-4">2.5: Horror Schizophrenia</a></li>
                <li><a href="#post-2-5">2.6: The Double</a></li>
                <li><a href="#post-2-6">16.6: Protagonist = Antagonist</a></li>
                <li><a href="#post-2-7">2.7: The Carrot or the Whip</a></li>
                <li><a href="#post-2-8">2.8: The False Fork</a></li>
                <li><a href="#post-2-9">2.9: Coward or Courageous</a></li>
                <li><a href="#post-2-10">2.10: 2.10: Strange Bedfellows</a></li>
                <li><a href="#post-2-11">2.11: The Gaze</a></li>
                <li><a href="#post-2-12">2.12: Horror by Depth</a></li>
                <li><a href="#post-2-13">2.13: The Absence </a></li>
                <li><a href="#post-2-14">2.14: Changing the Rules</a></li>
                <li><a href="#post-2-15">2.15: I Am Supernatural</a></li>
                <li><a href="#post-2-16">2.16: False Alarm</a></li>
                <li><a href="#post-2-17">2.17: Worse than the Stories</a></li>
                <li><a href="#post-2-18">2.18: Amnesia</a></li>
                <li><a href="#post-2-19">2.19: Avoiding the Closed Door</a></li>
                <li><a href="#post-2-20">2.20: De-masking</a></li>
              </ol>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Elsewhere</h4>
              <ol className="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
}
