import '../App.css'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function Types() {
    return (
        <div>

            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <h1 className="display-4">Types of Scary Events</h1>

                <div id="wrapper" className="text-left">
                    <p className="lead my-3">It is a mistake to fancy that horror is associated inextricably with darkness, silence, and solitude.  </p>
                    <i>—  H. P. Lovecraft</i>
                    <p className="lead my-3">More disturbing than the unknown is a distortion of the familiar.  </p>
                    <i>—  Magic The Gathering</i>
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
                        <h2 className="blog-post-title" id="post-2-1">2.1 GENERAL</h2>
                            <p className="blog-post-meta">January 1, 2014 by <a href="#">zerda</a></p>

                            <div id="content">

                                <p>GENERAL EXPLANATION.</p>
                                <p>You may be familiar with the commonly accepted division between ‘Horror’ and ‘Terror’ fiction (Stephen King also adds ‘Nausea’ to his categories). I'd add a fourth category: ‘uncanny/weird’ to the list, but also explore other possible types.</p>

<h5>2.2 Natural/Supernatural</h5>

<p>Robert McKee divides the horror genre into three categories.</p>
<p className='purple-bold'>I. the Uncanny</p>
<p>This is where the source of horror has a natural or scientific explanation, including aliens, science experiments, a psychotic killer, etc. </p>

<p className='purple-bold'>II. Supernatural</p>
<p>Where the source of horror is explained by supernatural phenomenon. </p>

<p className='purple-bold'>III. Super-Uncanny</p>
<p>The story does not confirm whether the source of the horror is natural or supernatural, leaving the audience to guess. </p>
<p>An example of this may be where it’s left equally likely that supernatural events are real, or alternately, inventions of the protagonist’s crazy mind.</p>

<h2 className="blog-post-title" id="post-2-2">2.2 Manifest or Latent</h2>
<p>This relates to how the type of horror expresses itself. You can split horror into two styles:</p>

<p className='purple-bold'>I. Manifest Horror</p>
<p>This takes something generically agreed to be terrifying and depicts it as such. Normally the horror is depicted through visceral signals (visual, auditory, direct and immediate). </p>

<p className='purple-bold'>II. Latent Horror</p>
<p>Latent Horror (also called Uncanny horror) takes something ordinary and turns it into something terrifying. Bonus points if that something ordinary is generally considered good, safe or benign. This form of horror story cannot rely on direct signals as above. It will use subtle cues to transform the symbolic meaning of one thing into another.   </p>

<h2 className="blog-post-title" id="post-2-3">2.3 Others</h2>
<p>Another possible division is between ‘Cosmic’ horror and ‘Absurd’ horror, which also tend to be polar opposites:</p>

<p className='purple-bold'>I. Cosmic Horror</p>
<p>Horror alien to all conceivable Earth-bound experience. Usually sourced from space, parallel universes or other dimensions. May involve quantities (of size, multitude) which are uncountable, or counter to classical physics and matter. Involves forms of horror so bizarre and counter to human logic and experience that they are almost entirely unimaginable (and in the case of Lovecraft, who pioneered this style, literally unimaginable). Characters may begin to lose their minds merely attempting to contemplate the source of horror, let alone actually glimpsing it in full physical form.</p>

<p className='purple-bold'>II. Absurd Horror</p>
<p>Deals with everyday, mundane routines kinds of activity/people/events/objects, but saps the purpose or meaning out of those things until they seem strange, pointless, artificial or menacing. A metaphor for this kind of horror is ‘semantic satiation’, where you repeat an ordinary word until it sounds strange. This form of horror is coming from a tradition of ‘absurdism’ which entertains the idea that existence is meaningless or unreal, rationalism is an illusion, resistance is futile, and people do things without really knowing why.</p>

<p className='purple-bold'>III. Postmodern Horror</p>
<p>This is where the techniques of the story medium are drawn attention to, for the purpose of enhancing the audience’s vulnerability. This may effect breaking the fourth wall, the cost of acknowledging the story’s medium pays for a heightened sense horror if done right.</p>
<p>The ring is an example where the source of horror operates through video/TV screens – which is the medium through which the audience receives the story. In other films (such as An American Werewolf in London and Demon, the source of horror spontaneously makes deliberate eye contact with the camera. In both movies, this is where the protagonist first becomes ‘invaded’ by the supernatural force (werewolf, demonic possession), which creates the sense of a supernatural awareness of the audience.</p>

<p className='purple-bold'>IV. Psychological Horror</p>
<p>There is a saying that your main character should always be the person with the most at stake in the story. By extension, once you have chosen your source of horror for the story, your main character should be someone who will find the source of horror the scariest or have the most at stake. This may be reflected by the personality of the main character;</p>
<p>Example:</p>
<p>In Nightmare at 20,000 feet, the main character is implied to be mentally ill and suicidal. Therefore seeing someone so bizarre as a person standing on the plane wing during flight is not only a potential threat to the main character’s safety, but in the alternative (the person is not real) it is a likely threat to his mental health, and by extension the safety of all the passengers.</p>

<p>This is also reflected by the way the scary events themselves are written.</p>
<p>Example:</p>
<p>Grin of the dark – the disapproval and ridiculing the main character gets from his girlfriend’s parents – plus the constant imagining of a clown presence nearby – starts to imply that the main character fears being seen by people to be a clown or a fool.</p>

<p className='purple-bold'>V. Retroactive Horror </p>
<p>TVTropes calls this ‘fridge horror.’ This is where information becomes scary after the fact. It’s like ‘Terror’, but where terror often builds before an incident of horror, retro horror follows the event; making the event scary/ier in retrospect, with the acquisition of new information.</p>
<p>Example:</p>
<p>The mention of the child watching the main character at the start of Poroth Farm becomes scarier when you realise the child may be the alien.</p>

<p>This trope can also be coupled with an instance of the ‘don’t blink’ variant of ‘the gaze’. </p>




<h2 className="blog-post-title" id="post-2-4">2.4 Turncoat</h2>

<p>In a scary moment, you want your companions to be on your side. The 'turncoat' is where the protagonist's allies are implied to be less loyal, trustworthy, helpful, capable, or present than hoped.</p>
                                
                                <p>It may be the protagonist's ally is actually disloyal. It may be the protagonist has estranged themselves (accidentally or not) from their ally. It also may be a complete accident or misunderstanding.</p>
                                
                                <p>The opening quote for this section is from a scene where it's implied that the hand Eleanor was gripping in the dark, did not actually belong to her friend, Theo, but someone, or something, else. Neither Eleanor nor Theo acted disloyal, a mistake by Eleanor lends itself to the suggestion that Theo is not as close to Eleanor as she'd hope. </p>
                                
                                <p>This technique does not create a scary scene per se, but if you set it up effectively, it can create paranoia and give the scary events more weight when they happen. For instance, a character suggests that if in danger, they are tempted to rescue themselves over their partner; a character acts in a way inconsistent with cautionary, wise behavior pending a possible threat (suggesting they cannot be trusted to act rationally in an emergency). </p>
 
<h2 className="blog-post-title" id="post-2-5">2.5 Atmospheric</h2>
<p>Details which aren’t in themselves scary, and which don’t themselves suggest the happening of a scary thing, but evoke dread in the context of a horror story. These are normal things that happen all the time on their own, and are often combined or paired with other features in a scary story.</p>
<p>Example:</p>
<p>a shrieking wind, thunder and lightning, a creaking door, nightfall, etc.</p>

<h2 className="blog-post-title" id="post-2-6">2.6 The Weird/Uncanny</h2>
<p>Not necessarily ‘horror’ scary, but includes coincidences, mind-fucks, ‘glitch in the matrix’ experiences, unexplained phenomena;</p>
<p>Example:</p>
<p>A character inadvertently says something which eerily predicts a future bad event.</p>

<h2 className="blog-post-title" id="post-2-7">2.7 Nausea</h2>
<p>Basically describing disgusting things, usually in gratuitous detail. I don’t tend to like this category nor use it, so it would be hypocritical of me to insert a ‘good’ example.</p>

<h2 className="blog-post-title" id="post-2-8">2.8 Terror</h2>
<p>Details which suggest the happening of a (usually unseen) scary thing. This is probably the highest and most desirable form of horror (if you can manufacture it) because it is incredibly effective and unlike Horror (below) doesn’t exhaust itself. It’s normally a feeling that something really bad is about to happen or something really horrible is about to be revealed. </p>

<h2 className="blog-post-title" id="post-2-9">2.9 Horror</h2>
<p>This is the actual revealing of a source of horror. Popular but unfortunately has a short life span because once you reveal your horror, you can’t get that response back again for the same source of horror in such pure form. </p>

{/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

<ThoughtForm />

<ThoughtList />

{/* ------------------------------------------------- footnotes --------------------------------------------- */}

<div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">Stephen King, <i>Everything's Eventual. </i></li>
                    <li id="f2">Daphne Du Maurier, <i>Not After Midnight, and Other Stories.</i></li>
                    <li id="f3">Stephen King, <i>1983.</i></li>
                    <li id="f4">Stephen King, <i>1974.</i></li>
                    <li id="f5">John Langan, <i>2016.</i></li>
                    <li id="f6"><i>1985.</i></li>
                  </ol>
                </div>

{/* ---------------------------------------------------------------------------------------------------------- */}


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
                                <li><a href="#post-act-i">Act I. Departure</a></li>
                                <li><a href="#post-act-ii">Act II. Initiation</a></li>
                                <li><a href="#post-act-iii">Act III. Return</a></li>
                                <li><a href="#post-act-summary">Summary</a></li>
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
