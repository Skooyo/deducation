import { ICourse } from "@/models/course.model";
import { IBounty } from "@/models/bounty.model";

export const tempCourses: ICourse[] = [
  {
    _id: "1",
    title: "Introduction to Blockchain",
    description: "Learn about Blockchain through this introductory course!",
    coverImageUrl: "https://www.patriotsoftware.com/wp-content/uploads/2022/01/what-is-blockchain-1.jpg",
    creator: "1",
    pages: [{
        _id: "1",
        title: "Introduction to Blockchain Technology",
        content:[{
          type:"h1",
          data:"Introduction to Blockchain Technology"
        },
        {
          type:"img",
          data:"https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/Blockchain%20Technology.jpg"
        },
        {
          type:"h3",
          data:"Blockchain is a revolutionary technology that has transformed the way we think about data, transactions, and trust in the digital age. At its core, blockchain is a decentralized, distributed ledger that records transactions across multiple computers in a way that ensures the data is secure, transparent, and immutable. Unlike traditional centralized systems where a single entity controls the data, blockchain operates on a peer-to-peer network where all participants have access to the same information simultaneously."
        },
        {
          type:"h3",
          data:'This technology is most widely known as the foundation of cryptocurrencies like Bitcoin, but its applications extend far beyond digital currencies. Blockchain can be used in a variety of sectors, including finance, supply chain management, healthcare, and even education.'
        },
        {
          type:"h3",
          data:`Its key features—decentralization, transparency, and security—enable new forms of collaboration and innovation, making it a powerful tool for reshaping industries and enhancing trust in digital transactions.`
        },
        {
          type:"h3",
          data:'By eliminating the need for intermediaries and providing a secure, tamper-proof record of transactions, blockchain has the potential to increase efficiency, reduce costs, and foster greater accountability in various processes. As we continue to explore its possibilities, blockchain is poised to play a crucial role in the future of technology and global development.'
        }],
      },
      {
        _id: "2",
        title: "The Fundamentals of Blockchain Technology",
        content:[{
          type:"h1",
          data:"The Fundamentals of Blockchain Technology"
        },
        {
          type:"img",
          data:"https://www.patriotsoftware.com/wp-content/uploads/2022/01/what-is-blockchain-1.jpg"
        },
        {
          type:"h3",
          data:"The foundation of any blockchain course begins with understanding the basic concepts of blockchain technology. At its core, a blockchain is a digital ledger that records transactions across a network of computers."
        },
        {
          type:"h3",
          data:'These transactions are grouped together in blocks, which are then linked, or "chained," together in a sequential manner, forming a blockchain. Each block contains a list of transactions, a timestamp, and a cryptographic hash of the previous block, ensuring the integrity of the data.'
        },
        {
          type:"h3",
          data:`This structure makes blockchain a secure and transparent way of recording information. Understanding these fundamentals helps beginners grasp how blockchain operates, how data is stored, and why it is resistant to tampering.`
        }],
      },
      {
        _id: "3",
        title: "Decentralization and Distributed Ledger Technology (DLT)",
        content:[{
          type:"h1",
          data:"Decentralization and Distributed Ledger Technology (DLT)"
        },
        {
          type:"img",
          data:"https://www.lavalamp.biz/wp-content/uploads/2021/08/distributed-ledger-technology.jpg"
        },
        {
          type:"h3",
          data:"One of the most transformative aspects of blockchain is its decentralized nature. Unlike traditional systems where a central authority controls the database, blockchain operates on a peer-to-peer network where no single entity has full control."
        },
        {
          type:"h3",
          data:"This decentralization is achieved through Distributed Ledger Technology (DLT), which allows all participants in the network to maintain and verify the ledger independently. Each participant, or node, has a copy of the entire blockchain, and they all work together to validate new transactions." 
        },
        {
          type:"h3",
          data:"This not only increases transparency and security but also reduces the reliance on intermediaries, making processes more efficient and trustless."
        }],
      },
      {
        _id: "4",
        title: "Cryptography and Security",
        content:[{
          type:"h1",
          data:"Cryptography and Security"
        },
        {
          type:"img",
          data:"https://wordpress.cdsec.co.uk/wp-content/uploads/2023/08/kVbVKMr6Fr-800-1.png"
        },
        {
          type:"h3",
          data:"Security is a critical component of blockchain technology, and it is largely achieved through cryptography. Cryptographic techniques, such as hashing and digital signatures, play a vital role in securing the data on a blockchain."
        },
        {
          type:"h3",
          data:"Hashing involves converting data into a fixed-size string of characters, which is unique to the input data. This ensures that any alteration to the data would result in a completely different hash, making tampering easily detectable."
        },
        {
          type:"h3",
          data:"Digital signatures use public and private keys to ensure the authenticity of transactions. The combination of these cryptographic methods provides a robust security framework that protects the blockchain from unauthorized access and fraud."
        }]
      },
      {
        _id: "5",
        title: "Blockchain Use Cases and Applications",
        content:[{
          type:"h1",
          data:"Blockchain Use Cases and Applications"
        },
        {
          type:"img",
          data:"https://learn.g2.com/hs-fs/hubfs/G2CM_FI614_Learn_Article_Images_%5BBlockchain_Applications%5D_V1b.png?width=690&name=G2CM_FI614_Learn_Article_Images_%5BBlockchain_Applications%5D_V1b.png"
        },
        {
          type:"h3",
          data:"Blockchain is not limited to just cryptocurrencies; its applications span across various industries. In finance, blockchain enables the creation of decentralized finance (DeFi) platforms that allow users to borrow, lend, and trade assets without relying on traditional banks."
        },
        {
          type:"h3",
          data:"In supply chain management, blockchain provides a transparent and immutable record of the movement of goods, helping to reduce fraud and increase efficiency. In healthcare, blockchain can be used to securely store and share patient records, ensuring privacy and improving the accuracy of medical data."
        },
        {
          type:"h3",
          data:"Understanding these diverse applications helps beginners see the broader potential of blockchain technology beyond digital currencies."
        }],
      },
      {
        _id: "6",
        title: "Smart Contracts and Decentralized Applications (DApps)",
        content:[{
          type:"h1",
          data:"Smart Contracts and Decentralized Applications (DApps)"
        },
        {
          type:"img",
          data:"https://cdn.prod.website-files.com/6152e479f73e5bb094d54490/64467ad8ab8e50e92d4b86c3_%23DipSurvivor%20(1202%20%C3%97%20800%C2%A0px)%20(12.png"
        },
        {
          type:"h3",
          data:"Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They automatically enforce and execute the terms of a contract when predetermined conditions are met, without the need for intermediaries."
        },
        {
          type:"h3",
          data:"This feature of blockchain technology opens up new possibilities for automation and efficiency in various industries. Decentralized applications (DApps) are built on top of blockchain platforms and operate using smart contracts. These applications run on a decentralized network, ensuring that they are resistant to censorship and downtime."
        },
        {
          type:"h3",
          data:"Learning about smart contracts and DApps gives beginners insight into how blockchain technology is being used to create innovative solutions and disrupt traditional business models."
        }]
      },
    ],
    category: "Blockchain",
  },
  {
    _id: "2",
    title: "Web3 for Education",
    description: "Learn about Web3 for Education through this course!",
    coverImageUrl: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/2071817190001/f5016671-d789-44e5-b6f7-7fe34e7b3c03/daeb36ad-de1c-4e9c-bca1-5ea47551e56d/1280x720/match/image.jpg",
    creator: "1",
    pages: [{
        _id: "1",
        title: "Introduction",
        content:[{
          type:"h1",
          data:"Introduction"
        },
        {
          type:"h3",
          data:"Science and education are key drivers of global progress, yet both are hindered by traditional limitations. Science is drifting from its core mission, and education remains stuck in outdated industrial-age practices. "
        },
        {
          type:"h3",
          data:'There is a need for a paradigm shift in the way educational content is distributed, as well as in the way scientific advances are disseminated and propagated.'
        },
        {
          type:"h3",
          data:`Web 3 technologies offer a solution by decentralizing control and fostering open collaboration, enabling educators and learners to overcome these challenges. With secure, portable credentials provided by blockchain and the incentive of tokenized learning, Web 3 aligns education with the demands of a modern, knowledge-based world. `
        },
        {
          type:"h3",
          data:'Let’s explore more about how Web3 to be use in education'
        },
        {
          type:"img",
          data:`https://i.imgur.com/lk8lps7.png`
        }],
      },
      {
        _id: "2",
        title: "Problem in Education",
        content:[{
          type:"h1",
          data:"Problem in Education"
        },
        {
          type:"h3",
          data:"Despite significant strides in digital learning, the education sector is plagued by several key issues:"
        },
        {
          type:"h2",
          data:'Inequitable Access:'
        },
        {
          type:"h3",
          data:`Higher education, create financial burdens for students and families, leading to issues such as student debt.`
        },
        {
          type:"h2",
          data:`Credential Recognition:`
        },
        {
          type:"h3",
          data:`The recognition of credentials across borders remains a challenge, limiting the mobility and opportunities for learners.`
        },
        {
          type:"h2",
          data:`Centralized Control:`
        },
        {
          type:"h3",
          data:`Traditional education systems are often controlled by centralized institutions, which can lead to a lack of diversity in curricula and limited innovation.`
        }],
      },
      {
        _id: "3",
        title: "How Web3 Changes Education",
        content:[{
          type:"h1",
          data:"How Web3 Changes Education"
        },
        {
          type:"h3",
          data:"Despite significant strides in digital learning, the education sector is plagued by several key issues:"
        },
        {
          type:"h3",
          data:"Web 3, characterized by decentralization, blockchain technology, and smart contracts, offers transformative solutions for the education sector:" 
        },
        {
          type:"h2",
          data:"Decentralized Learning Platforms:"
        },
        {
          type:"h3",
          data:"Web 3 enables the creation of decentralized education platforms where learners can access content from anywhere in the world without the need for a central authority."
        },
        {
          type:"h2",
          data:"Secure and Portable Digital Credentials:"
        },
        {
          type:"h3",
          data:"Blockchain technology allows for the creation of secure, verifiable, and portable digital credentials that are recognized globally, eliminating the need for third-party verification."
        },
        {
          type:"h2",
          data:"Tokenized Learning:"
        },
        {
          type:"h3",
          data:"Blockchain can be used to create tokenized incentives for learning, where students earn tokens for completing courses, which can be redeemed for various benefits or even traded."
        }],
      },
      {
        _id: "4",
        title: "Easy Access to Education",
        content:[{
          type:"h1",
          data:"Easy Access to Education"
        },
        {
          type:"h2",
          data:"Global Reach:"
        },
        {
          type:"h3",
          data:"Deducation breaks down geographical barriers, allowing learners from anywhere in the world to access quality education. This reduces the disparities in education access between different regions."
        },
        {
          type:"h2",
          data:"Affordability:"
        },
        {
          type:"h3",
          data:"By utilizing blockchain and decentralized technologies, the cost of education can be significantly reduced, making it more accessible to a broader audience."
        }]
      },
      {
        _id: "5",
        title: "Empowered Learners",
        content:[{
          type:"h1",
          data:"Empowered Learners"
        },
        {
          type:"h2",
          data:"Ownership of Credentials:"
        },
        {
          type:"h3",
          data:"Learners have complete control over their educational records and credentials, which are securely stored on the blockchain. This ensures that their achievements are recognized globally without the need for third-party verification."
        },
        {
          type:"h2",
          data:"Customized Learning Paths:"
        },
        {
          type:"h3",
          data:"Decentralized platforms offer the flexibility to design personalized learning journeys, catering to individual interests and career goals."
        }],
      },
      {
        _id: "6",
        title: "Innovative Learning Models",
        content:[{
          type:"h1",
          data:"Innovative Learning Models"
        },
        {
          type:"h2",
          data:"Tokenized Learning:"
        },
        {
          type:"h3",
          data:"Learners can earn tokens for completing courses, which can be used for further education, certifications, or even exchanged for goods and services. This model incentivizes continuous learning and engagement."
        },
        {
          type:"h2",
          data:"Decentralized Content Creation:"
        },
        {
          type:"h3",
          data:`Educators and content creators can contribute to the platform, offering a diverse range of courses and materials, leading to a richer and more varied learning experience.`
        }]
      },
    ],
    category: "Blockchain",
  },
  // {
  //   _id: "3",
  //   title: "Test very long course name 3 ldkfsajfasdj fsadl flsdj ;flsa; jf;als f;ls",
  //   description: "This is course 3",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Block Chain",
  // },
  // {
  //   _id: "4",
  //   title: "Course 4",
  //   description: "This is course 4",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Game Development",
  // },
  // {
  //   _id: "5",
  //   title: "Course 5",
  //   description: "This is course 5",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Game Development",
  // },
  // {
  //   _id: "6",
  //   title: "Course 6",
  //   description: "This is course 6",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Networks",
  // },
  // {
  //   _id: "7",
  //   title: "Course 7",
  //   description: "This is course 7",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Block Chain",
  // },
  // {
  //   _id: "8",
  //   title: "Course 8",
  //   description: "This is course 8",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Operating Systems",
  // },
  // {
  //   _id: "9",
  //   title: "Course 9",
  //   description: "This is course 9",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Low Level Languages",
  // },
  // {
  //   _id: "10",
  //   title: "Course 10",
  //   description: "This is course 10",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Artificial Intelligence",
  // },
  // {
  //   _id: "11",
  //   title: "Course 11",
  //   description: "This is course 11",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Data Science",
  // },
  // {
  //   _id: "12",
  //   title: "Course 12",
  //   description: "This is course 12",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Machine Learning",
  // },
  // {
  //   _id: "13",
  //   title: "Course 13",
  //   description: "This is course 13",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Deep Learning",
  // },
  // {
  //   _id: "14",
  //   title: "Course 14",
  //   description: "This is course 14",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Natural Language Processing",
  // },
  // {
  //   _id: "15",
  //   title: "Course 15",
  //   description: "This is course 15",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Computer Vision",
  // },
  // {
  //   _id: "16",
  //   title: "Course 16",
  //   description: "This is course 16",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Robotics",
  // },
  // {
  //   _id: "17",
  //   title: "Course 17",
  //   description: "This is course 17",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Quantum Computing",
  // },
  // {
  //   _id: "18",
  //   title: "Course 18",
  //   description: "This is course 18",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Software Engineering",
  // },
  // {
  //   _id: "19",
  //   title: "Course 19",
  //   description: "This is course 19",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Cloud Computing",
  // },
  // {
  //   _id: "20",
  //   title: "Course 20",
  //   description: "This is course 20",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Internet of Things",
  // },
  // {
  //   _id: "21",
  //   title: "Course 21",
  //   description: "This is course 21",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Ethical Hacking",
  // },
  // {
  //   _id: "22",
  //   title: "Course 22",
  //   description: "This is course 22",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "UI/UX Design",
  // },
  // {
  //   _id: "23",
  //   title: "Course 23",
  //   description: "This is course 23",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Mobile App Development",
  // },
  // {
  //   _id: "24",
  //   title: "Course 24",
  //   description: "This is course 24",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Web Development",
  // },
  // {
  //   _id: "25",
  //   title: "Course 25",
  //   description: "This is course 25",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Cyber Security",
  // },
  // {
  //   _id: "26",
  //   title: "Course 26",
  //   description: "This is course 26",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Block Chain",
  // },
  // {
  //   _id: "27",
  //   title: "Course 27",
  //   description: "This is course 27",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Game Development",
  // },
  // {
  //   _id: "28",
  //   title: "Course 28",
  //   description: "This is course 28",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Game Development",
  // },
  // {
  //   _id: "29",
  //   title: "Course 29",
  //   description: "This is course 29",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Networks",
  // },
  // {
  //   _id: "30",
  //   title: "Course 30",
  //   description: "This is course 30",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Block Chain",
  // },
  // {
  //   _id: "31",
  //   title: "Course 31",
  //   description: "This is course 31",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Operating Systems",
  // },
  // {
  //   _id: "32",
  //   title: "Course 32",
  //   description: "This is course 32",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Low Level Languages",
  // },
  // {
  //   _id: "33",
  //   title: "Course 33",
  //   description: "This is course 33",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Artificial Intelligence",
  // },
  // {
  //   _id: "34",
  //   title: "Course 34",
  //   description: "This is course 34",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Web Development",
  // },
  // {
  //   _id: "35",
  //   title: "Course 35",
  //   description: "This is course 35",
  //   coverImageUrl: "https://picsum.photos/1920/1080",
  //   creator: "1",
  //   pages: [],
  //   category: "Cyber Security",
  // },
]

