import '../App.css';
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function TheNextWords() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <h1 className="display-4">The Next Words</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">Style is […] a matter of knowing when one has said enough.</p>
          <i>— Hallie & Whit Burnett, Fiction Writer's Handbook</i>
          <p className="lead my-3">If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn’t matter a damn how you write.</p>
          <i>— Somerset Maugham</i>
          <p className="lead my-3">Poor Faulkner. Does he really think big emotions come from big words?</p>
          <i>— Ernest Hemingway</i>
          <p className="lead my-3">Good writing is like a window pane.</p>
          <i>— George Orwell</i>
          <p className="lead my-3">We pay attention to externals when we do not know what else to do with a poem.</p>
          <i>— I. A. Richards</i>
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
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#">Continue reading</a>
        </div>

        <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18eeca52e10%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18eeca52e10%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"></img>
      </div>

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-18-1" className="blog-post-title">18.1: Don't Do This!</h2>
              <p className="blog-post-meta">January 1, 2014 by <a href="#">zerda</a></p>
              <div id="content">

                <p>Before detailing what to do, here’s a general list of things not to do:</p>
                <h5>18.1.1 	Don’t Be a ‘Said’ Dodger</h5>
                <p>Using a plethora of synonyms for ‘said’ (exclaimed, cackled, ejaculated, yelled, responded, asked, answered, etc) instead of just using ‘said’ and making the dialogue, conduct and circumstances convey tone;</p>
                <ul>
                  <li>Related: following up ‘said’ with gratuitous adverbs, e.g. said nervously, said shyly, said angrily, said happily, etc;</li>
                </ul>

                <h5>18.1.2 	Desperate Descriptive Detailing of Dialogic Discourse Does Disservice </h5>
                <p>Gratuitous descriptions of characters’ actions while they’re talking. Where this exists it’s painfully obvious the author is self-conscious about filling in gaps between dialogue with any bit of verbiage they could think up:</p>
                <p>E.g. “I don’t know how,” he said, <i>licking his lips;</i></p>
                <ul>
                  <li>Rule of thumb: You should not hear too much on a person’s teeth and tongue while they’re talking – unless they’re a crocodile or the observer has some weird oral fixation;</li>
                  <li>Remember the rule about only describing what’s unusual – so this would imply the character has screwed up teeth or tongue – is that really what you want to convey?</li>
                </ul>

                <p>Characters ‘whistling’ after someone says something surprising;</p>

                <ul>
                  <li>I can’t remember the last time someone ever did this in real life. So why do I keep seeing it time and time again in fiction? </li>
                </ul>

                <p>Characters scratching themselves in public – particularly in weird places;</p>
                <ul>
                  <li>Again, it’s not just that characters would even do this, it’s also that your observing character would bother to make a mental note of it; </li>
                  <li>o	There may be an argument for it where you want to imply that (a) the character is astonishingly comfortable with the present company; or (b) the character is filled with vile disrespect for the present company; </li>
                </ul>
                <p>See 13.2.7 Dialogue descriptions’ for the correct way to go about this.</p>

                <h5>18.1.3 	Too Many Words </h5>
                <p>Description which doesn’t do any work, e.g.</p>

                <p className='purple-bold'>[1] Announcing Your Writing</p>
                <p>Pointing out that you’re introducing information, e.g. ‘Also, I forgot to mention…’ ‘by the way…’ – just say what you what to say like a normal person.</p>
                <ul>
                  <li>It’s too conversational – can pull reader out of the plot;</li>
                  <li>It’s superfluous; you did not ‘forget to mention’ because you’re mentioning it now. If you had truly ‘forgotten’ you wouldn’t have mentioned it at all.</li>
                </ul>

                <p className='purple-bold'>[2] Describing Downtime</p>
                <p>Describing periods of time in which nothing notable happens; </p>
                <ul>
                  <li>E.g. ‘Nothing happened on Wednesday, or Thursday,’ or ‘Nothing especially worthy of mention occurred during that day’ </li>
                  <li>Cruise is relatively uneventful.<a href="#f1"><sup>1</sup></a></li>
                  <li>If left undescribed, readers already assume periods of time are spent the usual way. You don’t have to anxiously assure your reader that ‘Wednesday’ and ‘Thursday’ didn’t mysteriously disappear off the calendar.</li>
                </ul>

                <p className='purple-bold'>[3] Describing the Nondescript</p>
                <p>Generic descriptions or terms in breach of the ‘only describe the unusual’ rule;</p>
                <ul>
                  <li>Avoid words such as ‘average,’ ‘medium,’ ‘nondescript,’ etc</li>
                  <li>Also beware terms which equate with the average; Guys as ‘friendly,’ ‘easy-going,’ girls as ‘nice’ or ‘pretty,’ characters wearing ‘blue jeans’ and ‘a plain shirt,’</li>
                </ul>

                <p className='purple-bold'>[4] The ‘Transport Scene’</p>
                <p>Where “characters are shown travelling to the place where something of interest finally occurs.” <a href="#f2"><sup>2</sup></a></p>
                <ul>
                  <li>Transport or travelling scenes should only be included if something interesting and plot-relevant actually happens during the travel. </li>
                </ul>

                <p className='purple-bold'>[5] The ‘Dream Sequence’</p>
                <p>Where the protagonist has a dream to no effect;</p>
                <ul>
                  <li>It’s strongly discouraged to have dreams (or hallucinations, mirages, fantasies, etc) in your story, because they are imaginary (fiction twice removed, because your story is fiction) but if you must have a dream sequence, it must say something other than the pure content of the dream, e.g. something about your character or the plot;</li>
                  <li>The line becomes blurred where plot is contained in fictional media the protagonist consumes (a la a meta story);<a href="#f3"><sup>3</sup></a>  it’s possible but difficult to pull this off; the story-in-story must affect the real world protagonist in a plot; you should also care more about the protagonist than the characters in the story-in-story; </li>
                </ul>
                <u>Examples include ‘The Neverending Story,’ and ‘Nocturnal Animals,’ and, possibly the earliest known example, ‘Scheherazade.’</u>

                <p className='purple-bold'>[6] The ‘Mirror Scene’</p>
                <p>Where you introduce your protagonist’s appearance through them observing their reflection in the mirror;</p>
                <ul>
                  <li>This has the added detrimental implication of vanity;</li>
                  <li>Instead, devise to bring the protagonist’s physical appearance into the story in some way (e.g. physical activity causes their hairstyle to fall out of place), and only describe those features relevant to the plot events; </li>
                </ul>

                <p className='purple-bold'>[7] The ‘Photograph Scene’</p>
                <p>Where you introduce your protagonist’s appearance through them observing a photo of themselves;</p>
                <ul>
                  <li>This has the added detrimental implication of vanity and sentimentality;</li>
                  <li>This applies to every character; bring characters into the story to introduce them; a photograph doesn’t tell the reader anything about who the character is. </li>
                </ul>

                <p className='purple-bold'>[8] The Fashion Catalogue</p>
                <p>Cataloguing every single item of clothing characters’ are wearing; </p>
                <ul>
                  <li>A single, well-chosen item of clothing (that says something essential about your character) is preferable to an entire wardrobe of description.</li>
                  <li>Take advantage of clothing which suggests a bigger outfit; e.g. if a character is wearing a raincoat, we assume they are also wearing gumboots (or some other waterproof shoe), if a character is wearing a scarf, we assume a long sleeve shirt or jumper. </li>
                </ul>

                <p className='purple-bold'>[9] Look For The Bare Necessities</p>
                <p>Describing characters’ going about ordinary daily rituals: including washing, sleeping, eating, going to the toilet, etc; </p>
                <ul>
                  <li>Again, describe these only if something of plot-relevant interest happens during these events.</li>
                </ul>

                <p className='purple-bold'>[10] The Roads Not Travelled</p>
                <p>Listing or rationalising the options available to the protagonist which they did not take. </p>
                <ul>
                  <li>You would not note untaken options to fill space, but to say something about the character, by their denial of the choice.</li>
                  <ul>
                    <li>For instance, if a character makes a dangerous choice, you might note the existence of a safer option to say the character is reckless or a daredevil.</li>
                  </ul>
                </ul>

                <p className='purple-bold'>[11] Me Write Pretty One Day</p>
                <p>Stay away from everything that is fancy or pretty or grandiloquent: "Illumination is required to be extinguished in this premises at the conclusion of business." When you really mean: "Storelights must be put out at the end of the day."  <a href="#f4"><sup>4</sup></a></p>
                <u>The Craft of Writing, William Sloane.</u>

                <h5>18.1.4 	Never use Hyperbole</h5>

                <p>Examples: ‘only’, ‘always’, ‘eternally’; ‘forever’; words ending in ‘-iest’ like ‘funniest’.</p>
                <p>Here’s my tip: Avoid it...most of the time. </p>
                <p>Note that hyperbole may be appropriate for certain dialogue, e.g. teenager-isms, or irony, or misleading information, e.g. ‘Big Brother knows everything.’ In other words, you can use hyperbole to convey something other than the factual truth of the statement. Some examples: You can use hyperbole if it reflects the character’s heightened mental state, e.g.:</p>

                <p><strong>Fear:</strong></p>
                <ul>
                  <li><u>YES:</u>There was a gunshot. I looked down. There was blood everywhere.  </li>
                  <li><u>NO:</u>There was a gunshot. I looked down. There was a small mark on my leg, running a thin, but steady trail of blood.  </li>
                </ul>

                <p><strong>love:</strong></p>
                <ul>
                  <li><u>YES:</u>I asked if she’d be there. He nodded. That’s when I realised getting an invitation to that party was everything.   </li>
                  <li><u>NO:</u>I asked if she’d be there. He nodded. That’s when I realised getting an invitation to that party was very important, but if I didn’t it wouldn’t be the end of the world, either.    </li>
                </ul>

                <h5>18.1.5 	Bombastic Behaviours and Grandiloquent Gesticulations</h5>
                <p>Over the top (not to mention cliché) descriptions that fly right past reality and fall into pantomime:</p>
                <p>Examples:</p>
                <ul>
                  <li><i>Threw back his head and burst into laughter</i> (the slapping of a knee is also discouraged);</li>
                  <ul>
                    <li>Just another on bombastic laughter: you’re implying what was said was really, extraordinarily funny, so you stand to embarrass yourself if (and more likely) it’s actually not. Conversely, sometimes understatement can be funnier than effectively pointing to a joke and saying ‘look how funny that is’.</li>
                  </ul>
                  <li>She opened her mouth in a silent scream;</li>
                  <ul>
                    <li>Zombies stare silently with eyes and mouth agape. People, generally, do not.</li>
                  </ul>
                  <li>"It's all over!" he said, throwing his arms into the air;</li>
                  <ul>
                    <li>d.	It’s difficult to like people who inject such sarcastic drama into everyday speech;</li>
                  </ul>
                  <li>Eye-based pantomimes:</li>
                  <ul>
                    <li>An adult rolling their eyes is probably a no-no, as is any winking, or wiggling of the eyebrows or other ocular funny business;</li>
                  </ul>
                  <li>Shaking one's head after thinking something strange;</li>
                </ul>

                <p>Many of the above rules (such as preferring ‘said’) should only be broken in exceptional circumstances, i.e. you need a really compelling reason. And maybe not even then.</p>

                <h5>18.1.6 	Starve the Ego, Feed the Soul</h5>
                <div className="p-3 mb-3 bg-light rounded">
                  <p className="mb-0"><i>“Did I feel a twinge in my little toe, or didn’t I?” </i> asks every character of Mr. Joyce or of Miss Richardson or M. Proust. . . . Through thousands and thousands of pages Mr. Joyce and Miss Richardson tear themselves to pieces, strip their smallest emotions to the finest threads, till you feel you are sewed inside a wool mattress that is being slowly shaken up, and you are turning to wool along with the rest of the woolliness.</p>
                  <br></br><p><i>It’s awful. And it’s childish. It really is childish, after a certain age, to be absorbedly self-conscious.</i></p><i>— D. H. Lawrence</i>
                </div>

                <p>Introspection has utility, however overreliance positions the narrator (who may or may not also be the main character) as an obstacle to the reader’s engagement with the story. Your main character is not the story.</p>
                <p>Maybe more than any other writing sin, over-introspective writing flags amateur writing, as if the writing is yet to graduate from personal 'diary' writing. If you avoid it, you immediately set your writing skills apart. </p>
                <p>Contrast introspection with concrete description: </p>
                <p><strong>Introspection: </strong>is inward-looking and concerned with thoughts and feelings. </p>
                <p><strong>Concrete description: </strong>is outward-looking and concerned with facts and things.  </p>
                <p>When concrete description happens, the plot/action keeps moving. When introspection happens, the plot/action pauses (to allow the character to stop and think). Concrete description is also referred to as ‘showing’, whereas introspection is never ‘showing’ – it is always ‘telling’.  For these reasons, introspection should not be a dominant form of conveying information. </p>

                <p className='purple-bold'>Introspection has two forms:</p>
                <p><u>(1) Pure:</u></p>
                <p>This is the worst form, also sometimes referred to as ‘inner monologue’, where the narrative predominantly conveys the main character’s thoughts and feelings through self-reflection, over all other ways of conveying that information (e.g. behaviour, events, dialogue, etc). Sadly, a lot of contemporary popular writing (‘airport literature’) has just become long paragraphs of inner monologue. </p>
                <p><u>(2) Diluted:</u></p>
                <p>The narrative is not necessarily trapped in the main character’s head, but has a disproportionate fixation with the main character.</p>

                <p><u>POV isn't determinative: </u>Introspection is not a curse exclusive to ‘1st person POV’; it can happen with any POV. You can write a 1st person POV story clean of most traces of introspection. Likewise, you can write a 3rd person POV story filled with it. It’s not about what camera you use, it’s about what your camera looks at.</p>
                <p>To illustrate what introspection is (and the damage is causes); example of starting sentences with 'I...' </p>

                <p className="code-left">
                  <code><i>I sniffed the air. I could detect a faint smell of chemical reagents and traces of something more acrid—chlorine? Instinctively I searched the ceiling for the grills over the air-vents: strips of paper attached to the bars were fluttering gently; the air was circulating normally. In order to make a relatively free space around the bed, between the bookshelves and the locker, I cleared two chairs of their litter of books, instruments, and tools, which I piled haphazardly on the other side of the room. I pulled out a bracket to hang up my spacesuit, took hold of the zip- fastener, then let go again. Deterred by the confused idea that I was depriving myself of a shield, I could not bring myself to remove it. Once more I looked round the room. I checked that the door was shut tight and that it had no lock, and after a brief hesitation I dragged some of the heaviest boxes to the doorway. Having built this temporary barricade, I freed myself from my clanking armor in three quick movements. A narrow looking-glass, built into the locker door, reflected part of the room, and out of the corner of my eye I caught sight of something moving. I jumped, but it was only my own reflection.  </i></code><a href="#f5"><sup>5</sup></a></p>
                <u>Solaris, by Stanislaw Lem</u>

                <p>There are arguments that a claustrophobic ‘I-obsessed’ style promotes the themes, or is ironic, but the practical reality is, it makes the reading less enjoyable. Surely there is another way to convey the themes that is less tedious.</p>
                <p>Here's an egregious example: </p>

                <u> ‘The Dark Lake’ by Sarah Bailey</u>

                <p className="code-left-black">
                  <i><span className='highlight'>There were a few minutes when I was alone with her in the autopsy room. I felt wild. Absent. Before I could stop myself I was leaning close to her, telling her everything. The words draining out of me as she lay there. </span><span className='cyan-text-span'>Her long damp hair hanging off the back of the steel table. Glassy eyes fixed blindly on the ceiling. </span>She was still so beautiful, even in death.</i></p>
                <p className="code-left-black">
                  <i>Our secrets circled madly around the bright white room that morning. <span className='highlight'> Rocking back and forth on my heels as I stood next to her, I knew how far in I was again, how comprehensively her death could undo me. I looked at Rosalind Ryan properly for the last time before breathing deeply, readying myself, letting her pull me back into her world, and I sank down, further and further, until I was completely, utterly under.</span></i></p>

                <p>The yellow is introspection (bad), the blue is concrete description (good). </p>
                <p>Imagine you are the above narrator/character. You walk out of the autopsy room. An investigating detective stops you in the hallway:</p>

                <p className="code-left">
                  <p><strong>Detective: </strong>“I’m required to ask you some questions concerning the identity of the deceased. Did you get a look at the body?”</p>
                  <p><strong>You: </strong>“Yes.”</p>
                  <p><strong>Det:  </strong>“Can you tell me: what colour was the hair? What shade was the skin? The deceased’s age, or your best estimate. Was the mouth open or closed? And was there a sheet covering any part of the body?” </p>
                  <p><strong>*record scratch sound effect*</strong></p>
                </p>

                <p>Introspection is a technique somewhat removed from the reality of your story (as I said, the plot stops while it happens). This makes it enormously unforgiving – at worst, psychotic – during scenes where something highly unusual or interesting is happening. ‘The Dark Lake’ example contains one of the most interest-grabbing, unusual set ups for a story, whether horror or any genre. Someone is alone in an autopsy room, with a dead body. If it were you, what is the first thing you would notice? </p>
                <ul>
                  <p>The body</p>
                  <p>The face (the expression; do they look peaceful?)</p>
                  <p>The identity (if it’s someone you know; how do you know it’s really them?)</p>
                  <p>The condition of the hair (style, neatness, signs of damage)</p>
                  <p>The condition of the body (skin colour; signs of trauma)</p>
                  <p>Are they naked? Are they exposed or sheeted?</p>
                  <p>Any unexpected observations</p>
                </ul>

                <p>That’s a lot of information, and all of it is best suited to concrete description, not introspection. But if you look at the ‘Dark Lake’ example, the author jumps to the character’s thoughts and feelings, briefly describes ‘long’ hair (redundant anyway, as it was already implied by the hair ‘hanging’ off the back of the table), before jumping straight back to introspection again. The interior, emotional reaction should come later, when the main character has the time to think, and is not standing right in front of an object of interest. </p>
                <p>Compare the above with this excerpt:</p>
                <u>Michael Crichton’s ‘Sphere’</u>

                <p className="code-left-black">
                  <i><span className='highlight'>Norman felt a sudden chill. In his work with the FAA, he had been exposed to every sort of horror.  </span><span className='cyan-text-span'>Once, in Chicago, at a crash site that extended over a whole farm field, he had stepped on something squishy. He thought it was a frog, but it was a child's severed hand, palm up. Another time he had seen a man's charred body, still strapped into the seat, except the seat had been flung into the back yard of a suburban house, where it sat upright next to a portable plastic kiddie swimming pool. And in Dallas he had watched the investigators on the rooftops of the suburban houses, collecting the body parts, putting them in bags . . .  </span></i></p>
                <p className="code-left-black">
                  <i> Working on a crash-site team demanded the most extraordinary psychological vigilance, to avoid being overwhelmed by what you saw. But there was never any personal danger, any physical risk. The risk was the risk of nightmares. </i></p>

                <p>This is what good description looks like. Notice the minimal personal description (yellow) sets up what the protagonist is feeling, and then launches into concrete description (blue) to back it up with facts, so that by end, you feel what the protagonist is feeling – his ‘chill’ becomes your chill. Also notice once it has done this, the second (uncoloured) paragraph uses the second person pronoun (‘you’) effectively because now ‘you’ understand what it’s like. </p>
                <p>One last observation: recall in the Dark Lake example how many times the protagonist’s personal feelings are explicated. Here, the author sidesteps around telling us directly how protagonist, Norman, personally feels about the described events – not ‘tormented’, ‘haunted’, ‘horrified’, or even ‘wild’ and ‘absent’ --  but, we are given more than enough concrete information to work it out for ourselves. The author is more concerned that we – not the protagonist – feel the correct emotion for the circumstance.</p>
                <p>Lastly, for interest, this is how you should write an autopsy scene:</p>

                <p className="code-left-black">
                  <i><span className='cyan-text-span'> The coroner rose from his seat and stood beside the dead man.  </span>    </i></p>
                <p className="code-left-black">
                  <span className='cyan-text-span'><i> Lifting an edge of the sheet he pulled it away, exposing the entire body, altogether naked and showing in the candle- light a clay-like yellow. It had, however, broad maculations of bluish black, obviously caused by extravasated blood from contusions. The chest and sides looked as if they had been beaten with a bludgeon. </i></span></p>
                <p className="code-left-black">
                  <span className='cyan-text-span'><i> There were dreadful lacerations; the skin was torn in strips and shreds. </i></span></p>
                <p className="code-left-black">
                  <span className='cyan-text-span'><i> The coroner moved round to the end of the table and undid a silk handkerchief which had been passed under the chin and knotted on the top of the head. When the handkerchief was drawn away it exposed what had been the throat. Some of the jurors who had risen to get a better view repented their curiosity and turned away their faces. Witness Harker went to the open window and leaned out across the sill, faint and sick. Dropping the handkerchief upon the dead man's neck the coroner stepped to an angle of the room and from a pile of clothing produced one garment after another, each of which he held up a moment for inspection. All were torn, and stiff with blood.  </i></span><a href="#f6"><sup>6</sup></a></p>
                <u>‘That Damned Thing' by Ambrose Bierce.</u>
                <p>Obviously you don’t have to write your autopsy scene exactly like that, but it’s an example of what information is important and should be foregrounded.</p>

                <p className='purple-bold'>I.	Objects, Others and Outsides</p>
                <p>This is a mantra you can use to combat the temptation to write introspectively: ‘objects, others and outsides,’ meaning:</p>

                <p><u>(1) Objects:</u></p>
                <ul>
                  <li>What physical things are in the scene? What do they look like or what are they doing? Try describing inanimate objects and things as if they had intention and agency, e.g. “The sun slept behind the hills,” “the river dashed forward and embraced the sea,” “the wind crashed into him,” “a leaf let go and parachuted to the ground.”  This will make it seem less like your protag is the only living, thinking entity in a dead world.</li>
                </ul>

                <p><u>(2) Others:</u></p>
                <ul>
                  <li>What are other characters doing? Who can be seen from where the protagonist is standing? What narratives can you create from their behaviour? Try making those other characters active (cause), and making your protagonist reactive (effect) as opposed to your protag acting in an isolated self-referential bubble of activity;</li>
                </ul>

                <p><u>(3) Outsides:</u></p>
                <ul>
                  <li>What sensory stimuli is your protagonist aware of? What is coming into your protagonist’s world from ‘outside’ and how is it shaping or changing your protagonist’s behaviour or thoughts, or upsetting his/her plans?   </li>
                </ul>

                <p>Build description from this information, making sure to remove all first person references (e.g. change “I saw a greenhouse on the hill…” to “There was a greenhouse on the hill…”). This allows your reader to be the ‘first person’ experiencing, for themselves, the story, as if they were a character. Don’t self-refer to your protag unless strictly necessary – i.e. the sentence wouldn’t make sense otherwise.</p>

                <p className='purple-bold'>II.	Place the Reader</p>
                <p>Another method to combat interior writing is to imagine the reader is a character in the story. Sometimes you hear this referred to as giving the reader/viewer an ‘access point.’ </p>
                <div className="p-3 mb-3 bg-light rounded">
                  <p className="mb-0"> "Experiencing a work of fiction through one of its characters is the all-absorbing, self-obliterating joy of reading. It is the core of the child's experience. Who has never been Alice in Wonderland, or Winnie the Pooh, or Jim Hawkins in the apple barrel on his way to Treasure Island?"<a href="#f7"><sup>7</sup></a></p>
                  <p></p><i>— William Sloane, The Craft of Writing.</i>
                </div>
                <p>Depending where you situate your reader, description will change.</p>
                <p>See this example: </p>

                <p className="code-left">
                  <code><i>The Yala swamp is a huge mass of dense papyrus standing four metres high covering thousands of hectares of soggy ground where the river empties into Africa's largest lake. Impenetrable except by boat down its narrow meandering water channels, the swamp is, or rather was, rich in wildlife. It hides a number of islands and a small lake they call a 'living museum', because its reedy waters are a last refuge for many fish species. Out there somewhere too is a village of about a thousand people, on an island covering some tens of hectares. The reclusive island inhabitants say they will fight to the death, should invaders get far. No outsider has got deeper in than one kilometre.
                  </i></code><a href="#f8"><sup>8</sup></a></p>
                <p className="code-left">
                  <code><i>I will be the first.
                  </i></code></p>

                <p><strong>Analysis:</strong></p>
                <ul>
                  <li>In the first sentence we are placed outside the swamp, maybe even above it (as in a plane), given a view of its size – which wouldn’t be apparent to us if we were placed inside the swamp. This positions us as an outsider;</li>
                  <li>The second sentence begins by telling us why we are outside the swamp: it is “impenetrable except by boat…”</li>
                  <li>We then get description of things found in the swamp, suggesting passage has been made in, telling us the narrator has come in on boat.</li>
                  <li>The sentence “Out there somewhere too...” suggests the narrator has not gone very far in the swamp; as the next paragraph explains, the island inhabitants pose a threat to ‘invaders’;</li>
                  <li>In the final sentence, we get our first personal pronoun, yet even up to this point we have learned a lot about the character by relative placement.</li>
                </ul>

                <p className='blue-bold'>II.I 	Book Cover Placement</p>
                <p>You can see the placement effect in action on book covers and movie posters. This is not relevant for most writers as the publisher chooses the book cover artist and cover. But it’s still worth knowing.</p>
                <p>As a general rule, there should be a person on the book cover. That’s the reader’s first access point into the story. Even a suggestion of a person (clothing, personal possessions, footprints, a shadow or a skeleton) works, for instance, a car driving on a road suggests a driving occupant, even if we can’t literally see them.</p>
                <p>Taking the above paragraph example: A picture of a swamp would not place the reader relative to the swamp. You need to show a person or even a row boat to give the reader a sense of size and human presence. You need to make the reader wonder how they would feel going into the swamp. The whole point of placement is to elicit the question: ‘How would you feel in this situation?’</p>
                <p>Placement in imagery can be very subtle, and still be powerfully effective. A poster for the movie <i>It Comes At Night</i>shows the back of an alarmed dog barking into a dark forest. There is no person in sight but the angle and rope leash suggests we are standing right behind the dog, as if it’s our dog. This gives us a visceral access point into the scene:</p>

                <img src="../../public/images/itcomesatnight.jpg" alt="It Comes At Night Poster" className="img-fluid" />

                <p>This was likely ‘inspired’ by Dragan Bibin’s 2015 painting, <i>Deimos</i>,  which illustrates the same effect:</p>
                <img src="../../public/images/Deimos.jpg" alt="Deimos Painting" className="img-fluid" />

                <h5>18.1.7 	Negative Description</h5>
                <p>Description should be <u>positive</u>: it tells you what something is like, or how it is, or what happened, i.e. it describes what is actually there. David Carroll says, <i>"our psyches prefer affirmation to disaffirmation. They prefer to learn what did happen, not what didn't." </i><a href="#f9"><sup>9</sup></a></p>
                <u>A Manual of Writer's Tricks, David Carroll.</u>

                <p>But note, description can also be negative: describing something by telling you what it is <i>not</i> like, or how it <i>isn’t,</i> or what <i>didn't</i> happen, or what is <i>not</i> there. It is then up to you to deduce what remains as what actually happened.</p>
                <p>In almost every case, you want to use ‘pos’ description: just come out and say what something is, is like, or what happened. Use neg description only for necessary effect; i.e. it adds something essential which positive description does not provide. </p>

                <p><i>Example:</i></p>
                <p className='indent-text-1'>This is the way the world ends. Not with a bang but a whimper.</p>
                <p>The above neg works because if you remove the neg description, all you have is ‘the world ends with a whimper,’ which is vague by itself and does not carry the same weight. The neg description also suggests the commonly held belief, which is overturned with the positive description. This conveys the sense that, while odd, the whimper did, in fact, happen. </p>

                <p><i>Example:</i></p>
                <p className='indent-text-1'>I must confess I hadn’t done any fitness training, I was playing shit and we were 3–0 down and playing third from bottom–we are bottom. There was no singing from the crowd, just a bark from a random stray dog. <a href="#f10"><sup>10</sup></a></p>
                <u>In Stitches: The Highs and Lows of Life as an A & E Doctor, by Nick Edwards.</u>
                <p>The negative description here (‘There was no singing…’) works to add humour. </p>
                <p>For comparison, here are some bad examples of negative description: <a href="#f11"><sup>11</sup></a></p>

                <p><i>Example 1: </i></p>
                <p className='indent-text-1'>For a minute he thought it was an optical illusion, because <i>instead of being thrown back onto the street </i>the woman melted into the wooden curlicues... </p>
                <u>From the novel ‘HEX’ by Thomas Olde Heuvelt.</u>
                <p>Here, the woman is hit by a big organ on wheels. The example is so bizarre there is no normal precedent for this situation (what on earth normally happens to someone who is hit by a big organ on wheels?). I have no idea whether ‘being thrown back’ is what you’d normally expect in this situation, and there aren’t enough details to specify anyway (speed and size of organ?). Therefore, being no more or less likely, the neg description does no work at all. </p>

                <p><i>Example 2: </i></p>
                <p className='indent-text-1'>Although there wasn’t a bump to be heard or a trickle of blood to be seen when Katherine was struck... </p>
                <u>From the novel ‘HEX’ by Thomas Olde Heuvelt.</u>
                <p>Here, two separate instances of negative description are used in the same sentence – this is too many (if even one is necessary). Don’t try to engage the reader in a guessing game.  </p>
                <p>Try to remove the instances of neg description; alternatively, make negative description short and limited to one per sentence, for example:</p>

                <p className='indent-text-1'><i>It was an optical illusion, he thought. The woman just seemed to melt into the wooden curlicues.<p>There was no sound when Katherine was struck. There was no blood.</p></i></p>
                <p>In fact, the fixed versions would make a great story opener:</p>
                <p className='indent-text-1'> <i>There was no sound when Katherine was struck. There was no blood. It was an optical illusion, he thought. The woman just seemed to melt into the wooden curlicues. </i> </p>

                <p>Likewise, David Carroll advises you change negative phrasing to its positive equivalent, and provides some examples: <a href="#f12"><sup>12</sup></a></p>
                <u>A Manual of Writer&apos;s Tricks, David Carroll.</u>

                <ol>
                  <li><span className='red-text-span'>NEGATIVE PHRASING:</span> &quot;He was not good enough.&quot;<br></br>
                    <span className='green-text-span'>POSITIVE PHRASING:</span> &quot;&quot;He was inadequate.&quot;</li>
                  <li><span className='red-text-span'>NEGATIVE PHRASING:</span> &quot;His hands were not clean.&quot;<br></br>
                    <span className='green-text-span'>POSITIVE PHRASING:</span> &quot;His hands were dirty.&quot;</li>
                  <li><span className='red-text-span'>NEGATIVE PHRASING:</span> &quot;Rover was not good.&quot;<br></br>
                    <span className='green-text-span'>POSITIVE PHRASING:</span> &quot;Rover was bad.&quot;</li>
                </ol>

                <h5>18.1.8 	There are no Coincidences</h5>
                <p>Coincidence is a hallmark of bad fiction. Think of the car that breaks down in front of the haunted house, necessitating a night’s stay. Compare to the protagonist in Stephen King’s ‘1408,’ who voluntarily (insistently) stays in the haunted hotel for personal, character-driven gain. There is no coincidence in the latter story, and better for it.</p>
                <div className="p-3 mb-3 bg-light rounded">
                  <p className="mb-0">“…[S]earch for a way by which your character can set out seeking the desired event, person or information. If your character wants something, and works hard to get it, it isn&apos;t coincidence anymore. Having provided your characters with sufficient background and motivation for their actions, and then by making sure coincidence doesn&apos;t rule the day, you&apos;ll be well along on the way to better story logic.”<a href="#f13"><sup>13</sup></a></p>
                  <p></p><i>— The 38 Most Common Fiction Writing Mistakes (And How To Avoid Them) [Jack Bickham]</i>
                </div>

                <h5>18.1.9 	Writing In Writing</h5>
                <p>Avoid ‘recursive text’ -- transcriptions of forms of writing within your story, such as: diary entries, letters, emails, etc, unless absolutely necessary.</p>
                <p>Why?</p>
                <p>Firstly, you’re already planning writing a story. Worry about your main writing before getting into writings in writings. At worst it’s a distraction, not only for you as author, but for your reader, who will get annoyed at jumping back and forth between different ‘levels’ of text like it’s Inception.</p>
                <p>Secondly, Compare with the content of phone calls which, like face-to-face dialogue, can be severely abridged to create an artificial sense of realism, while only giving you ‘the facts’ that you need. Letters and diary entries cannot, without destroying the verisimilitude of reading an actual letter, or other.</p>

                <p className="code-left-black">
                  <i>In any case, I was left to share the farm with the Poroths’ seven cats and the four hens they’d bought last week. From my window I could see Bwada and Phaedra chasing after something near the barn; lately they’d taken to stalking grasshoppers. As I do every morning, I went into the farmhouse kitchen and made myself some breakfast, leafing through one of the Poroths’ religious magazines, and then returned to my rooms out back for some serious reading. I picked up Dracula again, which I’d started yesterday, but the soppy Victorian sentimentality began to annoy me; the book had begun so well, on such a frightening note — Jonathan Harker trapped in that Carpathian castle, inevitably the prey of its terrible owner-that when Stoker switched the locale to England and his main characters to women, he simply couldn’t sustain that initial tension. </i></p>
                <p className="code-left-black">
                  <i>With the Poroths gone I felt a little lonely and bored, something I hadn’t felt out here yet. Though I’d brought shelves of books to entertain me, I felt restless and wished I owned a car; I’d have gone for a drive, perhaps visited friends at Princeton. As things stood, though, I had nothing to do except watch television or take a walk. </i></p>
                <p className="code-left-black">
                  <i>I followed the stream again into the woods and eventually came to the circular pool. There were some new animal tracks in the wet sand, and, ringed by oaks, the place was very beautiful, but still I felt bored. Again I waded into the center of the water and looked up at the sky through the trees. Feeling myself alone, I began to make some of the odd signs with face and hands that I had that evening in the tree —but I felt that these movements had been unaccountably robbed of their power. Standing there up to my ankles in water, I felt foolish. </i></p>
                <p className="code-left-black">
                  <i>Worse than that, upon leaving it I found a red-brown leech clinging to my right ankle. It wasn’t large and I was able to scrape it off with a stone, but it left me with a little round bite that oozed blood, and a feeling of-how shall I put it?-physical helplessness. I felt that the woods had somehow become hostile to me and, more important, would forever remain hostile. Something had passed. </i></p>

                <p>This is one of the protagonist’s diary entries from the short story ‘The Events on Poroth Farm,’ by T.E.D Klein. Needless to say, real diary entries sound nothing like this, which takes you out of the story. A more believable diary entry would go —</p>
                <p className="code-left-black">
                  <i>Poroths went into town today. Had breakfast in the farmhouse. Read Dracula – more annoying than scary. Then I got bored so I went out for a walk into the woods. Found a circular pond and animal tracks in the sand. Rings of oak trees. Very beautiful but lonely. I waded into the pond and did that hand signal thing at the sky again – no idea why. Just felt like it. </i></p>
                <p className="code-left-black">
                  <i>A red leech got on my leg from the pond and left a bite mark. Makes me think twice about going in the woods again.   </i></p>
                <p>—And that’s not good fiction writing.</p>
                <p>The only reason the diary entry format is excused above is to allow the suggestion that protagonist has died since we learn of his story (as if we have found his diary). Otherwise, he would have to be ‘alive’ to tell us directly.</p>

                <h5>18.1.10 	Clichés</h5>
                <p>Avoid ALL clichés. Avoid them even in dialogue, even if you think the character would say it in real life. Your story is not real life, and your character is not a real person. <a href="#f14"><sup>14</sup></a></p>
                <p>As a general rule, if it sounds cliché, it probably is. If you wrote it on ‘autopilot’ it’s probably a cliché. Clichés cannot be exhaustively list clichés; they are constantly coming into existence, therefore, watch out for less obvious clichés -- William Sloane  names a few, such as: </p>
                <u>The Craft of Writing, William Sloane.</u>
                <ul>
                  <li>"a premonition of autumn in the air,"</li>
                  <li>"waited with anticipation," </li>
                  <li>"but for a few faded bulletins,"</li>
                  <li>"in keeping with the general excitement," </li>
                  <li>"vibrant with her joy of being alive," </li>
                  <li>"bespoke dignity and poise," </li>
                  <li>"secretly amused," </li>
                  <li>"look in vain," </li>
                  <li>"echoed through the empty corridors," </li>
                  <li>"rapidly becoming a nightmare," </li>
                  <li>"dire consequences."</li>
                </ul>

                <p>Ben Yagoda  points out that many clichés modernly derive from advertising and PR catchphrases, like ‘new and improved’ and ‘the secret to [brand]...’ ‘reinvent’ ‘new strategy’ and ‘it changed my life.’ He provides a list of words and phrases to avoid which he identifies as – if not already clichés – quickly heading that way:<a href="#f15"><sup>15</sup></a></p>
                <u>How to Not Write Bad, Ben Yagoda.</u>
                <ul>
                  <li>That being said </li>
                  <li>Iconic  </li>
                  <li>Viral </li>
                  <li>Curate   </li>
                  <li>Deal breaker  </li>
                  <li>Difference maker  </li>
                  <li>The decider  </li>
                  <li>Heavy lifting  </li>
                  <li>High-maintenance  </li>
                  <li>Perfect storm </li>
                  <li>Brick and mortar  </li>
                  <li>Tsunami  </li>
                  <li>Surreal   </li>
                  <li>The [choose letter of the alphabet]-word  </li>
                  <li>Not so much (as in I like him. Her? Not so much) </li>
                  <li>McMansions, McJobs, etc.  </li>
                  <li>[Anything] on steroids  </li>
                  <li>Bucket list  </li>
                  <li>Kerfuffle  </li>
                  <li>Badass  </li>
                  <li>Spoiler alert  </li>
                  <li>The Man (as in working for)  </li>
                  <li>Back in the day  </li>
                  <li>Not your father’s [anything]  </li>
                  <li>Really? (to indicate skepticism)  </li>
                  <li>Artisanal  </li>
                  <li>Plated   </li>
                  <li>House-made   </li>
                  <li>Kick the can  </li>
                  <li>down the road  </li>
                  <li>Meme [anything]   </li>
                  <li>2.0   </li>
                  <li>Man-kini, man-cave, man-date, manorexia, or man-anything else  </li>
                  <li>Get off my lawn!  </li>
                </ul>

                <p>Politics and The English Language George Orwell has many helpful writing tips.</p>

                <p><u>Dying Metaphors:</u> Metaphors overused to the point of losing evocative imagery, i.e. cliches:</p>
                <ul>
                  <li>Ring the changes on; </li>
                  <li>take up the cudgel for; </li>
                  <li>toe the line;</li>
                  <li>ride roughshod over; </li>
                  <li>stand shoulder to shoulder with; </li>
                  <li>play into the hands of;</li>
                  <li>no axe to grind;</li>
                  <li>grist to the mill;</li>
                  <li>fishing in troubled waters;</li>
                  <li>on the order of the day;</li>
                  <li>Achilles’ heel;</li>
                  <li>swan song;</li>
                  <li>hotbed. </li>
                </ul>

                <p>Operators or Verbal False Limbs: Verbs and nouns padded with extra words, making what should be a single word, an entire phrase or sentence:</p>
                <ul>
                  <li>render inoperative; </li>
                  <li>militate against; </li>
                  <li>make contact with;</li>
                  <li>be subjected to; </li>
                  <li>give rise to; </li>
                  <li>give grounds for;</li>
                  <li>have the effect of;</li>
                  <li>play a leading part (role) in;</li>
                  <li>make itself felt;</li>
                  <li>take effect;</li>
                  <li>exhibit a tendency to;</li>
                  <li>serve the purpose of;</li>
                  <li>by examination of; </li>
                </ul>

                <p>Politically meaningless words: Words used to argue political point end up meaning whatever the user wants them to mean, more often, nothing.</p>
                <ul>
                  <li>Patriotic;</li>
                  <li>Freedom;</li>
                  <li>Persecution;</li>
                  <li>Values;</li>
                  <li>Human;</li>
                  <li>Natural;</li>
                  <li>Class; </li>
                  <li>totalitarian;</li>
                  <li>science;</li>
                  <li>progressive;</li>
                  <li>reactionary;</li>
                  <li>bourgeois;</li>
                  <li>equality</li>
                  <li>democracy;</li>
                  <li>socialism;</li>
                  <li>realistic;</li>
                  <li>justice </li>
                </ul>

                <p>Orwell also provides a handful of general tips: </p>
                <ul>
                  <li>Never use a metaphor, simile, or other figure of speech which you are used to seeing in print.</li>
                  <li>Never use a long word where a short one will do.</li>
                  <li>If it is possible to cut a word out, always cut it out.</li>
                  <li>Never use the passive where you can use the active.</li>
                  <li>Never use a foreign phrase, a scientific word, or a jargon word if you can think of an everyday English equivalent.</li>
                </ul>

                <h5>18.1.11 	Prologues and Epilogues</h5>
                <p>Don’t write prologues or epilogues. Prologues infringe the ‘start as late as possible’ rule and are too often abused as means of setting up your story. Similarly, Epilogues are abused as a way to cram a bunch of last-minute shit in after the story has ended – just end your story and keep the reader wondering.<a href="#f16"><sup>16</sup></a></p>
                <u>Hooked: Write Fiction That Grabs Readers at Page One & Never Lets Them Go, Les Edgerton.</u>

                <h5>18.1.12 	Expletives</h5>
                <p>Hart  advises to avoid 'expletives' where possible. This doesn’t refer to swear words (which also should be avoided) but refer to words which don’t add any meaning to a sentence, and include "there was," "it is," "it was," etc. Too many slow down your writing. <a href="#f17"><sup>17</sup></a></p>
                <u>Storycraft: Complete Guide to Writing Narrative Nonfiction, Jack Hart.</u>
                <p>For example:</p>

                <p className='indent-text-1'><u>With Expletives: </u>There were two aeroplanes on the runway.
                  <br></br><u>With Expletives: </u>Two aeroplanes idled on the runway.</p>

                <p className='indent-text-1'><u>With Expletives: </u>The plane began to circle.
                  <br></br><u>With Expletives: </u>The plane circled.</p>

                <h5>18.1.13 	Double Words</h5>
                <p>What is wrong with this paragraph?</p>
                <p className='indent-text-1'><i>I went over to her place to see how she was getting on on my way home one evening. Once I got there, the patient gave me a list of symptoms she had had. Scanning it, I gave her her list back. I didn't think she was suicidal then, but later that evening when I realised it it was too late. At the time, I was merely thinking 'What she is is a time waster.'</i></p>
                <p>I went over to her place to see how she was getting on on my way home one evening. Once I got there, the patient gave me a list of symptoms she had had. Scanning it, I gave her her list back. I didn't think she was suicidal then, but later that evening when I realised it it was too late. At the time, I was merely thinking 'What she is is a time waster.'</p>
                <p>It only takes two seconds to restructure the sentences, and reads better for it, e.g.</p>
                <p className='indent-text-1'><i>On my way home one evening, I went by her place to see how she was getting on. Once there, the patient gave me a list of her symptoms. I scanned it and gave it back to her, merely feeling irritated by her wasting my time. Later that evening, I realised she had been suicidal, but by then it was too late.</i></p>
                <p>Also see this version from the song 'Que será será' -- <i>Whatever will be, will be.</i> Ironically, as 'Que será será' itself means ‘whatever will be, will be,’ it’s a fourfold repetition. </p>

                <h2 id="post-18-2" className="blog-post-title">18.2: Do This!</h2>
                <p>Now for something completely different: It's a collection of tips for writing in general.</p>

                <h5>18.2.1 	Most Important Elements of Fiction Writing</h5>
                <p className='purple-bold'>(I) Substance</p>
                <p>Your writing is actually about something meaningful and significant. There is a good story, which is not overshadowed by a loud, grandiose self-important style.</p>

                <p className='purple-bold'>(II) Objectivity</p>
                <p>Your writing gets to the nature of things as they are, not as they are not, or could be or should be, or you would wish them to be. Like a historicist, you should prioritize description according to reliability; concrete facts, present-time factual observations, then recollections, and feelings and inferences last.</p>

                <p className='purple-bold'> (III) Originality</p>
                <p>Your story is new. You do not plagiarise, or rely on parody, homage and reference as a substitute for originality.</p>
                <p>Bob Mayer says: <i>“Try to make something new from proven strategies and techniques.”</i></p>

                <p className='purple-bold'>(IV) Economy</p>
                <p>Your writing uses the least words for the most effect.</p>

                <h5>18.2.2 	Punctuation: </h5>
                <p>What's the point of punctuation?</p>
                <div className="p-3 mb-3 bg-light rounded">
                  <p className="mb-0">“If words are the flesh, muscle, and bone of prose, punctuation is the breath. In support of the words you’ve carefully selected, punctuation is your best means of conveying to the reader how you mean your writing to be read, how you mean for it to sound. A comma sounds different than a semicolon; parentheses make a different noise than dashes.” <a href="#f18"><sup>18</sup></a></p>
                  <p></p><i>— Dreyer’s English, Benjamin Dreyer.</i>
                </div>

                <p>Punctuation is a set of rules denoting where to pause or provide emphasise to text. Burnett helpfully calls it ‘a breathing aid,’ as well as for ‘emphasis in style, rhythm or emotion.’ </p>
                <u>Caroll Burnett</u>

                <p>Flesch provides a basic guide for using punctuation:</p>
                <u>Robert Flesch</u>

                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Between Words</th>
                        <th>Between Sentences</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Normal pause</th>
                        <td>White space</td>
                        <td>Period</td>
                      </tr>
                      <tr>
                        <th>Shorter pause</th>
                        <td>Hyphen</td>
                        <td>Semicolon (or colon)</td>
                      </tr>
                      <tr>
                        <th>Longer pause</th>
                        <td>Dash</td>
                        <td>Paragraph</td>
                      </tr>
                      <tr>
                        <th>Normal stress</th>
                        <td></td>
                        <td>Normal type (or writing)</td>
                      </tr>
                      <tr>
                        <th>Unstressed</th>
                        <td></td>
                        <td>Parentheses (or two dashes)</td>
                      </tr>
                      <tr>
                        <th>Stressed</th>
                        <td></td>
                        <td>Italics (or underlining)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>No writer actually stringently adheres to the rules of punctuation. However, average and bad writers break the rules at the wrong times, whereas good and great writers break the rules at the right times. Which rules you break identifies your writing ‘voice’.</p>
                <p>Punctuation: it isn't just for neatness in fiction writing; it affects pacing. A comma will provide a short break in speech or events, a full stop will effect a longer break. Think about how fast things are happening (or how fast your POV – point of view – character is noticing events) and in what order they’re happening, and whether the events are causatively linked.</p>
                <p>Commas create a pause, slowing down your writing to a measured pace. Don’t slow down where you want to speed up, e.g:</p>
                <p className='indent-text-1'>Suddenly, he ran from the room.</p>
                <p>A ‘comma splice’ does the opposite, linking two separate sentences together, it increases pace, e.g.</p>
                <p className='indent-text-1'>Suddenly he ran from the room, making Mary jump.</p>

                <h5>18.2.2 	Sentences: </h5>
                <p>Some basic tips from Burnett: “Use shorter sentences for action; longer sentences for reflection or, sometimes, the development of an emotion with sensuous undertones. Anger is usually in staccato style.”</p>
                <p>As a basic rule; if things happen sequentially and/or share no essential causative links, give each subject a separate sentence. If things happen all at once, or the order of causation is ambiguous or linked, keep it all in the same sentence. </p>
                <p>For example:</p>

                <p className="code-left">
                  <code><i>"I heard the drums coming down the street and then the fifes and the pipes and then they came around the corner, all dancing." </i></code></p>
                <p>Because it's all a run-on sentence, there is a sense of a lot of activity all happening at once; that the sound of the 'drums and the fifes and the pipes' is inextricably combined with the ‘all dancing’ as in one big entity of noise and motion. Also, the ‘all’ appears to refer to everything in the same sentence, i.e. the fifes and the pipes as well as the dancers.</p>
                <p>Compare with this version I've altered:</p>

                <p className="code-left">
                  <code><i>"I heard the drums coming down the street. Then the fifes and the pipes. Then they came around the corner, all dancing." </i></code></p>
                <p>Now it sounds more sequential. The drums are heard first. The fifes and pipes heard second, and separately. And then the dancing is seen. Here the ‘all’ seems to refer only to the dancers.</p>
                <p>Where the order of events is certain, you still might take out full stops where the characters have no control over the events, and can't intervene as soon as the first begins. See the below example - </p>
                <p className="code-left">
                  <code><i>The first domino. The second. Then the third. Then all of them. </i></code></p>
                <p>Notice the full stops make the sentences sound silly. Each successive domino's fall is reliant upon the previous, so you need to link them; splitting up the ‘action’ makes it sound artificial and over-dramatic as the individual dominos aren't important enough to warrant their own sentences. See modified version -</p>
                <p className="code-left">
                  <code><i>The first domino, the second, then the third, then all of them. </i></code></p>
                <p>Now the sentence structure reflects the events. As soon as the first domino falls, the rest of them are compelled to go down. The sentence matches the causal reality. Similarly, as soon as you start reading the sentence, you are compelled to finish reading the sentence.</p>

                <h5>18.2.3 	Paragraphs</h5>
                <p>Each paragraph introduces a new thought and concludes it.</p>
                <h5>18.2.4 	If it’s not right, re-write:</h5>
                <p>Another general rule: avoid over-thinking your writing, and avoid cluttering your writing with intention. Go with a style and stick with it – don’t make a sentence try to achieve four different effects all at once. If, for whatever reason, it doesn’t sound/read right, even if that’s the way you wanted/needed it to sound, change it. I haven’t heard of many writers being condemned because their writing is ‘too dumb’ or ‘too simple’, but an inordinate number of writers fall upon the sword of over-description because they are overly anxious to sound clever and ‘writerly’ or ‘lit’ry’ (as Joe Hill would say).</p>
                <h5>18.2.5 	The rule of invisibility: </h5>
                <p>As I stated about writing voice/style, good writing is invisible. Think of your writing like a window to some parallel universe, the world of your story. People look through a window – they don’t look at it. If your writing is so anxious and self-congratulatory that it makes people notice the words themselves, something is wrong (unless you are deliberately trying to alienate the reader, a la House of Leaves). Unless your writing is clear and transparent, in every other case – dirt-stained or a stained-glass masterpiece – your writing is only a distraction from the world beyond it.</p>
                <h5>18.2.6 	Use the Active Voice </h5>
                <p>Always use the active voice where possible. George Orwell says: <i>“Never use the passive where you can use the active.”</i><a href="#f19"><sup>19</sup></a>  The active voice will give your writing a sense of immediacy and flow, facilitating the reader’s engagement and interest. </p>

                <p className='indent-text-1'><u>Passive voice:</u><i>The tents were taken by Jeff. The sleeping bags were taken by Mary.</i> </p>
                <p className='indent-text-1'><u>Passive voice:</u><i>Jeff took the tents. Mary took the sleeping bags. </i> </p>

                <p>Ignoring Orwell’s hyperbole, know where the passive voice is more appropriate: where you suggest the subject is not acting, but being acted upon. Roy Clark says: <i>“Active verbs move the action and reveal the actors. Passive verbs emphasize the receiver, the victim.”</i><a href="#f20"><sup>20</sup></a>  For instance:</p>
                <p className='indent-text-1'><i>“The night was loaded with omens.” </i> <a href="#f21"><sup>21</sup></a></p>
                <u>Travels with Charley: In Search of America, John Steinbeck, referenced in Writing Tools: 50 Essential Strategies For Every Writer, Roy Clark.</u>
                <p>You would not write “Omens loaded the night,” because though the night is the subject, the omens are the active force.</p>

                <h5>18.2.7 	Dialogue Descriptions</h5>
                <p>I said previously to avoid gratuitous descriptions of characters while they’re talking (see: 14.1.2 Desperate descriptive detailing of dialogic discourse does disservice).</p>
                <p>So when is description within exchanges of dialogue advised? In the following cases:</p>

                <p className='purple-bold'>I.	Passages of time between utterances</p>
                <p>To create breaks in the rhythm of speech. You can use descriptions of a scene or characters’ behaviour to break up the metronymic flow of a conversation, for example:</p>
                <ol>
                  <li>Adding a description after lines of dialogue suggests a pause between utterances; this could reflect a hesitance to reply, waning interest in the conversation, the imposition of a more important task, or something else;</li>
                  <li>Giving numerous lines of dialogue accompanying behaviour, except for one suggests the line lacking description was said very fast, suggesting anxiety, discomfort, urgency, or prophetic understanding, or intimate empathy, or something else; </li>
                </ol>

                <p className='purple-bold'>II.	How characters are feeling </p>
                <p>To suggest something about how the character/s are feeling about the conversation. Such description can provide subtext of two kinds:</p>
                <ol>
                  <li>About how the listener is receiving the speaker (descriptions of the listener’s behaviour);</li>
                  <li>About how the speaker is receiving the listener (descriptions of the speaker’s behaviour). </li>
                </ol>
                <p>Feelings can flicker around indecisively and switch in the course of a single exchange of dialogue. Description can catch that. </p>
                <p>As an example, you can suggest characters are on the same page (or not) with description of them between dialogue. Most indicators are a matter of common sense, such as:</p>
                <ul>
                  <li>eye contact versus aversion;</li>
                  <li>facing the speaker versus facing away;</li>
                  <li>being quiet while someone is speaking versus interruption or other noise-making;</li>
                </ul>

                <p>The above is fairly basic and goes without saying, but descriptions can increasingly subtle or elaborate as you need them to be. Also, they should not attach to every single line of dialogue, otherwise the reader will fatigue of characters who read like they have attention deficits. In Stendahl’s <i>The Red and the Black</i> the frequency and specifity of detail in the descriptions surrounding dialogue are unprecedented to the extent of making characters sound mentally unbalanced (which I suspect was intentional). </p>
                <p>Here's an example of dialogue description from The Haunting of Hill House, in a conversation between Theo talking to the protagonist, Eleanor:</p>
                <p className='indent-text-1'> <i>"Our good Mrs. Dudley likes doors, doesn't she? She can certainly” -- and their eyes met -- "get out fast in any direction if she wants to."  </i> </p>
                <p>The abrupt eye contact gives a sense not only that the protagonist's interest has been evoked by the latter part of the statement, but also of both characters thinking the same thing, and the possibility startles both of them, and an unspoken sense of unease communicated between the characters.</p>

                <h2 id="post-18-3" className="blog-post-title">18.3 Writing ‘cheats’ and ‘hacks’</h2>
                <p>I preface this by saying writing involves a lot of work, including reading, researching, redoing, and practising, and accepting criticism, and learning. But it cannot be said there aren’t shortcuts or insights which require less effort but create more effect.</p>
                <h5>18.3.1 	Adding frustration by taking away grammar</h5>
                <p>When people get really riled up, their articulation suffers, their grammar suffers, and they are more likely to use the wrong word. You can therefore, suggest frustration by making fairly small grammatical, and forgivable, almost unnoticeable grammatical errors. It’s more effective if the character normally speaks in an average or educated way.</p>
                <p>This is a modified example from my own writing:</p>
                <p className='indent-text-1'> <i>"That and all the work I've done is just a make believe."  </i> </p>
                <p>There are two small grammatical errors in the above: (1) starting ‘that and’ creates a sentence fragment; (2) ‘make believe’ is preceded by ‘a’ when it is an abstract noun, not a concrete noun. If you know this character is relatively intelligent, it makes more sense they are frustrated when they say this. In this way you create dialogue which could even avoid adverbs or dialogue tags which confirm his anger (e.g. ‘he said angrily’ or ‘he shouted’).</p>
                <p>Here’s another example (from a different source) <a href="#f22"><sup>22</sup></a></p>

                <p className='indent-text-1'> <i>"But it's so farfetched. I keep trying to conjure up what kind of situation could produce this.”   </i> </p>
                <p className='indent-text-1'> <i>“It couldn't be real," Lucy replied. "It'd have to be a group of some kind. A porn ring, maybe. Pedophiliacs?"    </i> </p>
                <p className='indent-text-1'> <i>There was silence.    </i> </p>
                <p className='indent-text-1'> <i>“Torey," Lucy said, her voice almost plaintive. I looked over. "This is Pecking, for Pete's sake. It's not like up in the city."    </i> </p>
                <p>Here, the unusual pronunciation of 'paedophiles' emphasises how out of depth and familiarity 'Lucy' is with the subject matter – paeodophiles evidently just don’t happen in her home town.</p>
                <p>Don’t overdo it – these techniques shouldn’t hit the reader in the face and cause them to read the sentence twice.</p>

                <h5>18.3.2 	When to ‘tell’ rather than ‘show’</h5>
                <p>You hear the rule about ‘show don’t tell’. You know when to ‘show’ (always). But this raises a good question: when should you ‘tell’? I don’t have an exhaustive rulebook for when telling is better. But I have some examples:</p>
                <p className='purple-bold'>i. Jump in Time </p>
                <p>The characters in this example (Phineas – “Finny” – and main character, Gene) are school kids at a party “in a kind of sun porch” with teacher ‘Mr Patch-Withers’: <a href="#f22"><sup>22</sup></a></p>

                <div className='p-3 mb-3 bg-light rounded-pixar-2'>
                  <p>Mr. Patch-Withers’ laughter surprised us all, including himself. His face, whose shades we had often labeled, now achieved a new one. Phineas was very happy; sour and stern Mr. Patch-Withers had been given a good laugh for once, and he had done it! He broke into the charmed, thoughtless grin of a man fulfilled.</p>
                  <p>He had gotten away with everything. I felt a sudden stab of disappointment. That was because I just wanted to see some more excitement; that must have been it.</p>
                  <p>We left the party, both of us feeling fine. I laughed along with Finny, my best friend, and also unique, able to get away with anything at all. And not because he was a conniver either; I was sure of that. He got away with everything because of the extraordinary kind of person he was. It was quite a compliment to me, as a matter of fact, to have such a person choose me for his best friend.</p>
                  <p>Finny never left anything alone, not when it was well enough, not when it was perfect. “Let’s go jump in the river,” he said under his breath as we went out of the sun porch. He forced compliance by leaning against me as we walked along, changing my direction; like a police car squeezing me to the side of the road, he directed me unwillingly toward the gym and the river. “We need to clear our heads of that party,” he said, “all that talk!”</p>
                </div>

                <p>Now, without reading any more, answer this question: Do you get the feeling a short passage of time has passed between the first half of this example, and the second half? – a kind of ‘jump’ ahead, or quick fast-forward? </p>
                <p>It occurs around the start of the fourth paragraph. I’ll colour code the above to make the explanation more apparent:</p>

                <div className='p-3 mb-3 bg-light rounded-pixar-2'>
                  <p><span className='red-text-x'>Mr. Patch-Withers’ laughter surprised us all, including himself.</span> <span className='blue-text-xx'>His face, whose shades we had often labeled, now achieved a new one. </span><span className='red-text-x'>Phineas was very happy; sour and stern Mr. Patch-Withers had been given a good laugh for once, and he had done it! </span><span className='blue-text-xx'>He broke into the charmed, thoughtless grin of a man fulfilled.</span></p>
                  <p><span className='blue-text-xx'>He had gotten away with everything. I felt a sudden stab of disappointment. That was because I just wanted to see some more excitement; that must have been it.</span></p>
                  <p><span className='blue-text-xy'><span className='highlight'></span>We left the party,</span><span className='red-text-xy'> both of us feeling fine.</span> <span className='blue-text-xx'>I laughed along with Finny, </span><span className='red-text-x'>my best friend, and also unique, able to get away with anything at all. And not because he was a conniver either; I was sure of that. He got away with everything because of the extraordinary kind of person he was. It was quite a compliment to me, as a matter of fact, to have such a person choose me for his best friend.</span></p>
                  <p><span className='red-text-x'>Finny never left anything alone, not when it was well enough, not when it was perfect. </span><span className='blue-text-xx'><span className='highlight'>“Let’s go jump in the river,” he said under his breath as we went out of the sun porch. </span>He forced compliance by leaning against me as we walked along, changing my direction; like a police car squeezing me to the side of the road, he directed me unwillingly toward the gym and the river. </span>“We need to clear our heads of that party,” he said, “all that talk!”</p>
                </div>

                <p><span className='red-text-x'>The red text = information 'told';</span></p>
                <p><span className='blue-text-xx'>The blue text = information 'told';</span></p>
                <span className='highlight'>The highlighted text = information alluding to passage of time.</span>

                <p>Here’s the funny thing – <strong>nowhere does it tell you that time jumped ahead. </strong>Even funnier; the yellow text repeats the same information. Remember the characters begin in the sun porch, at a party. The next yellow bit says they leave the party. We feel like there’s been a jump in time but it must be immediately after, because Gene is described as still laughing from the first paragraph. The second yellow text says the characters went out of the porch. As the porch is impliedly right outside, there’s nothing else there suggesting time jumped ahead. So where is that feeling coming from?</p>
                <p><strong>Answer:</strong> it’s coming from the huge slabs of information in red – information being told, rather than shown. </p>
                <p>We can derive this principle: <strong>Information which is shown creates a sense of immediacy.</strong> It sounds like it’s happening right now before your eyes (this is why writers tend to prefer it, to create a sense of immersive presence). </p>
                <p>Here’s the paragraph again, with much the red removed:</p>

                <div className='p-3 mb-3 bg-light rounded-pixar-2'>

                  <p><span className='red-text-x'>Mr. Patch-Withers’ laughter surprised us all, including himself. His face, whose shades we had often labeled, now achieved a new one. Phineas was very happy; sour and stern Mr. Patch-Withers had been given a good laugh for once, and he had done it!</span></p>
                  <p><span className='blue-text-xx'>We left the party, <span className='red-text-x'>both of us feeling fine. </span>I laughed along with Finny.</span></p>
                  <p><span className='blue-text-xx'>“Let’s go jump in the river,” he said under his breath as we went out of the sun porch. He forced compliance by leaning against me as we walked along, changing my direction; like a police car squeezing me to the side of the road, he directed me unwillingly toward the gym and the river. “We need to clear our heads of that party,” he said, “all that talk!”</span></p>
                </div>

                <p>Now you see the jump in time is gone.</p>
                <p>Information which is told reads more slowly, because it tends to unfold in the narrator’s mind. If you have the luxury of time to reflect, it’s implied there isn’t much going on to distract you. You might be doing nothing at the time, or you might be doing something on autopilot. In this case, it’s the latter; Finny and Gene are described as walking (leaving the party); we then get a slab of ‘telling’ information via Gene’s introspection. Then we’re told the characters are still walking; ‘leaving the sun porch’, but now we assume a minor jump in time has occurred, because Gene had the time to reflect on things for a paragraph.</p>
                <p>Therefore, you can ‘tell’ information rather than show it if you want to suggest a character has stood around not really doing anything, just thinking. This is effective for breaking up or differentiating important ‘showing’ scenes.</p>
                <p className='purple-bold'>ii. Cut the reader off from ‘other’ characters </p>

                <p>In the short story, ‘The Way of the Cross,’ by Daphne Du Maurier, a number of misfortunes happen to various characters while visiting Jerusalem. Meanwhile, the grandson of one of them, gets extended introspection as he imagines what Jesus's life was like, conveying how oblivious he is to the others' trouble. Rather than ‘show’ the kid pretending to be Jesus and quoting Jesus, the narrative instead restricts itself to the kid’s thoughts, this interiority cuts us off from the other characters and prevents us from knowing how much time is passing relative to the other characters' thereby creating suspense for when the kid finds out.</p>
                <p className='purple-bold'>iii. Deny reader alternate interpretations </p>
                <p>Telling is more appropriate where you want to convey how unavoidably obvious an observation is, e.g.</p>

                <p className='indent-text-1'> <i>Sanita looked shattered, utterly exhausted. Her face looked pale against the brightly coloured vest she wore, and her hair, usually one of her physical charms, was hanging limply across her face, stuck to her forehead and cheeks with dried sweat. She hadn’t even wanted to come to India in the first place, but had finally agreed just to be with me. </i> <a href="#24"><sup>24</sup></a></p>
                <p>Here, the unavoidable observation is that the protagonist's girlfriend 'Sanita' is miserable and it's the protagonist's fault, no matter what he thinks. The telling word is 'shattered,' which immediately leaves no room for subjective interpretation. The subsequent sentences ('Her face...') give us 'showing' description but its tied to the 'shattered' 'telling' description -- merely elaborating what being shattered looks like for Sanita, rather than allowing us to interpret her expression for ourselves. </p>

                <h5>18.3.3 	The ‘Triangle’</h5>
                <p>Where a character gets in an argument (particularly involving a conflict of values/beliefs), it’s more dynamic to subsequently bounce the character over to a ‘support person’ in a ‘debrief’ scene to ‘make sense’ of the argument that’s just occurred, to allow a different opinion. </p>
                <p>An outside third person, who doesn’t easily side with either character can prevent the argument being interpreted as an ‘either/or’ thing.</p>
                <p><u>Example: </u>X believes in abortion, Y does not. They argue. Subsequently, X hangs out with Z, who holds a more mediate position on abortion (sometimes okay, sometimes not), giving X the opportunity to to defend his position in a more neutral setting, allowing exploration of X’s position from another angle.</p>
                <p>In real life, some people withdraw following an argument, but that’s not dynamic or interesting in a story, which should limit ‘narrative downtime’. You can compromise by having X retreat somewhere and happen to bump into someone.</p>

                <h5>18.3.4 	Deliberately awkward sentences: </h5>
                <p>Sometimes you can break the above rule of invisibility (see: 13.2.5) and deliberately flout good English for a particular effect. See this example (Hemingway – who else?) the context for this is that the characters are driving in a car which struggles to get up a hill:</p>

                <p className='purple-bold'>Example #1: Bad grammar: </p>
                <p className='indent-text-1'> <i>The woods were gone; the road had left the river to climb; the radiator was boiling; the young man looked annoyedly and suspiciously at the steam and rusty water; the engine was grinding, with both Guy’s feet on the first-speed pedal, up and up, back and forth and up, and, finally, out level.    </i> </p>
                <p>This whole paragraph reads awkwardly, artificially, and laboriously (note the grammatically cumbersome ‘annoyedly and suspiciously’). But that’s what makes it effective. The paragraph is describing a car having trouble, to the characters’ frustration. The effort and frustration evoked by reading this paragraph mirrors the effort and frustration felt by the characters trying to get the car up the hill. Similarly, there is a sense of relief once the prose returns to the usual straightforward style afterwards.</p>
                <p>Here’s another example, not breaking good grammar, but deliberately reading awkwardly:</p>

                <p className='purple-bold'>Example #2: Awkward prose: </p>
                <p className='indent-text-1'> <i>She didn’t say anything. He was wearing blue jeans, a black leather jacket zipped to his throat, a long red wool scarf around his neck, and a Dodgers baseball cap. It was too hot a day for the leather jacket and scarf. She didn’t find that detail significant. It caught her attention, she touched it briefly and then let it go. She looked but did not see. They were standing on a curb. The meeting was in a community room across the boulevard. She wasn’t afraid yet. <a href="#f25"><sup>25</sup></a> </i> </p>
                <p>The awkward part comes from the ‘they were standing on a curb’ which seems to come out of nowhere. The paragraph describes a woman being trailed by an odd and overly enthusiastic man, and the sentence ‘intrudes’ into the paragraph the way the man ‘intrudes’ into the woman’s space, evoking the sense of awkwardness and disquiet the woman feels.</p>


                <p className='purple-bold'>Example #3: Irony </p>
                <p>Bad grammar can be used to communicate humour or facetiousness, teasing, or otherwise that the speaker is not being serious, e.g.</p>
                <p className='indent-text-1'> <i>“You’re actually kind of beautiful/smart [etc].”    </i> </p>
                <p>The above phrasing could communicate sarcasm, because the qualifier (‘kind of’) mitigates the compliment. This is also less obnoxious than the usual, tired technique of expressing sarcasm by italics.</p>

                <h5>18.3.5 	Projection  </h5>
                <p>People tend to interpret the traits onto others which they fear most in themselves; this is a psychological phenomenon called 'projection.' This can direct what details your protagonist notices and/or minimises (i.e. which ones you describe and in what way). </p>

                <p>18.3.6 	Protestation</p>
                <p>People also tend to overstate the opposite of what they think if the truth makes them uncomfortable -- the Shakespearean 'Doth protest too much' syndrome.</p>

                <p>18.3.7 	Take my Word for It</p>
                <p>If you want to create a sense of alienation from a character, have them describe something without showing it, or, even more blatantly, omit description at the time the thing allegedly occurred, and then have the character assert that it occurred at the time. </p>
                <p>For example, in the Haunting of Hill House, the protagonist asserts that she saw some figurines move in her peripheral vision. However, at the time this allegedly occurred, it was not described, or 'shown' to us. This effects distance between us and the protagonist's POV, suggesting she may be going crazy.</p>

                <h5>18.3.8 	The Periodic Sentence  </h5>
                <p>The Periodic Sentence is a type of sentence structure where the main point of the sentence comes right at the end, so the sentence doesn’t read as complete/meaningful until you reach the final word. It’s a stylistic device for building suspense. You normally hear dramatic revelations delivered through periodic sentences. </p>
                <p><u>Examples:</u></p>

                <p className='indent-text-1'>
                  <p><i>That morning, after the thunder died and the hail stopped, and the bus made it along the rain-slicked roads, we finally got to school.</i></p>
                  <p><i>Because of all the strange stories going around, I never went back to the house.</i></p>
                  <p><i>While waiting at the station, it finally occurred to Joe that the train wasn’t going to arrive. </i></p>
                  <p><i>In the park across the street, in front of a growing crowd, two men are fighting.</i></p>
                  <p><i>“If you didn’t want me to do it, then why did you give me the gun?”</i></p>
                  <p><i>The reason I acted the way I did, was because I was in love.</i></p>
                </p>

                <h5>18.3.11 	Long Sentences</h5>
                <p>Shorter sentences are generally better. And brevity is increasingly desirable as the internet makes people’s attention spans shorter. But sometimes length may convey something a short sentence cannot. </p>
                <p>Clark provides a guide for using long sentences:</p>
                <ul>
                  <li>Subject and verb of the main clause should come early in the sentence</li>
                  <li>Use a long sentence to describe something long; let form follow function</li>
                  <li>The sentence should be written in chronological order</li>
                  <li>Vary long sentences with short sentences</li>
                  <li>Use long sentences for lists or catalogues</li>
                  <li>Long sentences need more editing than short ones; every word should count.</li>
                </ul>

                <h5>18.3.9 	Superimposition</h5>
                <p>This is a technique for making dialogue, scenes, and more broadly, entire plots, more dynamic, creative, unpredictable and interesting.</p>
                <p>Fiction writing is, obviously, writing about pretend things. Superimposition goes one step further; you're writing pretend things about those pretend things. Basically, you're writing one thing as if it were something else (without actually referring to that other thing).</p>
                <p>One of the advantages of this technique is that it's productive when you have writer's block, or you are distracted by all the other things you really want to write about. It's great for coming up with spontaneous inspired bursts of writing. Here's an example:</p>
                <p>Let's say I want to write a story about a haunted house, but I can't come up with anything. Instead, I'm distracted by thoughts of rainforests. Two very different, seemingly irreconcilable subjects. I can use superimposition to write the haunted house as if it were rainforest, e.g.</p>
                <ul>
                  <li>Big, spread out in a valley of tall, tangled grass, tall twisting towers, dark, almost black windows, vines of ivy and lichen draping down over the walls;</li>
                  <li>The inside is dark, the high ceiling curves around like a shadowy canopy, long fingers of shadow stretch over the floor, all the furniture is made of hard, unyielding wood, </li>
                  <li>At night the house seems louder than in daytime, with creaking, chirping, buzzing and groaning noises playing through the walls, </li>
                  <li>At night the house seems louder than in daytime, with creaking, chirping, buzzing and groaning noises playing through the walls, </li>
                  <li>There is a huge, curved machete hanging on the wall in the dining room; the edge stained as if from use</li>
                  <li>The basement air is cold and heavy, the carpet is perpetually damp, like a swamp; the attic is oppressively humid</li>
                </ul>
                <p>Etc.</p>

                <p>Note: It's not necessary for the subliminal message to be canon. In the above, the haunted house doesn't literally have anything to do with a rainforest. The point of the comparison is to make the reader feel like your haunted house is different from all the others they've read. Aside from horror, this technique can be used in any genre. You might superimpose a love interest is royalty to get inside the protagonist's adoration of them.</p>

                <h5>18.3.10 	Purposeful Repetition</h5>
                <p>9 times out of 10 you don’t want your writing to repeat itself. Repetition devalues your writing by oversupply (see 11.3 Information Economy). It can also be annoying and insipid, like a nursery rhyme. Repetition also isn’t subtle, and 9 times out of 10 you don’t want your writing to repeat itself.</p>
                <p>However, if used sparingly and effectively, repetition can:</p>
                <ul>
                  <li>Link key words, phrases, and larger elements of your story;</li>
                  <li>Communicate cohesion or lack of agency or individuality (if multiple characters are repeating the same things)</li>
                  <li>Create irony;</li>
                  <li>Persuade;</li>
                  <li>Create humour;</li>
                  <li>Create a sense of lyricism and rhythm;</li>
                  <li>Create a sense of building suspense or dread, or build-up to something unavoidable.</li>
                </ul>

                <p>Most commonly, repetition conveys thematic significance. In <i>In ‘The Haunting of Hill House’</i> House’ by Shirley Jackson, the Shakespearian quote <i>'Journeys end in lovers meeting’</i> is repeated, and at various lengths throughout the story:<a href="#f26"><sup>26</sup></a></p>
                <p className='indent-text-1'>Journeys end in lovers’ meeting—
                  <br></br>Every wise man’s son doth know.
                  <br></br>What is love? ’tis not hereafter;
                  <br></br>Present mirth hath present laughter;
                  <br></br>What’s to come is still unsure:
                  <br></br>Every wise man’s son doth know.
                  <br></br>In delay there lies no plenty,—
                </p>

                <p>Different lines are quoted at different parts in the novel, but each referring back to the monologue as a whole. The theme of the novel is communicated in the poem as a whole.</p>

                <h5>18.3.11 	Long Sentences</h5>
                <p>Shorter sentences are generally better. And brevity is increasingly desirable as the internet makes people’s attention spans shorter. But sometimes length may convey something a short sentence cannot. </p>
                <p>Clark provides a guide for using long sentences:</p>
                <ul>
                  <li>Subject and verb of the main clause should come early in the sentence</li>
                  <li>Use a long sentence to describe something long; let form follow function</li>
                  <li>The sentence should be written in chronological order</li>
                  <li>Vary long sentences with short sentences</li>
                  <li>Use long sentences for lists or catalogues</li>
                  <li>Long sentences need more editing than short ones; every word should count.</li>
                </ul>

                <h5>18.3.12 	Punctuating a Moment</h5>
                <p>This tip comes from David Carroll:<a href="#f27"><sup>27</sup></a></p>
                <p className='indent-text-1'> “After making a strategic or dramatic point, move away from your subject for a moment, then return with sudden force.”</p>
                <p>The ‘moment’ may only last a sentence.</p>

                <h5>18.3.14 	Literalize Metaphors</h5>
                <p>You can build scenes and events from making literal metaphors; here's a really obvious example that you shouldn't actually use:</p>
                <p><u>Metaphor:</u></p>
                <p className='indent-text-1'>My mother and father fought all the time, leaving me to pick up the pieces afterwards.</p>
                <p><u>Literal:</u></p>
                <p className='indent-text-1'>My mother picked up the figurine on the mantel and threw it at my father. It missed and crashed against the wall. I got down and began sweeping up the pieces.</p>

                <h5>18.3.13 	Breaking Grammar</h5>
                <p>As to writing proscriptions: generally, never say never. Breaking a writing rule is always a choice at the discretion of the writer. There are reasons for, reasons against. You have to be smart enough to know the difference. Dreyer  provides exceptions to a list of common writing rules: <a href="#f28"><sup>28</sup></a></p>
                <p className='purple-bold'>1. Never Begin a Sentence with 'And' or 'But' </p>
                <p>Words like 'and' and 'but' are called 'conjunctions,' and the reason for this rule is because these words are designed to connect sentences or ideas from a previous sentence. If you start with a conjunction, it doesn’t connect to anything.</p>
                <p>But, start with a conjunction and you may give a sentence a slightly different feeling; maybe humourous, like a punchline, or solemnity; giving each sentence its own space for steady, serious contemplation. Maybe you want to use a separate sentence to contradict the reader's expectations, or convey a reversal of structure, or fortune. Generally you may want to split up connected ideas to convey the ideas, while similar, are different, or the things should be together -- should be expected to be together -- but are not. </p>

                <p className='purple-bold'>2. Never Split an Infinitive </p>
                <p>A split infinitive is where an adverb is placed between the 'to' and the verb, e.g. 'To boldly go' (instead of 'to go boldly') or 'to casually walk' (instead of 'to walk casually') or 'to gently push' (instead of 'to push gently').</p>
                <p>Sometimes a split infinitive reads better. If it does, go confidently with it.</p>

                <p className='purple-bold'>3. Never End a Sentence with a Preposition </p>
                <p>Prepositions are words which create a relationship with a noun, like: as, at, by, for, from, of.</p>
                <p>Generally, ending on a preposition will make your sentence weaker, or sound less literate, but may sound better in exceptional cases, such as to convey bluntness, forwardness, or casualness, e.g. "So where are you from?"</p>

                <p className='purple-bold'>4. Contractions aren't allowed in formal writing </p>
                <p>Maybe this was the case in William Strunk's time, but this rule is becoming more obselete by the day. </p>

                <p className='purple-bold'>5. The Passive Voice Is to Be Avoided </p>
                <p>Maybe this was the case in William Strunk's time, but this rule is becoming more obselete by the day. </p>
                <p className='indent-text-1'>'The floors were swept, the beds made, the rooms aired out.'</p>
                <p>Passive voice is fine here <i>"[s]ince the point of interest is the cleanness of the house and not the identity of the cleaner."</i></p>

                <p className='purple-bold'>6. Sentence Fragments. They're Bad </p>
                <p>Sometimes sentence fragments convey something -- abrupt, paramount, solemn, busy -- that would be lost in a properly formed sentence. Here's an example from Charles Dickens' Bleak House:</p>
                <p className='indent-text-1'>Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls defiled among the tiers of shipping, and the waterside pollutions of a great (and dirty) city. Fog on the Essex marshes, fog on the Kentish heights. Fog creeping into the cabooses of collier-brigs; fog lying out on the yards, and hovering in the rigging of great ships; fog drooping on the gunwales of barges and small boats. Fog in the eyes and throats of ancient Greenwich pensioners, wheezing by the firesides of their wards; fog in the stem and bowl of the afternoon pipe of the wrathful skipper, down in his close cabin; fog cruelly pinching the toes and fingers of his shivering little apprentice boy on deck. Chance people on the bridges peeping over the parapets into a nether sky of fog, with fog all round them, as if they were up in a balloon, and hanging in the misty clouds.</p>

                <p className='purple-bold'>7. A Person Must Be a 'Who' </p>
                <p>When you place a ‘that’ after a noun, you objectify it, alternatively, a ‘who’ after a noun personifies it.</p>
                <p>e.g. ‘The tree that was chopped down yesterday,’ not ‘The tree who was chopped down yesterday,’
                  and ‘The man who was here yesterday,’ not ‘The man that was here yesterday.’
                </p>
                <p>e.g. ‘The tree that was chopped down yesterday,’ not ‘The tree who was chopped down yesterday,’
                  and ‘The man who was here yesterday,’ not ‘The man that was here yesterday.’
                </p>

                <ol>
                  <li>Dislike: The speaker doesn’t like representatives  of the tax department;</li>
                  <li>Importance: The man’s status in tax is more important to the story than his status as a person;</li>
                  <li>Anonymity: the man’s status as a person is unconfirmed, i.e. the speaker is mistaken that there was actually a person</li>
                </ol>

                <p className='purple-bold'>8. None is Singular </p>
                <p>You should refer to individuals as ‘none’ not the groups they belong to. For instance, a single member of a single group says, ‘None of us is going to let you pass,’ not ‘None of us are going to let you pass,’ as they are referring to the group as a single entity, i.e. ‘no one in this group...’</p>
                <p>But if there are multiple groups, of which your individual is a member of one group, they would say ‘None of us are going to let you pass’ not ‘none of us is going to let you pass,’ as they are referring to the groups in plural, i.e. ‘no one from any of these groups…’</p>

                <p className='purple-bold'>9. ‘Whether’ mustn’t be accompanied by ‘Or Not’ </p>
                <p>This is a pedantic rule which ignores the fact that many sentences require the added ‘or not’ to work. But if you delete the ‘or not’ and your sentence still makes sense, that’s fine.</p>

                <p className='purple-bold'>10. Never Introduce a List with ‘Like’ </p>
                <p>Form dictates you replace the ‘like’ with ‘such as.’ But this is a pedantic departure from how people use language in real life.</p>

                <h2 id="post-18-4" className="blog-post-title">18.4: Professional Advice</h2>

                <p>Here are a bunch of tips from ‘On Writing’ by Sol Stein (you should, however, actually read this book, because it contains many more tips as well as instructive examples):</p>
                <ol>
                  <li>Read your story out loud (of have someone else read it out loud) in a monotone voice. This will not only allow you to hear your words in conversational pace, but the monotone reading will ensure that it’s the words themselves which carry the meaning, not the inflections or punctuation;</li>
                  <li>Strive for precision and clarity;</li>
                  <li>Learn from the mistakes made by ‘painfully bad’ works, as well as from the occasional mistakes made in literary award winners</li>
                  <li>Studies suggest book browsers decide whether they want to buy a book by page 3. Ideally you should be hooking the reader from page 1 – from the first sentence even – but apparently page 3 is your final chance;</li>
                  <li>The difference between an immediate scene (showing) and a narrative summary (telling) is that the former could be shot on film as a scene, and the latter could not;</li>
                  <li>If you want to convey information to the reader, describe it through a scene, characters, and action. Don’t simply tell the reader; you are the author, not a character in your own story;</li>
                  <li>The best characters are unusual enough to be distinctive and memorable, but not so unusual that they lack credibility or resemble cartoon characters;</li>
                  <li>In order for your story to have a plot, your main character needs to want something. It could be a positive want, i.e. wanting something they don’t have, or a negative want, i.e. wanting something to stop or not happen.</li>
                  <li>In order for your story to have a plot, your main character needs to want something. It could be a positive want, i.e. wanting something they don’t have, or a negative want, i.e. wanting something to stop or not happen.</li>
                  <li> If writing love scenes, pay special attention to both characters, particularly the perspective, thoughts and feelings of the character who is the opposite sex as you (the writer), or alternatively, the character who is not the protagonist (i.e. the second person);</li>
                  <li> Another tip about love plots; writing a romance is about keeping the lovers apart (physically or psychologically) for as long as possible. Once they are together, there’s nowhere else for the story to go (quoth Shakespeare: ‘Journeys end in lovers meeting’);</li>
                </ol>

