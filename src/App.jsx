
import { useEffect, useRef, useState } from "react";
import "./App.css";

const stories = [
  {
    id: "kingdom",
    category: "Kingdom",
    date: "Before 1897",
    title: "Inside the Kingdom of Rwanda",
    description:
      "Explore the institutions, royal court and communities that shaped a centuries-old kingdom.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Sunlight breaking over the hills and plains of East Africa",
    readTime: "6 min read",
    body: [
      "Long before colonial rule, Rwanda was a kingdom with its own institutions, systems of governance and cultural traditions. The royal court connected communities across a landscape where oral histories helped carry knowledge between generations.",
      "The kingdom changed over time. Its history is best understood through many sources—including oral traditions, historical research and the perspectives of the communities who lived it—rather than a single, unchanging account.",
    ],
    sources: [
      {
        name: "Encyclopaedia Britannica — Rwanda: History",
        url: "https://www.britannica.com/place/Rwanda/History",
      },
    ],
  },
  {
    id: "colonial",
    category: "Colonial period",
    date: "1897–1962",
    title: "A country under colonial rule",
    description:
      "How German and then Belgian administration transformed political and social life.",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A path winding between trees in a green landscape",
    readTime: "8 min read",
    body: [
      "Germany established colonial control over Rwanda in the late nineteenth century. After the First World War, Belgium administered the territory under a League of Nations mandate and later a United Nations trusteeship.",
      "Colonial authorities reshaped existing institutions and increasingly formalized social categories in identity documents and administration. These policies changed political life and deepened divisions, with consequences that continued into the independence era.",
    ],
    sources: [
      {
        name: "Encyclopaedia Britannica — Rwanda: History",
        url: "https://www.britannica.com/place/Rwanda/History",
      },
      {
        name: "United Nations — Rwanda",
        url: "https://www.un.org/en/preventgenocide/rwanda/",
      },
    ],
  },
  {
    id: "independence",
    category: "Independence",
    date: "1 July 1962",
    title: "The road to independence",
    description:
      "The political changes that led to Rwanda becoming an independent republic.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Mountain ridges layered against a hazy sky",
    readTime: "5 min read",
    body: [
      "Rwanda became independent on 1 July 1962, after a period of major political change in the late 1950s and early 1960s. The monarchy came to an end and a republic was established.",
      "Independence was a turning point, but not a simple one. To understand this era, it helps to read accounts of the political transition alongside the longer history of colonial rule and the experiences of Rwandans themselves.",
    ],
    sources: [
      {
        name: "Encyclopaedia Britannica — Rwanda: History",
        url: "https://www.britannica.com/place/Rwanda/History",
      },
    ],
  },
  {
    id: "remembrance",
    category: "Remembrance",
    date: "1994 · April–July",
    title: "Remembering the Genocide against the Tutsi",
    description:
      "Learn about the 1994 genocide and why remembrance and education matter.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Quiet light falling across a green landscape",
    readTime: "9 min read",
    body: [
      "In 1994, the Genocide against the Tutsi took place in Rwanda over approximately 100 days. Tutsi were targeted for extermination. Hutu and others who opposed the genocide were also killed.",
      "Remembering the genocide means honoring the victims, listening to survivors and confronting the conditions and choices that made it possible. It also means rejecting denial and distortion. This introduction is not a substitute for survivor testimony or detailed historical research.",
    ],
    sources: [
      {
        name: "United Nations — Outreach Programme on the 1994 Genocide against the Tutsi in Rwanda",
        url: "https://www.un.org/en/preventgenocide/rwanda/",
      },
      {
        name: "UNESCO — Preventing violent extremism and genocide",
        url: "https://www.unesco.org/en/education/preventing-violent-extremism",
      },
    ],
  },
  {
    id: "intore",
    category: "Culture",
    date: "Living heritage",
    title: "Intore: the dance of heroes",
    description:
      "Discover a celebrated performance tradition of rhythmic movement, song and poetry.",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Rwandan_Child_dancing_traditional_dance_in_traditional_outfit.jpg/960px-Rwandan_Child_dancing_traditional_dance_in_traditional_outfit.jpg",
    imageAlt: "A Rwandan child dancing in traditional clothing",
    imageCredit: "Bertzzi / Wikimedia Commons",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Rwandan_Child_dancing_traditional_dance_in_traditional_outfit.jpg",
    imageLicense: "CC BY 4.0",
    imageLicenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    readTime: "4 min read",
    body: [
      "Intore is a Rwandan dance tradition associated with powerful choreography, rhythmic movement and song. Historically performed at the royal court, it is now shared at cultural events and celebrations.",
      "Dance, music and poetry are living heritage: they continue to evolve as artists and communities pass traditions on and give them new expression.",
    ],
    sources: [
      {
        name: "UNESCO — Intangible Cultural Heritage",
        url: "https://ich.unesco.org/",
      },
    ],
  },
  {
    id: "imigongo",
    category: "Culture",
    date: "Living heritage",
    title: "Imigongo: patterns with a story",
    description:
      "Meet the bold geometric art form carried forward by Rwandan makers.",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Fresque_Imigongo-Festival_international_de_g%C3%A9ographie_2011_%282%29.jpg/960px-Fresque_Imigongo-Festival_international_de_g%C3%A9ographie_2011_%282%29.jpg",
    imageAlt: "A Rwandan imigongo artwork with raised geometric patterns",
    imageCredit: "Ji-Elle / Wikimedia Commons",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Fresque_Imigongo-Festival_international_de_g%C3%A9ographie_2011_(2).jpg",
    imageLicense: "CC BY-SA 3.0",
    imageLicenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    readTime: "4 min read",
    body: [
      "Imigongo is a distinctive Rwandan art form known for its raised geometric patterns and bold contrasts. The patterns are traditionally made using natural materials and arranged into rhythmic shapes.",
      "Today, artists continue to make and reinterpret imigongo. Supporting contemporary makers is one way to keep cultural knowledge visible, valued and in the hands of the communities who carry it.",
    ],
    sources: [
      {
        name: "Rwanda Cultural Heritage Academy",
        url: "https://rcha.gov.rw/",
      },
    ],
  },
];