export const tempBounties: IBounty[] = [
  {
    _id: "1",
    title: "Aptos Smart Contract",
    description: "Write a simple smart contract on Aptos",
    creator: "John Doe",
    contract: "0x1234567890abcdef1234567890abcdef12345678",
    placeholderPic: "https://media.aptosfoundation.org/1690567117-aptos_network_og_meta_img.png",
    reward: 50,
    currency: "$LEARN",
    dueDate: new Date(2025, 11, 31),
  },
  {
    _id: "2",
    title: "FrontEnd Design",
    description: "Build the frontend example of an educational page",
    contract: "0x1234567890abcdef1234567890abcdef12345679",
    placeholderPic: "https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8957638/og_image/optimized/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Social-33a3a7c9b759fdaa22973906070f8065.png",
    reward: 50,
    currency: "$LEARN",
    dueDate: new Date(2026, 7, 4),
  },
  {
    _id: "3",
    title: "Content Writing",
    description: "Write a content page about what you learned about blockchain",
    creator: "John Doe",
    contract: "0x1234567890abcdef1234567890abcdef12345689",
    placeholderPic: "https://media.licdn.com/dms/image/D5612AQFbdnbkVUBVuA/article-cover_image-shrink_720_1280/0/1664892809287?e=2147483647&v=beta&t=_zPKPn58PLuS2HaLnWpbCOXJg-KFa4dVwDLfidkANHY",
    reward: 50,
    currency: "$LEARN",
    dueDate: new Date(2026, 8, 30),
  },
  // {
  //   _id: "4",
  //   title: "Bounty 4",
  //   description: "This is bounty 4",
  //   creator: "4",
  //   contract: "0x1234567890abcdef1234567890abcdef12345688",
  //   placeholderPic: "https://picsum.photos/1920/1080",
  //   reward: 50,
  //   currency: "$LEARN",
  //   dueDate: new Date(2027, 1, 1),
  // },
  // {
  //   _id: "5",
  //   title: "Bounty 5",
  //   description: "This is bounty 5",
  //   creator: "5",
  //   contract: "0x1234567890abcdef1234567890abcdef12345988",
  //   placeholderPic: "https://picsum.photos/1920/1080",
  //   reward: 50,
  //   currency: "$LEARN",
  //   dueDate: new Date(2025, 11, 31),
  // },
  // {
  //   _id: "6",
  //   title: "Bounty 6",
  //   description: "This is bounty 6",
  //   creator: "6",
  //   contract: "0x1234567890abcdef1234567890abcdef12345989",
  //   placeholderPic: "https://picsum.photos/1920/1080",
  //   reward: 50,
  //   currency: "$LEARN",
  //   dueDate: new Date(2025, 11, 31),
  // },
];