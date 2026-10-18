export const site = {
    name: "Christian Haitian Outreach",
    shortName: "CHO",
    hero: {
      tagline: "TAGLINE FROM OLD SITE",
      subtext: "A short sentence about what CHO does.",
    },
    about: {
      heading: "New Beginnings",
      paragraphs: [
        "Founded by Eleanor \"Mom\" Workman in 1974, Christian Haitian Outreach (CHO) supports the orphans, children, and poor of Haiti.",
        "We are excited to announce that Mom's precious son, Dr. Franco Jean-Louis, is now overseeing CHO and all operations in Haiti. He is continuing Mom Eleanor's vision and honoring her legacy through the care of her precious children and organization.",
      ],
    },
    mission: {
      heading: "Our Mission",
      intro:
        "Christian Haitian Outreach is a multifaceted ministry reaching out to heal, educate, feed and house the hurting children in Haiti. We are dedicated to:",
      
        photo: {
          src: "/images/gallery/boy-girl-silly-faces.jpg",
          alt: "A young boy and girl making surprised, silly faces",
        },
          points: [
        "Providing total health, education & welfare care for each child",
        "Being an orphanage or children's agency for Haitian children",
        "Evangelizing the country of Haiti",
        "Winning souls, providing Christian education, training, and discipleship programs for Haitian Christians, both leadership and laity.",
      ],
    },
    founder: {
      heading: "Founder",
      name: "Mom Eleanor Workman",
      excerpt:
        "Eleanor Workman was a missionary whose heart beat for a single purpose: to share Jesus with the poor people of Haiti and rescue abandoned babies in this impoverished island nation.",
      paragraphs: [
        "She began in 1974 when she found infant twins on a garbage dump with their terminally ill mother, who had been evicted from her little hut because she could not pay the $3.00 per month for rent. The mother then signed her babies over to Eleanor Workman before she died, and the orphanage ministry was born. Eleanor acquired land, built a building and her family grew rapidly.",
        "CHO's ministry came into being because Eleanor Workman, a choir director and active church worker with a successful job, heard the call to full-time missions work. She answered the call by laying aside her own ambitions and dedicating her life to serve needy children in Haiti. She has seen countless miracles of supply and intervention despite impossible circumstances. Her life and ministry inspire others to totally commit themselves to God and see His divine purposes fulfilled in their lives.",
      ],
      videoUrl: "https://youtu.be/LVefa4MchC4",
    },
    donate: {
      heading: "Support the Children of Haiti",
      intro:
        "Your gift will provide food, education, health care, and a loving home for the children of Haiti.  Thank you for your support!",
      paypalUrl: "#", 
      zellePhone: "(305) 458-1098",
    },// ask your dad whether CHO accepts checks by mail to the PO Box. 
    // ask if CHO wants Apple Pay, a hosted donation page could een replace the PayPal button entirely,
    // those pages take cards too,  fewer accounts is simpler 
    //  But choosing a payment provider means fees, who manages the account, where the money lands)
    gallery: [
      { src: "/images/gallery/franco-hugging.jpg", alt: "Dr. Franco Jean-Louis hugging a young child" },
      { src: "/images/gallery/boy-girl-silly-faces.jpg", alt: "A young boy and girl making surprised, silly faces" },
      { src: "/images/gallery/lunch-room.jpg", alt: "Children eating lunch together in the dining room" },
      { src: "/images/gallery/sleeping-arrangement.jpg", alt: "Beds lined up in the children's sleeping room" },
      { src: "/images/gallery/toddler-in-yellow.jpg", alt: "A smiling toddler dressed in yellow" },
      { src: "/images/gallery/young-group.jpg", alt: "A group of young children together" },
      { src: "/images/gallery/young-group2.jpg", alt: "Young children gathered outside" },
    ],
    nav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/#about" },
      { label: "Mission", href: "/#mission" },
      { label: "Updates", href: "/updates" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "#contact" },
    ],
  
    donateUrl: "/#donate",  
    contact: {
      physicalAddress: ["897 Lynbrook Court", "North Augusta, SC 29860"],
      mailingAddress: ["PO Box 7007", "North Augusta, SC 29861"],
      email: "contact@christianhaitianoutreach.org",
      phone: "305-458-1098",
    },

  };