{/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

<ThoughtForm />

<ThoughtList />

{/* ------------------------------------------------- footnotes --------------------------------------------- */}

                <div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">Sarah Lotz, <i>Day Four.</i></li>
                    <li id="f2">Howard Mittelmark and Sandra Newman, <i>How NOT to Write a Novel.</i></li>
                    <li id="f3">Examples include ‘The Neverending Story,’ and ‘Nocturnal Animals,’ and, possibly the earliest known example, ‘Scheherazade.’</li>
                    <li id="f4">William Sloane, <i>The Craft of Writing.</i></li>
                    <li id="f5">Stanislaw Lem, <i>Solaris.</i></li>
                    <li id="f6">Ambrose Bierce, <i>That Damned Thing.</i></li>
                    <li id="f7">William Sloane, <i>The Craft of Writing.</i></li>
                    <li id="f8">Fred Pearce, <i>The Landgrabbers</i>, (Note: this is non-fiction).</li>
                    <li id="f9">David Carroll, <i>A Manual of Writer's Tricks.</i></li>
                    <li id="f10">Nick Edwards<i>In Stitches: The Highs and Lows of Life as an A & E Doctor, </i> (note: this is non-fiction).</li>
                    <li id="f11">HEX, <i>Thomas Olde Heuvelt.</i></li>
                    <li id="f12">David Carroll, <i>A Manual of Writer's Tricks.</i></li>
                    <li id="f13">Jack Bickham,<i> The 38 Most Common Fiction Writing Mistakes (And How To Avoid Them).</i></li>
                    <li id="f14">William Sloane,<i> The Craft of Writing.</i></li>
                    <li id="f15">Ben Yagoda, <i>How to Not Write Bad.</i></li>
                    <li id="f16">Les Edgerton, <i>Hooked: Write Fiction That Grabs Readers at Page One & Never Lets Them Go.</i></li>
                    <li id="f17">Jack Hart, <i>Storycraft: Complete Guide to Writing Narrative Nonfiction.</i></li>
                    <li id="f18">Benjamin Dreyer, <i>Dreyer’s English.</i></li>
                    <li id="f19"><i>Politics and the English Language.</i></li>
                    <li id="f20"><i>Writing Tools: 50 Essential Strategies For Every Writer.</i></li>
                    <li id="f21">John Steinbeck, <i>Travels with Charley: In Search of America.</i> referenced in <i>Writing Tools: 50 Essential Strategies For Every Writer</i>, Roy Clark.</li>
                    <li id="f22">Tonya Hurley, <i>Ghostgirl.</i></li>
                    <li id="f23">John Knowles, <i>A Separate Peace.</i></li>
                    <li id="f24">John Harris, <i>The Backpacker.</i></li>
                    <li id="f25">Kate Braverman, <i>Tall Tales from the Mekong Delta.</i></li>
                    <li id="f26">From Shakespeare’s <i>Twelfth Night</i>, Act II, Scene III.</li>
                    <li id="f27">David Carroll, <i>A Manual of Writer's Tricks.</i></li>
                    <li id="f28"><i>Dreyer’s English.</i></li>
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
                <li><a href="#post-18-1">18.1: Don't Do This!</a></li>
                <li><a href="#post-18-2">18.2: Do This!</a></li>
                <li><a href="#post-18-3">18.3: Writing 'Hacks'</a></li>
                <li><a href="#post-18-4">18.4: Professional Advice</a></li>
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