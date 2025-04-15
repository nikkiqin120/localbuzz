export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* You can keep 'About LocalBuzz' or change it if you prefer */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About LocalBuzz 💕</h1>

          <div className="prose prose-lg max-w-none">
            {/* --- Intro --- */}
            <p>
              Welcome to VancouverLocalBuzz, your go-to spot for awesome family travel inspiration and guidance!
              We're super passionate about helping families like yours cook up unforgettable travel experiences that are
              bursting with fun and learning.
            </p>

            {/* --- Our Mission --- */}
            <h2>Our Mission 🎯</h2>
            <p>
              To make family travel easier, way more enjoyable, and truly meaningful.
              We believe hitting the road (or the skies!) with kids isn't just about ticking off destinations – it's all
              about the adventure getting there and the awesome memories you build together!
            </p>

            {/* --- What We Offer (updated title slightly) --- */}
            <h2>What You'll Find Here 🌟</h2>
            <ul>
              {/* Added the Vancouver focus here */}
              <li>Guides to family-friendly destinations (especially around our Vancouver home base!)</li>
              <li>Practical tips for traveling with tiny humans, bigger kids, and everyone in between.</li>
              <li>Reviews of places to stay and things to do that get the family stamp of approval.</li>
              {/* Updated wording slightly */}
              <li>Our own travel tales – the triumphs, the funny moments, and everything we learn along the way!</li>
              <li>Clever ideas for exploring without breaking the bank.</li>
            </ul>

            {/* --- Meet the Enthusiast (Replaces Our Team) --- */}
            <h2>Meet the Travel Enthusiast Behind the Buzz! 🤗</h2>
            <p>
              Hey there! Think of me as your friendly neighbourhood travel enthusiast, the heart and soul (and chief explorer!)
              behind VancouverLocalBuzz. As a proud Vancouverite, I'm absolutely <strong>hooked</strong> on exploring this incredible city
              and all the amazing spots nearby, especially with my little co-pilots in tow!
            </p>
            <p>
              This blog is my passion project, fuelled by that love! It's my little corner of the web to share our family's
              travel wins (and occasional wobbles!), the practical tips we pick up, and the sheer fun of discovering the world
              together, one trip or local outing at a time. Here, you'll find a blend of real-life stories from the trenches
              of family travel (let's be real, it's an adventure!) combined with solid research to give you genuinely helpful
              and inspiring ideas. 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}