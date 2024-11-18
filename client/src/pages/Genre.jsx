import '../App.css'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function Subtext() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <h1 className="display-4">Subtext</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">We shall see that at which dogs howl in the dark, and that at which cats prick up their ears after midnight </p>
          <i>— H. P. Lovecraft</i>
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
              <h2 id="post-10-1" className="blog-post-title">1.1: What is Scary?</h2>
              <p className="blog-post-meta">January 1, 2014 by <a href="#">zerda</a></p>

              <div id="content">
                <p>What are the scariest words a character in a horror story will ever hear?  </p>
               <ul>
                <li>Not, “There is a giant spider in your bedroom,”;</li>
                <li>Not, “There is a serial killer in your house,”;</li>
                <li>Not, “A poltergeist has spirited your house away into a fifth dimension”;</li>
                <li>Not, “You are dead. You have been dead this whole time,”;</li>
                <li>Not, “They are coming to get you, Martha,”;</li>
                <li>Not, “You will die in seven days,”;</li>
                <li>Not, “28 days, 6 hours, 42 minutes, 12 seconds, that is when the world will end,”;</li>
               </ul>
<p>None of these, because the answer to all of these is: “Thanks for letting me know, now I can respond appropriately.”</p>
<p>But – </p>
<p>“It's nothing.”</p>
<p>Horror is not about what you know – it’s about what you don’t know.</p>


                <p>When your characters are in a position where they wouldn’t realistically express what they mean, you use subtext to communicate.</p>
                <p>Footnote<a href="#f1"><sup>1</sup></a></p>
                <p>Footnote<a href="#f2"><sup>2</sup></a></p>
                <p>Footnote<a href="#f3"><sup>3</sup></a></p>
                <p>Footnote<a href="#f4"><sup>4</sup></a></p>
                <p>Footnote<a href="#f5"><sup>5</sup></a></p>
                <p>Footnote<a href="#f6"><sup>6</sup></a></p>
                <p>Footnote<a href="#f7"><sup>7</sup></a></p>
                <p>Footnote<a href="#f8"><sup>8</sup></a></p>
                <p>Footnote<a href="#f9"><sup>9</sup></a></p>








                <p className='indent-text-1'>Indent text.</p>

                <h5>10.1.1 Heading h5</h5>


                <ol>
                  <li>Concurrent, and</li>
                  <li>Contradictory.</li>
                </ol>

                <h6>Heading h6</h6>


                <h2 id="post-10-2" className="blog-post-title">10.2 Title 2</h2>

                <p>Symbolism is far less important than subtext, so don’t worry too much about it, but it’s still worth knowing what it is and what it does.</p>


{/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

<ThoughtForm />

<ThoughtList />

{/* ------------------------------------------------- footnotes --------------------------------------------- */}

<div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">From Steven Spielberg’s <i>War of the Worlds.</i></li>
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
                <li><a href="#post-10-1">10.1: What is Scary?</a></li>
                <li><a href="#post-10-2">10.2: Symbolism</a></li>
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
