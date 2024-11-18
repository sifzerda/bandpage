import '../App.css'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';


export default function Scenes() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <h1 className="display-4">Scenes</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">Style is […] a matter of knowing when one has said enough.</p>
          <i>— Hallie & Whit Burnett, Fiction Writer&apos;s Handbook</i>
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
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to dditional content.</p>
          <a href="#">Continue reading</a>
        </div>

        <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18eeca52e10%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18eeca52e10%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"></img>
      </div>


      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-6-1" className="blog-post-title">6.1: Anatomy of a Scene</h2>
              <p className="blog-post-meta">January 1, 2014 by <a href="#">zerda</a></p>
              <div id="content">

                <h5>6.1.1 What Is A Scene?</h5>
                <p>Robert McKee says that a scene is an ‘event,’ and an ‘event’ is change. A story event creates meaningful change in your main character’s life, expressed in terms of a value/s and achieved through conflict.</p>
                <p>The ‘value’ is something meaningful to your character, which is at stake: love, life, liberty, truth, justice, etc. The conflict is the obstacle threatening the value. The state of the character’s relation to the value should change by the end of a scene (this is the ‘change’ referred to above), otherwise the scene is pointless. The change needs to be contrasting or oppositional – you can’t go from ‘good’ to ‘better,’ but you can go from ‘bad’ to ‘worse,’ (bad changes are, by their nature, always oppositional; i.e. they oppose the protagonist. Also, there is some relativity when a situation becomes ‘worse,’ it makes the previous ‘bad’ situation look ‘good’ by comparison). </p>
                <p>Mckee says a novel may have over 60 scenes/events, as a rough estimate. That figure sounds a little big to me; my analysis of Pet Sematary (144K words) identified about 45 scenes, and that was a long novel. A standard 80K word novel (little more than half the size of Pet Sematary) will have even less.</p>
                <p>Every scene must move towards the conclusion. If a scene’s only purpose is to provide exposition, delete it and work the information into the story.</p>

                <h5>6.1.2 Beats</h5>
                <p>Another McKeean concept. Scenes are made up of ‘beats.’ Distinguish the term from the short pause in a screenplay. Here, it means ‘an exchange of behavior in action/reaction.’ For example, if a character lunges at another and screams “I’m going to kill you,” that’s a beat. If a female character sits down opposite a male character and gives him ‘that look,’ that’s a beat. If the male character, in response, passes her a note over the table and then gets up and leaves, that’s another beat.</p>
                <p>It’s a useful concept if you want to break the scene-writing process up into the smallest units and ensure that every unit counts. On the grand scale you have the conclusion of your plot. Every scene drives toward the conclusion. Every single scene also has a small-scale conclusion (a ‘change’); every beat drives toward the change.</p>

                <h5>6.1.3 	Sequences</h5>
                <p>A sequence is a series of scenes – two to five – which culminates with greater impact than those previous scenes. Think of the plot’s end as the ultimate goal. In order to achieve that goal, the main character must face a number of challenges/obstacles; the culmination of each of these occurs at the end of a sequence. In order to overcome the challenges, the main character must overcome some wins and losses – these wins and losses occur at the end of each scene.</p>

                <h5>6.1.4 	Acts</h5>
                <p>A series of sequences comprises an ‘Act.’ The Act culminates with a major reversal of the value in respect of the character – i.e. a major ‘change.’ The end of an Act will have a greater impact on the main character than the end of a sequence. A series of Acts comprises the story at large. McKee provides the helpful tip that the climax of every scene may be reversible (e.g. life could be spared, people reunite, relationships could be mended, etc) until the climax of the last scene, which must be irreversible.</p>

                <h5>6.1.5 	Example of structure:</h5>
                <p>Take Pet Sematary as an example. </p>
                <p><u>The Plot:</u> The main character’s son dies, so he uses a cursed burial ground to reanimate his body.</p>
                <p><u>The Conflict:</u> Death.</p>
                <p><u>The Value:</u> The main character’s relation to life and death changes on a scene-to-scene basis throughout the story.</p>
                <p><u>Example of a Beat:</u> Jud offers to take the protagonist and his family to see the local Pet Cemetery.</p>
                <p><u>Example of a Scene:</u> Jud shows the family the local Pet Cemetery.</p>
                <p><u>Example of a Sequence:</u> Jud takes the protagonist and his family to see the Pet Cemetery. This exposes the daughter to the concept of death. The discussion upsets the mother, who is traumatized by a childhood incident. Protagonist resolves not to further expose his wife to the trauma of death.</p>
                <p><u>Example of an Act:</u> After protagonist and his family move into a new house, neighbour Jud takes them to see the Pet Cemetery. This exposes the daughter to the concept of death. The discussion upsets the mother, who is traumatized by a childhood incident. Protagonist resolves not to further expose his wife to the trauma of death. When his daughter’s cat dies, Jud takes him to a special burial ground to bury it, and it comes back to life, but wrong.</p>

                <h2 id="post-6-2" className="blog-post-title">6.2: 'Sex Words'</h2>
                <p>Concept which 'sex up' your story. Not so much words, but categories which certain 'magic words' enliven, e.g. strategic use of the word 'beautiful' enlivens the 'sex' category. </p>
                <p>Screenwriter, Blake Snyder, calls these ‘primal urge’ concepts, i.e. survival, hunger, sex, protection of loved ones, fear of death, etc. He says that the lead characters must have these basic needs, wants and desires as the stakes.</p>
                <p>Sex words/categories include:</p>
                <ul>
                  <li>Sex</li>
                  <li>Secrets</li>
                  <li>Revenge</li>
                  <li>Loss</li>
                  <li>Irony and Coincidence</li>
                  <li>Enormous Risk</li>
                  <li>Money</li>
                  <li>Mystery (including abnormality, inexplicability, freakishness)</li>
                  <li>Sacrifice</li>
                  <li>Death</li>
                  <li>Tragedy</li>
                  <li>Fortune</li>
                  <li>Profanity and Cruelty</li>
                  <li>Spirituality (meaning of life, the cosmos, grand causation, etc) </li>
                  <li>Criminality and Taboo</li>
                  <li>Justice and Injustice</li>
                  <li>Security</li>
                  <li>Power</li>
                  <li>Identity</li>
                  <li>Wisdom and Rare Knowledge</li>
                </ul>

                <h2 id="post-6-3" className="blog-post-title">6.3: Forums for Raising and Resolving Conflict</h2>
                <p>Scenes shouldn’t be inserted just because they sound ‘cool’ or interesting (however, if they are, that’s a bonus). They should be forums for your characters to introduce and resolve conflicts, and debate questions which are invoked by the theme (obviously you don’t have them literally debate – rather you will use subtext through their dialogue and actions). The scenes should also move toward your conclusion. It’s as if your novel is in its entirety an essay, and your scenes are the paragraphs – e.g. – </p>
                <p><u>Premise: </u>A guy and his brother get in a drunken fight with some members of the local town’s football team; the brother is killed and the football players are shielded from punishment and the guy plans to get back at them;</p>
                <ul>
                  <li>Theme: Revenge; is it worth it?</li>
                  <ul>
                    <li>Potential scene: guy sleeps with the girlfriend of the football team’s best player and gets her pregnant;</li>
                  </ul>
                </ul>

                <p><u>Premise: </u>Due to a misunderstanding, a guy is branded a paedophile by his tight-knit community;</p>
                <ul>
                  <li>Theme: Fear: is it stronger than logic?</li>
                  <ul>
                    <li>Potential scene:	Someone comes across his dead body in the forest – this suggests the strength of fear; it’s either compelled someone to murder him, or the man to kill himself.</li>
                  </ul>
                </ul>

                <h2 id="post-6-4" className="blog-post-title">6.4: The 'E Chain'</h2>
                <p>Even when you’ve thought up a bunch of scenes, you might be wondering how to arrange them. My method is ‘the E chain’. This divides scenes into the 3 sequential types of information you want scenes to contain: </p>
                <ol>
                  <li>Encouragement</li>
                  <li>Events</li>
                  <li>Effects</li>
                </ol>

                <p>This might sound familiar if you’ve read my ‘How to write a synopsis/summary’ document – what I meant by ‘events’ and ‘effects’ there means the same thing here. Also, the numerical sequence (1, 2, 3) is intentional; that is the actual order you want to formulate these elements. This doesn’t, however, mean you have to start the story with Encouragement, leading through to Effects. You could start anywhere, as long as you don’t subsequently break the chain.</p>
                <p>Here’s an example of a simple E chain (consider which is the encouragement, event, and effect):</p>
                <p className='indent-text-1'>I came late to the meeting because my car broke down. When I arrived I heard my colleague say a terrible think about me because he didn’t think I was coming. I didn’t talk to him after that.</p>

                <p><strong>(1) Encouragement: </strong>This refers to the narrative pressures or forces acting on your characters, informing their decision-making and driving your characters’ behaviour. Encouragement could be: </p>
                <ol>
                  <li><span className='highlight'>External</span> (I moved house <i>because my house burned down</i>); OR</li>
                  <li><span className='green-text-span'>Internal</span> (I moved house <i>because I wanted a change</i>); OR</li>
                  <li><span className='red-text-span'>Complex</span> (I moved house even though I didn't want to, <i>because my wife wanted to and I didn't want to upset her</i>); OR</li>
                  <li><span className='blue-text-span'>Unidentified</span> (I woke up in a new house and <i>I don't remember how I got there</i>).</li>
                </ol>

                <p>Internal and unidentifiable encouragement is generally weaker and less effective; external and complex are recommended. </p>
                <p>Stories which lack encouragement tend to produce reader response such as ‘Why did he do that?’ or ‘Why did she say that?’  </p>

                <p><strong>(2) Events: </strong>This refers to the plot events comprising your story. Stories are event-obsessed, so normally these are the things referred to when one provides a quick plot summary thus: ‘A happened, and then B happened, and then C happened.’ Ideally should be preceded by encouragement, and result in an effect. Stories which lack events tend to read thinly and pad themselves out with mundane, irrelevant occurrences, thoughts and feelings, and actions. </p>
                <p>In the above example, the event would be moving to a new house.</p>

                <p><strong>(3) Effects: </strong>This refers to the response by your character to events. They might come out of an event psychologically unscathed or have their whole world (and the plot development) completely derailed.  </p>
                <p>Stories which lack effects tend to sound unrealistic, superficial, and ‘made-up’. Characters may read woodenly or like robots.</p>
                <p>Effects can manifest through behaviour, dialogue, implication, or symbolism (and probably other conveyances). They can be long term or immediate:</p>

                <p><strong>Immediate Behavioural:</strong></p>
                <ul>
                  <li>Person 1: "That saw mill accident - your brother - Oh my God - "</li>
                  <li>Person 2: *drops phone*</li>
                </ul>

                <p><strong>Immediate Verbal:</strong></p>
                <ul>
                  <li>Person 1: "That saw mill accident - your brother - Oh my God - "</li>
                  <li>Person 2: “Oh shit. You’re not serious.”</li>
                </ul>

                <p><strong>Immediate Implied:</strong></p>
                <ul>
                  <li>Person 1: "That saw mill accident - your brother - Oh my God - "</li>
                  <li>Person 2: “It’s going to be okay,” she said, as her hand started to shake.</li>
                </ul>

                <p><strong>Immediate Symbolic:</strong></p>
                <ul>
                  <li>Person 1: "That saw mill accident - your brother - Oh my God - "</li>
                  <li>Person 2: *phone dies*</li>
                </ul>

                <p>Effects can be long-term. These are harder to summarise as above because they refer to the cumulative behaviour or changes of your character across the rest of the book, following an event. </p>
                <p><u>Long-term behavioural:</u></p>
                <p>A normally cheerful person, ‘Person 2’ (above) – who has no prior experience with trauma until now – succumbs to depression. This manifests by the character becoming withdrawn and pessimistic;</p>
                <p><u>Long-term verbal:</u></p>
                <p>Person 2 starts having little outbursts over little things, when they formerly wouldn’t have;</p>
                <p><u>Long-term implied:</u></p>
                <p>Person 1 (secretly struggling with suicidal ideation) buys life insurance;</p>
                <p><u>Long-term symbolic:</u></p>
                <p>She was slicing the vegetables on autopilot, and didn’t stop until she’d decapitated the caterpillar at the end, then stood and, dumbly, watched its body spasm and die.</p>

                <h5>6.4.1 The Fork Method</h5>
                <p>When creating an ‘E Chain’ don’t write yourself into a corner. Brainstorm multiple possible outcomes (try to aim for 3-5 – or more) for each plot point/resolution. Never ask yourself; what would normally happen at this point in the story? Instead, ask yourself, what are the possible kinds of interesting things that could happen now? What are some abnormal things that could happen at this point in the story? Don’t be afraid to take risks at every stage. Your goal is to maintain your reader’s interest, not meet their exact expectations. </p>

                <h2 id="post-6-5" className="blog-post-title">6.5: Diametrics</h2>
                <p>What immediately comes to mind when you hear these phrases in fiction?</p>

                <p className="code-left"><code><i>“Nothing ever happens around here,” he sighed. </i></code></p>
                <p className="code-left"><code><i>Officer Colt had one day left until retirement. </i></code></p>
                <p className="code-left"><code><i>“I didn’t hear anything,” he shrugged. </i></code></p>

                <p>Behind each of these phrases is a story. You already know where it’s going. The man will find adventure; the cop will die; the lovers will separated; some threat will materialise. </p>
                <p>Basically, the purpose of a story is to tell people what they don’t already know. As a simple rule, fiction is where the opposite of what’s expected happens. If what’s expected does happen, the audience doesn’t need to be told; they already know. </p>

                <h5>6.5.1 	What is it?</h5>
                <p>It sounds like a New Age Movement championed by Oprah Winfrey, but it's not. This is my own term, and it just means 'Opposite.'  Memorable fiction presents and balances opposites. </p>
                <p>Two characters who are opposites have a diametric relationship. A protagonist thrown into a situation which is the furthest from expectation, is in a diametric relationship with that plot occurrence. A setting which contains features totally unexpected, has diametric aspects. </p>

                <h5>6.5.3 	Why Is It Important?</h5>
                <p>It’s obviously a simple concept, and simple to implement into a story. Yet, many stories fail to do it effectively, or at all. If you’ve forgotten a scene or characters or a story five seconds after reading it, it’s probably due to a lack of diametrics.</p>
                <p>When I consider what single most important feature interesting, memorable stories or scenes have, I keep coming back to the diametric relationships. I’m convinced they are a cornerstone of fiction, a key distinguishing factor between memorable and unmemorable fiction. Opposites surprise expectations, which fix them in memory.</p>
                <p>Diametrics don’t just refer to scenes. You can (and should) create diametric characters, plot events, settings, dialogue – in short; it’s applicable to everything. For instance, the Three-Right Angled Turn Plot Structure is premised on opposites (see 3.4); and Character Foils are premised on opposites (see 6.3.3 Set Off traits (AKA Interior Foils) and 6.6 The Foil).</p>
                <p>Diametrics is even applicable on a sentence-by-sentence level. Subtle Diametrics give prose a little kick. Good first lines often have it, making them memorable. Good endings have them, giving you what you want, but not the way you expected it.</p>

                <h5>6.5.3 	The Method</h5>
                <p>Creating diametrics involves 2 steps: </p>
                <ol>
                  <li>Opposition</li>
                  <li>Integration</li>
                </ol>

                <p>Good writing may draw you into a situation before unveiling its diametrics; getting you to accept the story world part-by-part until you’re compelled to accept the diametric as well.</p>
                <p>Other good stories may throw the diametric right over you at the outset, subsequently entrenching it </p>
                <p>Here are ten examples of diametrics, using some of the most memorable scenes from various film and stories.</p>

                <p className='purple-bold'>I. The Sound of Music</p>
                <p>The most memorable scene in this film is where the main character, a nun in training, runs up onto the mountains and sings. We don’t expect a nun to ditch the headdress and spin around giddily on mountaintops singing at the top of her voice.   </p>

                <p className='purple-bold'>II. I, Robot</p>
                <p>One of the most memorable scenes is where the Detective protagonist enters a robot assembly line to catch a higher-functioning learning and intuiting robot, who has camouflaged itself amongst a flank of generic robots. The Detective asks the robots which one is the imposter but the robots only chorus, “One Of Us.”</p>

                <p className='purple-bold'>III. King Kong</p>
                <p>There are various memorable scenes in this film (whether the 1933 or 2006 version). But the stand out is at the end, when King Kong climbs up New York’s Empire State Building clutching Anne Darrow in one hand, before he gets shot down by fighter jets.</p>
                <p>There are multiple diametric elements here: (1) An impossibly gigantic, uncivil wild animal climbing up a skyscraper; the congress of wealthy, civil, businesspeople; (2) He’s holding a human woman who was designed to be his sacrifice; (3) The captive woman is concerned for the safety of the beast; (4) The humans regret having to kill him.</p>

                <p className='purple-bold'>IV. Singin' in the Rain</p>
                <p>Even people who have never seen this film are likely aware of the titular scene in which a couple of characters sing in the rain. We expect big song numbers in musicals to be set in lit, appealing aesthetic, with the characters lavishly dressed. This is the opposite: the setting is gloomy, dark, wet, the characters aren’t doing anything interesting (they’re walking down the street), and dressed in ordinary coats and hats. But they’re doing the last thing we’d expect; they’re singing a melodic, lively, happy tune.</p>

                <h2 id="post-6-6" className="blog-post-title">6.6 The First Scene </h2>
                <h5>6.6.1 The First Scene is a 'Special' Scene</h5>
                <p>You don’t have to write the story chronically (i.e. write the first scene first, etc), but eventually you will have to determine where the story starts. That can be difficult because the first scene (like the last scene) is not a typical scene – special rules apply. The first scene has to perform work subsequent scenes (including the last scene) don’t have to do:</p>
                <ul>
                  <li>It has to grab the reader’s interest;</li>
                  <li>It has to clarify what the story is generally about (dispel any misinterpretations caused by a bad title, cover art, or blurb);</li>
                  <li>It has to get the reader to ‘base line normal’ and comfortable with your story’s world;</li>
                </ul>

                <h5>6.6.2 	Some general rules</h5>
                <p>Jack Hart quotes playwright Lajos Egri, who said a play should start:</p>
                <u>Storycraft: Complete Guide to Writing Narrative Nonfiction, Jack Hart.</u><a href="#f1"><sup>1</sup></a>
                <ul>
                  <li>Exactly at the point where a conflict will lead up to a crisis.</li>
                  <li>At a point where at least one character has reached a turning point in his life.</li>
                  <li>With a decision that will precipitate conflict.</li>
                </ul>

                <p>I also have some general rules about where to start the story:</p>

                <p className='purple-bold'>(1) Start as late possible</p>
                <p>Identify the first plot relevant event and try to start from there. However, for certain reasons, you might need to start earlier. If the first plot relevant event requires context, provide that context. Sol Stein  says: <i>“To hook the reader, many writers put a death right smack in the opening before the reader can feel anything. The death feels told.”</i></p><a href="#f2"><sup>2</sup></a>
                <p>If your first plot relevant event is a character’s death, you should introduce the deceased (even briefly) while alive so that their death has more weight.  As Stein says, <i>"[T]he reader must know the people in the car before he sees the car crash.”</i></p>
                <p>William Sloane<a href="#f3"><sup>3</sup></a> says access point is why you must start a story as late as possible; you've got to throw the reader into the story. You can't give the reader a choice to refuse to identify with what’s happening. </p>
                <u>The Craft of Writing, William Sloane.</u>
                <p className='purple-bold'>(2) Group main characters, settings and events together</p>
                <p>If there’s an event early in your story where a handful (or even all) of your main characters congregate – and even better, in a plot relevant setting (e.g. a birthday party at your main character’s house) – it would be wise to make this your first scene. That way you kill a lot of birds with the one stone. It’s also less obvious and ‘intrusive’ that you’re trying to introduce characters and settings when it’s all together, as opposed to one at a time.</p>

                <p className='purple-bold'>(3) Ask a Question</p>
                <p>Ideally, your first scene should ask a thematically significant question which the rest of your story attempts to answer. </p>
                <p>A question might follow the structure: <i>If X, then Y? </i></p>
                <p>For example:</p>
                <ul>
                  <li>Is infidelity ever really forgivable? (If your partner commits infidelity, then could you forgive them?);</li>
                  <li>How damning is isolation? (If you were cut off from the world for a significant period of time, then could you still return to a normal social life?) </li>
                  <li>Can advanced AI have morals? (If AI became really advanced, then could it be programmed with morality?);</li>
                  <li>Can religion and ambition co-exist? (If you are fundamentally religious, and naturally ambitious, then what consequences would follow?) </li>
                </ul>

                <p>You may have already suggested this question in your title, your book design, your tagline, hook, and blurb, but the question should be raised by the first scene; that’s the last chance you get to ask it, otherwise your first chapter is going to be extraneous.</p>

                <p className='purple-bold'>(4) Don’t Infodump</p>
                <p>The first scene has the responsibility of getting your reader ‘up to speed’ in your fictional world. But that doesn’t give you unfettered license to rain exposition down in buckets.</p>
                <p>Then readers got wise and so authors made the first chapter an ‘into the thick of the action’ chapter, and shifted the exposition down one chapter, to chapter two. Which is no better. </p>
                <p>The best way to inform the reader is to smuggle info in; link information with images/scenes. Place writing constraints on yourself to prevent dropping crucial words. Don’t let anyone tell you this will take longer. Think; how long would it take you to ‘show’: (1) your main character’s job; (2) their spouse’s name; (3) the name of their town and country; and (3) a hobby of theirs? Here’s an example, doing it in 4 sentences:</p>

                <p className="code-left"><code><i>Locking the car, he walked inside and then realized: everything but the stethoscope. Oh well; his wife didn’t touch his Mercedes – ironic, given her name. The air-conditioned house was the same temperature as outside now – it had been baking before noon and for some reason temperatures like that always reminded him that, over three hundred years ago, they had burned up a witch where he stood. It wouldn’t get dark until late so he snatched up his tennis racket and went back out the door.  </i></code></p>
                <p>This tells us: (1) The man is a doctor; (2) His wife’s name is Mercedes; (3) He lives in Salem, Massachusetts, USA; and (4) He likes to play tennis.</p>
                <p>The extra advantage to this is that you get a clearer picture building of who this guy is, than if I merely told you those 4 random facts.</p>
                <p>Here’s an extended example from <i>‘Under the Volcano’ </i>by Malcolm Lowe – notice it communicates information without ever actually stating it:</p>


                <div className="p-3 mb-3 bg-light rounded-pixar">
                  <p><i>Hugh Firmin less than sauntered, so slowly did he move, up the drive towards his brother’s house <strong>[1]</strong>, his brother’s jacket balanced on his shoulder <strong>[2] </strong>, one arm thrust almost to the elbow through the twin handles of his brother’s small gladstone bag, his pistol in the checkered holster lazily slapping his thigh: eyes in my feet, I must have, as well as straw, he thought, stopping on the edge of the deep pothole, and then his heart and the world stopped too; the horse half over the hurdle, the diver, the guillotine, the hanged man falling, the murderer’s bullet, and the cannon’s breath, in Spain or China frozen in mid-air, the wheel, the piston, poised — <strong> [3]</strong></i></p>
                  <p><i> Yvonne, or something woven from the filaments of the past that looked like her <strong>[4]</strong>, was working in the garden, and at a little distance appeared clothed entirely in sunlight. Now she stood up straight — she was wearing yellow slacks  <strong>[5] </strong>— and was squinting at him, one hand raised to shield her eyes from the sun.</i></p>
                  <p><i> Hugh jumped over the pothole to the grass; disentangling himself from the bag he knew an instant’s paralysed confusion, and reluctance to meet the past.  <strong>[6]</strong> The bag, decanted on the faded rustic seat, disgorged into its lid a bald toothbrush, a rusty safety-razor, his brother’s shirt, and a second-hand copy of Jack London’s Valley of the Moon, bought yesterday for fifteen centavos at the German bookstore opposite Sandborns in Mexico City <strong>[7]. </strong>Yvonne was waving.</i></p>
                  <p><i> And he was advancing (just as on the Ebro they were retreating) the borrowed jacket still somehow balanced, half slung on his shoulder, his broad hat in one hand, the cable, folded, still somehow in the other.</i></p>
                  <p><i> ‘Hullo, Hugh. Gosh, I thought for a moment you were Bill Hodson <strong>[8]</strong> Geoffrey said you were here. How nice to see you again.’ </i></p>
                  <p><i> Yvonne brushed the dirt from her palms and held out her hand,  <strong>[9]</strong> which he did not grip, nor even feel at first, then dropped as if carelessly, becoming conscious of a pain in his heart and also of a faint giddiness.  <strong>[10]. </strong> ‘How absolutely something or other. <strong>[11]. </strong> When did you get here?’</i></p>
                </div>

                <p><strong>[1] </strong>Hugh’s slow pace suggests he is reluctant to see his brother</p>
                <p><strong>[2] </strong>Contrasting with above, Hugh’s possession of his brother’s jacket as if it were his own suggests he retains affection for his brother – so we know it’s not that he dislikes his brother, but there’s something troubling between them.</p>
                <p><strong>[3] </strong> Hugh is very distracted, maybe deeply troubled.</p>
                <p><strong>[4] </strong>This suggests Hugh has not seen Yvonne for a long time.</p>
                <p><strong>[5] </strong>Yvonne’s mood is better than Hugh’s; she’s working outside in the sun and wearing yellow;</p>
                <p><strong>[6] </strong>Hugh did not expect to find Yvonne at his brother’s, but is eager to see her;</p>
                <p><strong>[7] </strong>Hugh planned to stay at his brother’s house – more subtly, the fact that the bag’s overnight contents is detailed only after Yvonne is identified, suggests that Hugh may not have been set on staying with his brother, and only became certain of it after he saw Yvonne was there;</p>
                <p><strong>[8] </strong>This suggests Yvonne has not seen Hugh in a long time, and perhaps did not expect to see him – even though she was forewarned – suggesting, she doesn’t have the same excitement to see him as he has seeing her;</p>
                <p><strong>[9] </strong>The dirt on palms (and her lack of embarrassment thereof) further suggests she doesn’t receive him as a ‘special’ guest;</p>
                <p><strong>[10] </strong>This hints that Yvonne is involved in whatever was troubling Hugh, above;</p>
                <p><strong>[11] </strong> ‘How absolutely something or other’ undoes the effect of her previous ‘How nice to see you again’ and cementing her indifference at Hugh’s arrival.</p>

                <p>In the story, Yvonne and Hugh only know each other through Hugh’s brother, Geoffrey – who Yvonne is in an on-again-off-again relationship with. Notice how this scene refers to this by interposing the ‘brother’ between them without even making him present.</p>

                <p className='purple-bold'>(4) Active, Not Passive</p>
                <p>An active scene depicts a plot moment in real time. A passive scene is anything other than a big plot moment; it ‘catches’ the reader up on the story in between plot moments. It provides description, exposition, or gives characters a breather to react emotionally to events. It’s like the ‘previously on …’ segment at the start of a TV series episode.</p>
                <p>You need active scenes to keep the story moving, but your story can’t just be active scenes, otherwise you will fatigue and/or confuse the reader. An effective story structure has a natural pattern of hills (active scenes) and valleys (passive scenes). However, the first scene must be an ‘active’ scene, not a passive one. This means you have to be thrown into the thick of some plot action immediately. </p>
                <p>Whatever comes later, your first scene cannot start with exposition, or start by summarizing an active event that has previously happened, or merely suggest an active event will happen in the following chapters, or flashback to an active event in the middle of a passive scene (better to start the active event in present tense, and then ‘flashforward’).</p>
                <p>An example of a first scene that is passive is in C. J. Tudor’s novel, The Chalk Man. In the first scene, a dead girl is described lying in the forest, which is then found by the killer, who removes and takes away the head. This is passive because we are being shown the aftermath of an active event (a murder). We are having the aftermath of an active event summarized to us. There are no characters, no plot and no action going on here, just description; just a dead body doing nothing.</p>
                <p>Instead, the first scene should have been about a girl (who we assume is the main character) who is introduced and briefly characterized to us, before shockingly being stalked, and chased down, and killed in the forest, and then finishing with her head being taken. Better, the chapter ends the moments she’s killed, and we get the first description of her body later, in another active scene when an investigating detective stumbles upon her gruesome and (to our surprise) now headless remains. </p>

                <p className='purple-bold'>(5) Microcosm</p>
                <p>Just as you can have a ‘microcosm’ first line, you can have a ‘microcosm’ first scene – anything ‘first’ can be a microcosm, the point is it’s a miniaturized taste of the larger offering, like a synecdoche. A microcosm is like a rehearsal for the main story; characters are shown ‘in practice’ for the roles they will acquire later, later plot threads are teased, story elements are shown symbolically which later crystallize as literal.</p>
                <p>Example:</p>
                <p>In Michael Stewart’s novel <i>Monkey Shines, </i> protagonist Allen’s dreams of becoming an Olympic runner are shattered after he becomes a quadriplegic, and then is partnered with a ‘helper monkey’ who succumbs to homicidal rages.</p>
                <p>The first scene acts as a microcosm of the relationships between the characters, where Allen is shown competing in a running race, with his girlfriend, Linda, and his friends, Melanie and Geoffrey, watching. Allen gets a leg injury in the final lap but manages to win, which he is cocky and complacent about. Linda confidently asserts Allen’s prospective Olympic eligibility, flippantly dismisses his alternative (legal career) and then hurries off in her convertible. Friends Melanie and Geoffrey are less complacent, but stick around to earnestly congratulate Allen. Despite expressing concern over Allen’s limp, Geoffrey leaves Allen in favor of his lab work. </p>
                <p>There are multiple elements of this scene which echo large later:</p>
                <ol>
                  <li>Allen’s minor racing injury (characterized as a limp), echoes later as paralysis and inability to move his legs at all;</li>
                  <li>Of Allen’s friends, Linda leaves the race the earliest without worrying about Allen’s limp. Later, when Allen becomes paralyzed, she is quick to leave the relationship because of his injury;</li>
                  <li>Linda dismisses Allen’s legal career option. Later, this is echoed as a dismissal of any of his options;</li>
                  <li>Allen’s friends Melanie and Geoffrey stay with Allen a moment after Linda has left to genuinely congratulate him. Later, they stay loyal to him after he is paralyzed, and are more genuine in their reception of his paralysis;</li>
                  <li>Geoffrey leaving Allen’s limp in favor of his own lab work is echoed by Geoffrey using the paralyzed Allen as a test subject for his own experimentation (i.e. prioritizing the science over Allen’s injury)</li>
                </ol>

                <h5>6.6.3 	Establishing Shot</h5>
                <p>The establishing shot is the reader’s first impression of the story, and will stay with the reader as the progress through the rest of the story. Hart  provides an illustration of this with the start of Tracy Kidder’s non-fiction story ‘Small-Town Cop’:</p><a href="#f4"><sup>4</sup></a>
                <u>Storycraft: Complete Guide to Writing Narrative Nonfiction, Jack Hart.</u>
                <p className="code-left"><code><i>“From the summit of Mount Holyoke, in western Massachusetts, you look out on the valley of the Connecticut River, a broad landscape of cultivated fields and of forest sweeping away across the horizon, and, at the center, the old town of Northampton. It nests within natural boundaries. To the east the wide river bends around fields, planted mostly in corn. To the north and west, the foothills of the Berkshires rise up in the distance, higher than Northampton’s many steeples. . . . From the summit it seems, like the corn fields beside it, a dream of perfect order, entirely coherent and self-contained, a place where a person might live a whole life and consider it complete, a tiny civilization all its own. Forget the messiness of years and days—every work of human artifice has a proper viewing distance. The town below fits in the palm of your hand. Shake it and it snows.” </i></code></p>
                <p>Here, a broad establishing shot emphasises the smallness of the town – relevant because the main character is a ‘small-town cop.’</p>

                <h2 id="post-6-7" className="blog-post-title">6.7 The Last Scene</h2>
                <h5>6.7.1 	The Last Scene is a ‘special’ scene</h5>
                <p>The last scene is like the first; it’s a special scene and special rules apply, which I’ve listed here:</p>
                <p className='purple-bold'>(1) Two tiered ending</p>
                <p>About the first scene, I said to start as late as possible. However, you don’t need to, inversely, end the last scene as early as possible. This is partly for practicality: you’ve already gained the reader’s interest, so you don’t have to worry so much about snappy set ups, you have more latitude to spend time developing and resolving.</p>
                <p>For this purpose, there are two ‘levels’ or ‘tiers’ of endings:</p>
                <p className='blue-bold'>(1) The Climax:</p>
                <p>The climax is the most exciting part of the story, where the action peaks. The climax isn’t a real ending – unless it’s literally at the end of the story – it could instead come a fair way before the literal last line/chapter. I’m not huge fan of making the climax the literal end, for a number of reasons:</p>
                <ol>
                  <li>Your story loses out on having a dénouement to tie up loose ends;</li>
                  <li>The climax already has to perform a particular task of showing the most action, without burdening with another lot of special functions as the ending;</li>
                </ol>

                <p className='blue-bold'>(2) The Dénouement</p>
                <p>Pronounced Day-NOO-mah. This follows the climax. This is the literal ending ‘on paper’ (even if readers consider the climax the ‘conceptual’ ending). If the climax is the ‘action’, the dénouement is the ‘consequence’. Some of its roles: </p>
                <ul>
                  <li>Explain what happened during the climax (particularly very ‘busy’, complicated climaxes, or ‘twist-ending’ climaxes);</li>
                  <li>Illustrate whether the relationships between characters have changed or stay the same (or suggest whether a change is inevitable, e.g. characters will drift apart);</li>
                  <li>Suggest what may be in store for the characters in the future (e.g. success, improvement or misery);</li>
                </ul>

                <p>Readers and writers put a lot of focus on the climax, at the risk of the dénouement getting sidelined as the ‘soft’ and ‘uninteresting’ follow-up: this kind of thinking is a grave mistake – here’s an example showing why:</p>
                <p>In a traditional fantasy, the knight slays the dragon and rescues the princess. The slaying of the dragon (the climax) might be the most exciting part, but I’m willing to bet a lot of people would think the rescue (dénouement) is the best/most satisfying part. </p>
<p>Imagine 2 variants of this fantasy story: </p>

<p><strong>[A strong climax and a weak dénouement]:</strong></p>
<ul>
  <li>The knight slays the dragon only to discover it has already killed the princess; </li>
</ul>

<p><strong>[A weak climax and a strong dénouement]:</strong></p>
<ul>
  <li>The knight can’t defeat the dragon, but finds a way to the princess and they both escape. </li>
</ul>

<p>I think general consensus would find number (1) more unsatisfying than number (2). </p>

<div className="p-3 mb-3 bg-light rounded">
                  <p className="mb-0">“Keep one thing in mind when you’re writing a dénouement: Falling action has drained all the dramatic tension from the story. Readers want to know the answers to a few questions, but the powerful engine of story has shut down, leaving little momentum to carry your audience farther forward. So don’t push your luck. Wrap things up as quickly as possible and leave the stage Once you’ve answered the necessary questions, you have one remaining task—bring the story to an end with what journalistic types call a “kicker.” A good one will sum up, surprise a little, perhaps bring things full circle, firmly planting your protagonists in their new status quo. It will leave absolutely no doubt that the story has ended.”</p>
                  <p></p><i>— Jack Hart </i><a href="#f5"><sup>5</sup></a>
                </div>

<u>Storycraft: Complete Guide to Writing Narrative Nonfiction, Jack Hart.</u>

<h5>6.7.2 The Ending</h5>
<p>On story resolutions, Jon Franklin insists, they <i>“absolutely and without exception, must be products of the character’s own efforts.” </i></p><a href="#f6"><sup>6</sup></a>
 
<p>There are obviously two kinds of endings: happy endings (a rise) and unhappy endings (a fall). </p>

<p className='purple-bold'>(1)	Happy endings</p>
<p>There are two kinds of happy ending:</p>
<p><strong>I. The protagonist gets what he/she wants in the end:</strong></p>
<p>Here, the protagonist successfully achieves what they set out for. This is the most common ending, which is odd because it’s the weaker of the two. There’s nothing inherently wrong with it; you are satisfying the ‘promise’ made at the start of the story. But you are punching in at 8:59 and leaving at 5:01pm. You aren’t going above and beyond the call of duty. That’s fine. But it’s only fine, and no better.</p>

<p><strong>II.	The protagonist doesn’t get what he/she wants, but gets what he/she needs.</strong></p>
<p>You can call this the ‘Pixar ending,’ though they certainly did not invent it. Here, the protagonist fails their original aim, but, along the way, achieves something even better. It may not be immediately obvious that the alternative achievement is better, there is often a lesson learned throughout the story along the lines that, although having X is desirable, having Y is better. It sounds very feel-good and ‘Disney’ but you don’t have to moralise or make the ‘lesson’ obvious. You can make the ending subtle and bittersweet.  </p>
<p>Done authentically, this is a stronger, more complex ending because it’s poignant, bittersweet; it can contain both a loss and a win (i.e. you can have your cake (both unhappy and happy ending) and eat it). </p>
<p>For instance, the hero wants to win a competition. Their opponent also wants to win – but not in itself, rather to get the attention of a desirable love interest. The hero trains but in the end loses because the opponent cheated. However, the love interest is turned off the opponent because they cheated, and instead admires the strong, honest performance put in by the hero. This ends up meaning more to the hero than winning.</p>
               
<p className='purple-bold'>(2)	Unhappy endings</p>    
               <p>There are three kinds of unhappy ending:</p>
               <p><strong>I.	The protagonist doesn’t get what they want (a fall)</strong></p>
               <p>This is what people think of when you say ‘unhappy ending’: the protagonist dies, the villain wins; the love interest dies; the competition is lost; the warning unheeded; civilization falls; order unrestored; the lesson not learned; the priceless artifact broken; the evil survives; the secret unrevealed; the treasure undiscovered; the sacred knowledge forgotten…etc.</p>
               
               <p><strong>II.	The protagonist doesn’t get what they want, but are a better person for it (a righteous fall)</strong></p>
               <p>This occurs where the protagonist commits a bad action and, by the end, is punished for it. They may be an anti-hero or a villain in the process of reform (they don’t have to be, good people also do bad things). It may not be a morally ‘bad’ action, it may morally neutral, but be unadvised or unwise, or disadvantageous for some other reason. The point of the ending is not to give the protagonist what they want, but show them they didn’t really want what they formerly wanted. By the end, they don’t necessarily get something better, but do learn against wanting something not good for them, and thereby avoid a worse fate. If the protagonist disregards this warning, they get a fall ending (number I. above).</p>

               <p><strong>III.	The protagonist doesn’t get what they want, but may, eventually (a fall…and maybe a rise?)</strong></p>
               <p>I also refer to this ending as the ‘rising inflection’ ending. It ostensibly plays out like a typical fall ending (number I. above), except the very end suggests a tiny ray of hope that things will turn out alright, somehow. It’s like one of those “THE END…or is it?” lines, except the ‘or is it?’ is signified ambiguously with dialogue, action or some other subtlety right at the end. </p>
<p>For example, at the end of Stephen King’s ‘The Dark Tower,’ the protagonist finds himself back at the start of an eternal time loop. This is an unhappy ending, except for the hopeful implication that the forthcoming iteration of the loop will, for once, play out differently.</p>
<p>Just be aware once you suggest a single alternate possibility, you’re all but confirming it, so don’t phone it in. In real life, contingencies are never real until they eventuate. But in fiction the author merely suggesting a contingency (to the exclusion of all other possibilities) virtually makes it real. Imagine you were at a Harry Potter convention and someone asked if Dumbledore is married and J. K. Rowling said ‘Maybe he’s gay.’ The word ‘maybe’ means nothing; this is virtually a confirmation, because it was raised in any case and no alternative is similarly provided. </p>
<p>A fortiori, when you suggest a single alternate possibility, and then close the story. If that’s not a confirmation of the alternative, I don’t know what is. Consider, when someone says ‘maybe no’ and then closes the door on your face, they are actually saying ‘really, seriously, no.’</p>
<p>Conversely, saying ‘maybe X, maybe Y, maybe Z,’ does not confirm anything, it just cautions not to get locked into the most obvious possibility. But you should never end a story like that, because then you subvert your own ending entirely and invalidate your whole story. </p>               
               
<h5>6.7.3 	The True Value of Events</h5>
<p>If you’ve ever been frustrated by the ending of a book or movie (the usual complaint is the ‘is-that-it? syndrome’) it’s probably the creator failed to properly sequence a climax and/or dénouement. For instance, a movie ended on a climax which should have had a dénouement, and you’re left wondering how things resolved.</p>
<p>The takeaway from this links back to the distinction between climaxes and dénouements: end the story once the reader has learned the true value of the journey or ultimate fate of the character (the two might be interlinked). If your climax does that, end on the climax – as in Pet Sematary (see above), we know the true ‘value’ of the resurrections come the climax – the burial ground never makes things better. If your climax does not do that, end on a dénouement. </p>

<h5>6.7.4 	Bad Endings</h5>
<p>Mittelmark and Newman provide examples of bad endings:</p>
<p className='purple-bold'>(1) Deus Ex Machina</p>  
<p>Ensure the ultimate pay-off of your ending is properly set up in advance, otherwise you’ll have an unsatisfying ‘Deus Ex Machina’ ending. This is where a device comes out of nowhere to resolve the plot for your protagonist.</p>
<p className='purple-bold'>(2) Homo sit Deus </p>  
<p>In observing the above rule, ensure you don’t make things too easy for the protagonist, or telegraph your pay-off too obviously. This is the opposite of a Deus Ex Machina; where you explain your away your pay-off so early (or in so much detail), assuring your protagonist’s victory (and how that victory will eventuate), that your reader feels no anxiety by the climax. In other words, your protagonist never breaks a sweat. If your protagonist is not in suspense, then the reader won’t be either.</p>
<p>For instance, as set-up, your protagonist may learn the necessary skill, but not the exact method they will rely on to defeat the antagonist, i.e. what they need to do, but not how they will need to do it. </p>
<p className='purple-bold'>(3) Step Aside </p>  
<p>Ensure its your protagonist who ultimately saves the day; don’t give the limelight to another character, otherwise the reader will wonder why you didn’t make that character the protagonist.</p>
<p className='purple-bold'>(4) Backstories should be kept back </p>  
<p>Don’t make the ultimate explanation/reveal for the plot ending longer and/or more complicated than the actual plot.</p>
<p>If the explanation involves backstories of characters doing exciting things, the reader will wonder why those stories weren’t the plot itself. I.e. if the explanation is more interesting than the story, the explanation should be the story.</p>
<p className='purple-bold'>(5) Epilogue Echo </p>  
<p>Don’t use the ending to reiterate everything that’s just happened over the course of the plot, or ‘remind’ the reader of important events. Maybe there’s an argument for it in film, where it’s inconvenient to rewind, but in novels, trust a reader to be able to flip back and reread anything they’ve forgotten. You also spite the readers with a working memory.</p>

<h2 id="post-6-8" className="blog-post-title">6.8 All The Other Scenes</h2>
<p>Some general rules applying to all scenes (including the first and last).</p>

<h5>6.8.1 	To Not Be Continued…</h5>
<p>All of your scenes must do their own work. Never use two different scenes to do the same thing.  </p><a href="#f7"><sup>7</sup></a>
<u>How NOT to Write a Novel, Howard Mittelmark and Sandra Newman.</u>
<p>This is so even if you want to show your character stuck doing the same thing, i.e. you want to suggest circumstances haven’t changed. </p>
<p>There are at least two kinds of breaches of this rule:</p>

<p className='purple-bold'>A.	Different Place, Same Thing: </p>  
<p>Let's say your character goes on a string of failed dates. You would give one of these dates (the most interesting) its own scene, and then, either:</p>
<ol>
  <li>subsequently summarise the other dates as being no better; or</li>
  <li>summarise the dates, ending with the date scene, as if to see whether it'll be any different.</li>
</ol>
<p>Only describe the scene if it introduces a new character or plot element.</p>

<p className='purple-bold'>B.	Different Thing, Same Place: </p>  
<p>This may occur anytime your character must go to the same location multiple times. Normally you would describe the location the first time, and then dispense with description subsequent times – the reader doesn’t need to be told twice where it is and what it looks like.</p>
<p>The problem is where the setting is difficult or time-consuming to reach or traverse through, because skipping description implies the setting is straightforward and unremarkable to get through.</p>
<p>One method of handling this is ‘The French Scene’ (see 6.10); that is, the setting doesn’t change, but the character’s relationship to it (or to others) does. This means a setting which was warm and comforting may turn hostile and foreboding, or a setting which is mildly foreboding becomes outright terrifying. This enables you to describe the same setting multiple times, but each time the description will be different; you will create different metaphors, or draw attention to different things.</p>
<p>Here are some other solutions:</p>
<ul>
  <li>Seeing the same setting from a different perspective (e.g. on the ground versus from a hilltop, from the sea, or inside a plane);</li>
  <li>Dividing the setting into parts and having different scenes occur in different parts (e.g. a school divided into class buildings; a house divided into different rooms);</li>
  <li>Dividing the setting into parts and having different scenes occur in different parts (e.g. a school divided into class buildings; a house divided into different rooms);</li>
  <li>The same setting when in use or not (e.g. a packed theatre compared to an empty theatre; a street in Christmastime versus ordinary time)</li>
</ul>

<li>Ensure you aren’t breaching this rule accidentally. No matter how it’s conveyed to the reader, if the scene is conveying the same information, then it’s the same scene, even if there’s a setting change. For instance, if characters are having a discussion about what they just did the previous scene, then it’s a duplicate.</li>

<h5>6.8.2 	Best and Worst Scenarios</h5>
<p>A quick thought experiment is to think of the best possible thing that could happen to your protagonist. Also consider the worst possible thing that could happen to your protagonist. What these things are depends on your protagonist’s personality; neurotic personalities might fear getting sick or injured. Extroverts might fear being alone. Introverts might fear public humiliation, etc. </p>

<h5>6.8.3 	The Crucible</h5>
<p>This is a concept suggested by Sol Stein for the purpose of plotting a story. He defines a crucible existing where “the motivation of the characters to continue opposing each other is greater than their motivation to run away.”</p>
<p>A crucible can be emotional or physical. It could exist because they’re in a physical space which prevents them from escaping, e.g. a prison, or it could be because escape would be stigmatizing, e.g. a marriage, or it could be because both characters want something which only one can have, e.g. a hunter wants to kill a lion and the lion wants to kill the hunter.</p>

<h5>6.8.4 	The Dilemma </h5>
<p>A concept suggested by Robert McKee for structuring character action. Shallow characters tend to have the choice between good/evil or right/wrong. This is repetitive and predictable; if a character makes a good choice, they are rewarded for it, whereas if they make an ‘evil’ choice, they are punished for it.</p>
<p>A more complex, nuanced way of addressing this issue is to create a ‘dilemma.’ There are two kinds: (1) A choice between multiple irreconcilable good choices. In this case, the choice is desirable, the problem is committing to it forecloses the equally desirable alternative. Usually the protagonist stands to gain something, whichever choice is made, it’s just bittersweet because of the non-severable loss of opportunity which accompanies it. (2) A choice between the lesser of two evils. Here, the choice is undesirable and the protagonist does not wish to have to make it. It may be that everything was fine before the choice reared its head, and the protagonist may not actually gain, only lose, the question is which loss is more tolerable?</p>
<p>Consider what is fundamentally at stake when you create a dilemma – love, power, money, knowledge, life, security, etc – and ensure the choice is genuine and not ‘obvious.’ Whichever you decide, note McKee’s advice; a price must be paid. The protagonist must risk or lose the alternative choice to gain the other. Otherwise the reader won’t feel the dilemma was true. </p>

<h5>6.8.5 	Set the Scene </h5>
<p>Scene-setting is essential; the selection of details must be meaningful.</p>
<p>Hart<a href="#f8"><sup>8</sup></a> analyses this paragraph by Wayne Curtis, describing a riverboat trip up the Mississippi for the Atlantic:</p>
<p className="code-left"><code><i>“The night grew darker, and the captain fired up a massive spotlight, sending upriver a great silver cylinder that glittered with the confetti of confused insects. From the dark void ahead of us, rubies and emeralds came sparkling back off the reflectors of the navigational buoys. A full moon had risen over the east bank, and it moved slowly from one bracketed porch column to another, the ship serving as a sort of Victorian Stonehenge to mark the loopy curves of the river.” </i></code></p>
<u>Storycraft: Complete Guide to Writing Narrative Nonfiction, Jack Hart.</u>
<p>Hart says, “Notice how Curtis uses the searchlight to create a sense of space. Lots of perspective- rich images can do the same thing—a road winding into the snowy woods, a long stairway ascending in front of you, railroad tracks. Seize on such devices to help flesh out the stages you create. And phenomena such as parallax—in this case the moon appearing to move behind the porch columns— add both perspective and motion.”</p>

<h5>6.8.6 	‘Quiet Scenes’ </h5>
<p>Although simplistic, there are two kinds of scenes: action scenes and quiet scenes. Action in one, dialogue, description and introspection in the other. You've got to have a balance of both scenes; too much action is exhausting, too much thinking or talking is boring. </p>
<p>All of your scenes need to be interesting or propulsive. The common wisdom is that after every action scene, the reader needs a quiet scene to 'wind down.' I disagree. You can 'wind down' any time if you stop reading. All your scenes need to be action scenes. But quiet scenes contain a different kind of action.</p>
<p>To steal terms from physics, action scenes do 'work,' but quiet scenes have potential to do work. This potential crackles with anticipation of the work to come, and creates interest in quiet moments. This can be effected through use of setting, props, placement of various elements, or the characters themselves;</p>
<p>Examples:</p>
<ul>
  <li>Putting characters in a dark space: why is it dark? What is in the space the characters cannot (yet) see?</li>
  <li>Putting lots of characters in a small space: self-explanatory; claustrophobic; will the characters need to leave in a hurry? Is one of these characters an antagonist in disguise? Etc</li>
  <li>Restricting characters to one entry, particularly if much effort to get through; will the character need to leave in a hurry? Will they get trapped by an entering antagonist?</li>
  <li>Characters waiting for another character to come; this can create a sense of (if admittedly cheap) anticipation;</li>
</ul>

<h5>6.8.7 	Make Action Present </h5>
<p>This is the same rule as under 11.19 Description in Action, but refers to scenes, rather than detail.</p>
<p>Always pull past action into the present as much as possible. For instance, if your story begins with a protagonist who has been a vampire for 2 years, change it so the story begins with a human turning into a vampire. If your protagonist was in a car crash in the past, begin your story with the car crash happening right now, and make the plot follow on from that. If anything interesting happened to your characters, change it so it’s happening right now. Don’t conceal the best scenes in backstory.</p>
<p>Authors try to compromise this rule by showing the past action in a flashback. This is not an acceptable remedy unless the story would literally not work if the action was in the present. Do everything you can to move action into the present.</p>

<h2 id="post-6-9" className="blog-post-title">6.9: Chronology</h2>
               <p>This is the order of your scenes. You can have: </p>
               <ul>
                <li>Linear chronology (events told in temporal order; when they happened in time, from the earliest to the most recent); or</li>
                <li>Non-Linear chronology (events told out of temporal order)</li>
               </ul>
               
               <p>You might flashback, flashforward or repeat a scene to reveal something new, or shuffle the scenes around as if by random.</p>
               <p>Some caveats about using ‘time jumps’:</p>
               <ol>
                <li>As Tom French said: <i>“Stay as close to the action as possible.”</i></li><a href="#f9"><sup>9</sup></a>
                <li>Do not write in a time jump before you have ensured the reader’s interest and hunger with live issue/s. A time jump is a fantastic opportunity for a reader to hedge their bets and close the book, because it requires regenerating the reader’s interest all over again – kind of like dying and regenerating in a video game; if the game hasn’t been promising so far, why not take the death as an opportunity to switch off?</li>
                <li>Only bring in flashbacks and flashforwards after generating curiosity in your reader as to what the flashback/flashforward is conveying. Don’t bring in a flashback/forward to answer a question your reader didn’t realise they wanted to know. Don’t make your reader ask ‘why are we flashing back?’</li>
               </ol>

<p>For instance, you might start ‘in media res’ and have main characters alluding to some critical past event. Only after generating enough interest about the alluded to event can you then flashback and show it, because your reader knows what it’s for and is interested in seeing it.   </p>

<h5>6.9.1 	Reordering Chronology creates two timelines </h5>
<p>When scenes are in order, they suggest chain-linked linear causation; that actions in the past affect and cause the present, and the present, future, etc. When you pull scenes out of order, you are putting it on yourself to actively explore possible causation apart from temporality, or perhaps subvert classical causation entirely. I.e. the time-based ordering of events did not cause the situation, something else did. This may entertain determinism or predestination, 'character as destiny,' 'genes/biology' as destiny, coincidence, supernatural intervention, etc. </p>
<p>Caution: This shouldn't be done merely for style. It's not an excuse for 'listen to this funny character anecdote from ten years ago' or 'want to see if the main characters got married and had kids?' When you When the past or future manifests in a story, it literally becomes part of the present, like a reordered domino sequence. You create a causative sequence distinct from your temporal sequence, and now have to manage both.  </p>
<p>Examples:</p>
<ul>
  <li>You keep flashing back to an incident in the character's childhood, suggesting it is immediately determinative of the character's present/future; </li>
  <li>You flashforward to a distant future, suggesting the present moment determines everything that comes later; </li>
  <li>Events are experienced in seemingly random order, suggesting the character's inability to identify causation in his/her life, or a lack of causation. </li>
</ul>

<p>Don't get non-linear chronology confused with time-travel. You can have a linearly chronological story where the character jumps back and forward in their own timeline, as long as you stay inside the character's relative present, i.e. their head. If you jump out of their head, then it's non-linear.</p>

<h2 id="post-6-10" className="blog-post-title">6.10: The 'French Scene'</h2>
              <p>This is a screenwriting concept, but may be transferable to novel-writing. Normally you think of scenes being contained within separate settings; the end of one scene and the start of another is signaled by a change in setting. Sometimes the same scene may span multiple different settings, for instance if characters are travelling (e.g. in the The Great Railway Bazaar, this is somewhat unavoidable). </p>
              <p>Conversely, you can also have multiple scenes take place in the same setting (unavoidable if your story takes place in one setting). This is called ‘the French Scene’, and is an artifice of French neoclassical theatre. Between scenes, what changes is not the setting, but the entrance/exit of characters or the introduction of knowledge/revelation which critically changes the scene to the extent it would be artificial to treat the post-revelation scene as a continuation of the previous scene. Relationships and characters may be so altered that that the former virtually extinguish and new ones come into creation. A character who was a lover in the previous scene, may become an enemy in the next.</p>
              <p>You may emphasise the scene change by creating ‘sub-locations’ within your setting. For instance, if characters are confined to a room, they may switch positions, or activities (characters sitting facing one another creates a different feel from one character sitting facing a computer and another hiding in the cupboard, or sleeping in the bed).</p>
              <p>Again, characters may be cleaning and restocking the panic room, joking around and playing. The next moment they hear intruders have broken in, and close and lock themselves in the panic room. There is no setting change, but there has been a clear scene change.</p>
              
              <h2 id="post-6-11" className="blog-post-title">6.11: Progression</h2>
                <p>Jack Bickham says, “All good fiction moves forward.”</p>
                <p>A story must progress naturally; actions have reactions, risks have consequences, and changes have greater and greater effect throughout the characters’ lives.</p>
                <p>McKee lists 4 primary techniques for depicting progression:</p>
                
                <h5>6.11.1 	Social Progression (‘widening’)</h5>
<p>You can widen the impact of character actions onto society. Throughout a story, the actions of a small number of characters may radiate out to affect more and more people. Ideally, this will happen gradually, not all at once. </p>
<p>It may also be that the character’s actions have always affected many, however, they only gradually learn of the wider effects as the story goes on.</p>
<p>If you go for this type of progression, make sure your character has a role or job which would potentially affect many in a critical way: this is why you tend to see certain professions in novels opposed to others (doctors, lawyers, politicians, police and detectives, scientists, as opposed to plumbers, wildlife rangers, dentists, garbage collectors, lab technicians, secretaries, and salespeople).</p>

<h5>6.11.2 	Personal Progression (‘deepening’)</h5>
<p>It goes without saying your characters’ actions should have personal effects upon those closest to them; family, lovers, friends, colleagues, etc.</p>
<p>However, not only will personal progression affect those closest to your protagonist, but it will affect them in a critical way; in the deepest darkest, most sensitive parts of them – emotionally, psychologically, morally, physically. It’s going to exhume and expose their worst hidden weaknesses, or attack and undermine their greatest strengths.</p>

<h5>6.11.3 	Scene Transition </h5>
<p>You might not consider this in the writing process, especially if you write scenes in isolation to each other, but a lack of natural transition will rear its head in the rereading process, necessitating its management in the editing and re/structuring process. </p>
<p>Transition is another element of story progression; one thing leading to the next. Scenes should also have this feel, which is the utility of transitions. </p>
<p>McKee suggests the vehicle for scene transition is a thing held in common by two scenes or counterpointed between them. This ‘thing’ may be:</p>

<ul>
  <li><u>A trait:</u></li>
  <ul>
    <li>Commonality: Scene 1 depicts the childish child, scene 2 depicts the childish adult; </li>
    <li>Counterpoint: scene 1 depicts the awkward child; scene 2 depicts the elegant adult</li>
  </ul>
  <li><u>An action:</u></li>
  <ul>
    <li>Commonality: Scene 1 shows the foreplay, scene 2 shows the sex;</li>
    <li>Counterpoint: scene 1 shows consensual sex, scene 2 becomes a rape;</li>
  </ul>
  <li><u>An object:</u></li>
  <ul>
    <li>Commonality: Scene 1 in an archeology museum, scene 2 in the excavation dig-site; </li>
    <li>Counterpoint: Scene 1 in a jungle, scene 1 in a city;</li>
  </ul>
  <li><u>A word:</u></li>
  <ul>
    <li>Commonality: Scene 1 starts with a thematic quote, scene 2 repeats this quote (or adds to it, or finishes it) </li>
    <li>Counterpoint: Scene 1 shows someone being complimented, scene 2 shows them being cursed;</li>
  </ul>
  <li><u>Lighting or visual atmosphere/mood:</u></li>
  <ul>
    <li>Commonality: Scene 1 describes shadows at dawn, scene 2 describes darkening twilight;</li>
    <li>Counterpoint: Scene 1 set under a blue sky, scene 2 a red sky.</li>
  </ul>
  <li><u>Sound:</u></li>
  <ul>
    <li>Commonality: Scene 1 describes drumming, scene 2 describes thunder;</li>
    <li>Counterpoint: Scene 1 describes the harmonious music created by an orchestra, scene 2 describes the mindless noise created by the workers at a big factory.</li>
  </ul>
  <li><u>An idea:</u></li>
  <ul>
    <li>Commonality: scene 1 shows a portrait being painted, scene 2 shows a baby being born;</li>
    <li>Counterpoint: scene 1 shows a baby being born and nursed, scene 2 shows an animal being slaughtered.</li>
  </ul>
</ul>

<p>You could apply this tip to almost anything in this entire document, but don’t go for the obvious. Try to create an imaginative link to transition scenes. Like symbolism and irony, it should have subconscious appeal, and not slap the reader in the face.</p>

<h2 id="post-6-12" className="blog-post-title">6.12: Bait-and-Switch Scene</h2>

<p>If you set your scene one place, populate it with certain characters, and have certain events occur, don’t wistfully carry the reader to an imagined scene of another place, with other characters, and there events. Otherwise you might as well just write that scene.</p>
<p>Mittelmark and Newman provide some examples:</p>
<p className='indent-text-1'>She imagined the ballroom as it must once have been.</p>
<p className='indent-text-1'>I gazed out the window and remembered the purity of the Arctic snows.</p>
<p className='indent-text-1'>She imagined how it could have been if only Reynaldo were here.</p>

<p>This is even worse when the present scene gets disregarded for the imaginary scene, e.g.</p>
<p className='indent-text-1'>She walked into the upper-class Manhattan party, a secret wonderland of plutocratic excess. But she couldn’t relate to any of these people; their old money and fortune 500 fathers. Right then, she wanted nothing more than to be back home on the farm, with her Irish Draught stallion, Icarus, riding over the broad, green hills. She wouldn’t even mind the frequent rain showers; the smell of wet hay was infinitely preferable to the smog of tobacco and perfume in here. Thirty minutes later, having talked to no one, she left the hotel lobby. </p>

{/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

<ThoughtForm />

<ThoughtList />

{/* ------------------------------------------------- footnotes --------------------------------------------- */}

<div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">Jack Hart, <i>Storycraft: Complete Guide to Writing Narrative Nonfiction.</i></li>
                    <li id="f2"> Sol Stein, <i>How To Grow A Novel.</i></li>
                    <li id="f3">William Sloane, <i>The Craft of Writing.</i></li>
                    <li id="f4">Jack Hart, <i>Storycraft: Complete Guide to Writing Narrative Nonfiction.</i></li>
                    <li id="f5">Jack Hart, <i>Storycraft: Complete Guide to Writing Narrative Nonfiction.</i></li>
                    <li id="f6">Howard Mittelmark and Sandra Newman, <i>How NOT to Write a Novel.</i></li>
                    <li id="f7">Jack Hart, <i>Storycraft: Complete Guide to Writing Narrative Nonfiction.</i></li>
                    <li id="f8">Jack Hart, <i>Storycraft: Complete Guide to Writing Narrative Nonfiction.</i></li>
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
                <li><a href="#post-6-1">6.1: Anatomy of a Scene</a></li>
                <li><a href="#post-6-2">6.2: 'Sex Words'</a></li>
                <li><a href="#post-6-3">6.3: Forums for Raising and Resolving Conflict</a></li>
                <li><a href="#post-6-4">6.4: The 'E Chain'</a></li>
                <li><a href="#post-6-5">6.5: Diametrics</a></li>
                <li><a href="#post-6-6">6.6: The First Scene</a></li>
                <li><a href="#post-6-7">6.7: The Last Scene</a></li>
                <li><a href="#post-6-8">6.8: All the Other Scenes</a></li>
                <li><a href="#post-6-9">6.9: Chronology</a></li>
                <li><a href="#post-6-10">6.10: The 'French Scene'</a></li>
                <li><a href="#post-6-11">6.11: Progression</a></li>
                <li><a href="#post-6-12">6.12: Bait-and-Switch Scene</a></li>
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