const filters = ["All stories", "Kingdom", "Colonial period", "Independence", "Remembrance", "Culture"];

const places = [
  {
    name: "Kigali Genocide Memorial",
    region: "Kigali",
    description:
      "A place of remembrance and learning about the 1994 Genocide against the Tutsi. Visitors can honor victims, learn from the history and reflect on the importance of remembrance.",
    activities: [
      "Visit the exhibitions and memorial gardens",
      "Pause for quiet reflection at the burial gardens",
      "Join a guided visit when available",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kigali_Genocide_Memorial_site.jpg",
    imageAlt: "The garden grounds at the Kigali Genocide Memorial",
    imageCredit: "Brenney Nickson / Wikimedia Commons",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Kigali_Genocide_Memorial_site.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    link: "https://kgm.rw/",
    linkLabel: "Plan a respectful visit",
  },
  {
    name: "Volcanoes National Park",
    region: "Northwest Rwanda",
    description:
      "Mist-covered Virunga volcanoes rise above bamboo forests and montane habitats. Guided visits offer the chance to learn about mountain gorilla conservation and the communities living near the park.",
    activities: [
      "Trek to see mountain gorillas with a park permit",
      "Track golden monkeys with a guide",
      "Hike to Dian Fossey’s former research site",
    ],
    wildlife: ["Mountain gorillas", "Golden monkeys", "Forest buffalo"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Mountain_gorilla_%28Gorilla_beringei_beringei%29_yawn.jpg/960px-Mountain_gorilla_%28Gorilla_beringei_beringei%29_yawn.jpg",
    imageAlt: "A mountain gorilla in Volcanoes National Park, Rwanda",
    imageCredit: "Charles J. Sharp / Wikimedia Commons",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Mountain_gorilla_(Gorilla_beringei_beringei)_yawn.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    link: "https://www.visitrwanda.com/destinations/volcanoes-national-park/",
    linkLabel: "Explore Volcanoes National Park",
  },
  {
    name: "Nyungwe Forest",
    region: "Southwest Rwanda",
    description:
      "Walk beneath the canopy of one of Africa’s oldest rainforests. Forest trails and a high canopy walkway reveal an extraordinary world of birds, plants and primates.",
    activities: [
      "Walk the canopy walkway above the forest",
      "Join a guided chimpanzee-tracking excursion",
      "Hike forest trails and look for birds",
    ],
    wildlife: [
      "Chimpanzees",
      "Ruwenzori colobus monkeys",
      "L’Hoest’s monkeys",
    ],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Nyungwe_canopy_walk.jpg/960px-Nyungwe_canopy_walk.jpg",
    imageAlt: "The canopy walkway above Nyungwe Forest",
    imageCredit: "Laeliza23 / Wikimedia Commons",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Nyungwe_canopy_walk.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    link: "https://www.visitrwanda.com/destinations/nyungwe-national-park/",
    linkLabel: "Explore Nyungwe Forest",
  },
  {
    name: "Akagera National Park",
    region: "East Rwanda",
    description:
      "Savannah, lakes and wetlands make up this wildlife-rich landscape. Visitors can explore on a guided drive or learn about conservation efforts supporting wildlife in the park.",
    activities: [
      "Take a guided game drive across the savannah",
      "See the park from the water on a Lake Ihema boat trip",
      "Go birdwatching around the lakes and wetlands",
    ],
    wildlife: ["Lions", "Elephants", "Giraffes", "Zebras", "Hippos", "Rhinos"],
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Akagera_National_Park_Rwanda.jpg/960px-Akagera_National_Park_Rwanda.jpg",
    imageAlt: "A lake in Akagera National Park",
    imageCredit: "Emery045 / Wikimedia Commons",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Akagera_National_Park_Rwanda.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    link: "https://www.visitrwanda.com/destinations/akagera-national-park/",
    linkLabel: "Explore Akagera National Park",
  },
  {
    name: "Lake Kivu",
    region: "Western Rwanda",
    description:
      "The lakeside towns of Rubavu, Karongi and Rusizi offer peaceful shorelines, boat trips and a chance to experience local life along one of the Great Lakes of Africa.",
    activities: [
      "Take a boat trip or go kayaking on the lake",
      "Relax by the water in a lakeside town",
      "Explore a section of the Congo Nile Trail on foot or by bike",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Amazing_Island_in_lake_Kivu.jpg",
    imageAlt: "A green island surrounded by the waters of Lake Kivu",
    imageCredit: "YvanNB / Wikimedia Commons",
    imageCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Amazing_Island_in_lake_Kivu.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    link: "https://www.visitrwanda.com/",
    linkLabel: "Explore Visit Rwanda",
  },
];

const milestones = [
  {
    date: "Before 1897",
    title: "Kingdom of Rwanda",
    text: "A kingdom with its own institutions and evolving history.",
  },
  {
    date: "1897",
    title: "German colonial rule",
    text: "Germany establishes colonial control over Rwanda.",
  },
  {
    date: "1916",
    title: "Belgian administration",
    text: "Belgium takes control during the First World War.",
  },
  {
    date: "1 July 1962",
    title: "Independence",
    text: "Rwanda becomes an independent republic.",
  },
  {
    date: "1994",
    title: "Genocide against the Tutsi",
    text: "The genocide is carried out over approximately 100 days.",
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "arrow-icon arrow-icon--diagonal" : "arrow-icon"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All stories");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStory, setSelectedStory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (selectedStory) {
      dialogRef.current?.showModal();
    }
  }, [selectedStory]);

  const visibleStories = stories.filter((story) => {
    const matchesCategory =
      activeFilter === "All stories" || story.category === activeFilter;
    const searchableText =
      `${story.title} ${story.description} ${story.category} ${story.date}`.toLowerCase();
    return matchesCategory && searchableText.includes(searchTerm.toLowerCase().trim());
  });

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <div className="topline">
        <span>AN OPEN ARCHIVE OF RWANDAN HISTORY & CULTURE</span>
        <span className="topline-right">
          <span className="status-dot" />
          A living story, told together
        </span>
      </div>

      <header className="site-header">
        <a
          className="brand"
          href="#home"
          aria-label="Amateka — home"
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            A
          </span>
          <span className="brand-name">
            amateka<span>.</span>
            <small>RWANDA HISTORY ARCHIVE</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav
          className={menuOpen ? "primary-nav primary-nav--open" : "primary-nav"}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <a href="#stories" onClick={closeMenu}>The archive</a>
          <a href="#places" onClick={closeMenu}>Places</a>
          <a href="#timeline" onClick={closeMenu}>Timeline</a>
          <a href="#culture" onClick={closeMenu}>Culture</a>
          <a href="#about" onClick={closeMenu}>Our approach</a>
        </nav>
        <a className="header-link" href="#stories">
          Explore stories <ArrowIcon diagonal />
        </a>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-image" role="img" aria-label="The hills and landscape of East Africa at sunset" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">
              <span /> A HERITAGE THAT LIVES ON
            </p>
            <h1 id="hero-title">
              Our past,
              <br />
              <em>in our own words.</em>
            </h1>
            <p className="hero-description">
              Stories, people and places that shape Rwanda—preserved with care,
              shared with everyone.
            </p>
            <a className="button button--light" href="#stories">
              Explore the archive <ArrowIcon />
            </a>
          </div>
          <div className="hero-caption">
            <span>01 / 05</span>
            <span>Land of a thousand hills</span>
          </div>
          <div className="hero-side-note">AMATEKA YACU · UMURAGE WACU</div>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="intro-label">
            <span className="section-index">01 — WHY WE’RE HERE</span>
            <span className="index-rule" />
          </div>
          <div className="intro-copy">
            <h2>
              History is more than
              <br />
              <span>dates in a book.</span>
            </h2>
            <p>
              It lives in the memories we carry, the places we return to, the
              songs we sing and the stories shared across generations.
              Amateka is a space to explore Rwanda’s past with curiosity,
              respect and room for many voices.
            </p>
            <a className="text-link" href="#approach">
              What guides us <ArrowIcon />
            </a>
          </div>
          <div className="intro-stamp" aria-label="Our history. Our heritage.">
            <span>AMATEKA YACU</span>
            <strong>RWANDA</strong>
            <span>UMURAGE WACU</span>
            <i aria-hidden="true">✳</i>
          </div>
        </section>

        <section className="places-section" id="places">
          <div className="section-wrap">
            <div className="places-heading">
              <div>
                <span className="section-index">02 — EXPLORE RWANDA</span>
                <h2>Places to visit,<br /><em>stories to discover.</em></h2>
              </div>
              <p>
                From forest trails to places of remembrance, every destination
                has its own story. Here are a few ideas to begin exploring.
              </p>
            </div>
            <div className="places-grid">
              {places.map((place, index) => (
                <article className="place-card" key={place.name}>
                  <div className="place-image-wrap">
                    <img
                      className="place-image"
                      src={place.image}
                      alt={place.imageAlt}
                      loading="lazy"
                    />
                    <span className="place-index">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="place-copy">
                    <span className="place-region">{place.region}</span>
                    <h3>{place.name}</h3>
                    <p>{place.description}</p>
                    <div className="place-activities">
                      <h4>Things to do</h4>
                      <ul>
                        {place.activities.map((activity) => (
                          <li key={activity}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                    {place.wildlife && (
                      <div className="place-activities">
                        <h4>Wildlife you may see</h4>
                        <ul>
                          {place.wildlife.map((animal) => (
                            <li key={animal}>{animal}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <a
                      className="place-link"
                      href={place.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {place.linkLabel} <ArrowIcon diagonal />
                    </a>
                    <p className="place-photo-credit">
                      Photo:{" "}
                      <a href={place.imageCreditUrl} target="_blank" rel="noreferrer">
                        {place.imageCredit}
                      </a>
                      {" · "}
                      <a href={place.licenseUrl} target="_blank" rel="noreferrer">
                        {place.license}
                      </a>
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <p className="places-note">
              Travel details, entry requirements and opening hours can change.
              Check each destination’s official website before you go. Wildlife
              sightings are never guaranteed; follow your guide’s advice and
              observe animals respectfully.
            </p>
          </div>
        </section>

        <section className="archive-section" id="stories">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <span className="section-index">03 — THE ARCHIVE</span>
                <h2>Stories that stay<br /><em>with us.</em></h2>
              </div>
              <p>
                Start anywhere. Follow a thread, discover a new perspective,
                and take the time to learn.
              </p>
            </div>

            <div className="archive-tools">
              <div className="filter-list" role="group" aria-label="Filter stories by topic">
                {filters.map((filter) => (
                  <button
                    className={activeFilter === filter ? "filter-chip filter-chip--active" : "filter-chip"}
                    key={filter}
                    type="button"
                    aria-pressed={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <label className="search-box">
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                  <circle cx="8.8" cy="8.8" r="5.8" />
                  <path d="m13.2 13.2 4 4" />
                </svg>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Find a story"
                  aria-label="Search the archive"
                />
              </label>
            </div>

            <div className="story-grid" aria-live="polite">
              {visibleStories.map((story, index) => (
                <article className="story-card" key={story.id}>
                  <button
                    className="story-image-button"
                    type="button"
                    onClick={() => setSelectedStory(story)}
                    aria-label={`Read ${story.title}`}
                  >
                    <span
                      className={`story-image story-image--${story.id}`}
                      role="img"
                      aria-label={story.imageAlt}
                      style={{ backgroundImage: `url("${story.image}")` }}
                    />
                    <span className="story-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="story-open"><ArrowIcon diagonal /></span>
                  </button>
                  {story.imageCredit && (
                    <p className="story-photo-credit">
                      Photo:{" "}
                      <a href={story.imageCreditUrl} target="_blank" rel="noreferrer">
                        {story.imageCredit}
                      </a>
                      {" · "}
                      <a href={story.imageLicenseUrl} target="_blank" rel="noreferrer">
                        {story.imageLicense}
                      </a>
                    </p>
                  )}
                  <div className="story-meta">
                    <span>{story.category}</span>
                    <span>{story.date}</span>
                  </div>
                  <button
                    className="story-title-button"
                    type="button"
                    onClick={() => setSelectedStory(story)}
                  >
                    <h3>{story.title}</h3>
                    <ArrowIcon diagonal />
                  </button>
                  <p className="story-description">{story.description}</p>
                </article>
              ))}
              {visibleStories.length === 0 && (
                <p className="empty-state">
                  No stories match that search. Try another word or choose a
                  different topic.
                </p>
              )}
            </div>
            <p className="archive-note">
              <span aria-hidden="true">✳</span> Every story points to sources.
              Keep exploring, and keep asking questions.
            </p>
          </div>
        </section>

        <section className="timeline-section" id="timeline">
          <div className="section-wrap">
            <div className="timeline-heading">
              <span className="section-index">04 — A FEW MOMENTS IN TIME</span>
              <h2>A past that keeps<br /><em>unfolding.</em></h2>
              <p>A starting point—not the whole story.</p>
            </div>
            <div className="timeline-track">
              {milestones.map((milestone, index) => (
                <article className="milestone" key={milestone.date}>
                  <span className="milestone-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="milestone-dot" />
                  <p className="milestone-date">{milestone.date}</p>
                  <h3>{milestone.title}</h3>
                  <p className="milestone-text">{milestone.text}</p>
                </article>
              ))}
            </div>
            <a className="text-link timeline-link" href="#stories">
              Explore the stories behind these dates <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="culture-section" id="culture">
          <div className="culture-gallery" aria-label="Images of Rwandan cultural heritage">
            <figure className="culture-photo culture-photo--dance">
              <img
                src={stories.find((story) => story.id === "intore").image}
                alt="A Rwandan child dancing in traditional clothing"
                loading="lazy"
              />
              <figcaption>
                <span>Intore dance</span>
                <span className="photo-attribution">
                  Photo:{" "}
                  <a href={stories.find((story) => story.id === "intore").imageCreditUrl} target="_blank" rel="noreferrer">Bertzzi / Wikimedia Commons</a>
                  {" · "}
                  <a href={stories.find((story) => story.id === "intore").imageLicenseUrl} target="_blank" rel="noreferrer">CC BY 4.0</a>
                </span>
              </figcaption>
            </figure>
            <figure className="culture-photo culture-photo--imigongo">
              <img
                src={stories.find((story) => story.id === "imigongo").image}
                alt="A Rwandan imigongo artwork with raised geometric patterns"
                loading="lazy"
              />
              <figcaption>
                <span>Imigongo art</span>
                <span className="photo-attribution">
                  Photo:{" "}
                  <a href={stories.find((story) => story.id === "imigongo").imageCreditUrl} target="_blank" rel="noreferrer">Ji-Elle / Wikimedia Commons</a>
                  {" · "}
                  <a href={stories.find((story) => story.id === "imigongo").imageLicenseUrl} target="_blank" rel="noreferrer">CC BY-SA 3.0</a>
                </span>
              </figcaption>
            </figure>
          </div>
          <div className="culture-content">
            <span className="section-index">05 — LIVING HERITAGE</span>
            <h2>Culture isn’t<br /><em>just the past.</em></h2>
            <p>
              From Intore dance to imigongo art, Rwanda’s traditions continue
              to grow in the hands of the people who make, share and reimagine
              them.
            </p>
            <a className="button button--outline" href="#stories" onClick={() => setActiveFilter("Culture")}>
              Discover living heritage <ArrowIcon />
            </a>
            <span className="culture-caption">THE LAND REMEMBERS</span>
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="section-wrap approach-inner">
            <span className="approach-star" aria-hidden="true">✳</span>
            <span className="section-index">06 — A NOTE ON HOW WE SHARE</span>
            <h2>Curiosity, context<br />and <em>care.</em></h2>
            <p>
              History deserves careful sourcing and thoughtful conversation.
              We link to references, make space for different perspectives
              and treat difficult chapters with dignity. This archive is a
              beginning; learning from historians, survivors and cultural
              knowledge-holders matters.
            </p>
            <a className="text-link" href="#stories">
              Read a story <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="brand brand--footer" href="#home" aria-label="Amateka — back to top">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span className="brand-name">amateka<span>.</span><small>RWANDA HISTORY ARCHIVE</small></span>
          </a>
          <p>Preserving history.<br />Sharing knowledge.<br />Inspiring the future.</p>
          <a className="footer-top-link" href="#home">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Amateka · Rwanda History Archive</span>
          <span>AMATEKA YACU · UMURAGE WACU</span>
        </div>
      </footer>

      <dialog
        className="story-dialog"
        ref={dialogRef}
        aria-labelledby="dialog-title"
        onClose={() => setSelectedStory(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            dialogRef.current.close();
          }
        }}
      >
        {selectedStory && (
          <div className="dialog-content">
            <button
              className="dialog-close"
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close story"
            >
              ×
            </button>
            <span className="section-index">{selectedStory.category} · {selectedStory.date}</span>
            <h2 id="dialog-title">{selectedStory.title}</h2>
            <p className="dialog-deck">{selectedStory.description}</p>
            <span className="dialog-rule" />
            {selectedStory.body.map((paragraph) => <p className="dialog-paragraph" key={paragraph}>{paragraph}</p>)}
            <p className="dialog-source-title">Continue exploring</p>
            <ul className="dialog-sources">
              {selectedStory.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.name} <ArrowIcon diagonal />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </dialog>
    </div>
  );
}

export default App;
