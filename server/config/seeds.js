const db = require('./connection');
const { User } = require('../models'); // add Thought for thought seeds
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');
    await cleanDB('Thought', 'thoughts');

    // Create thoughts
//    const thoughts = await Thought.create([
//      {
//        thoughtText: "Test thought 1",
//        thoughtAuthor: "Sal",
//        createdAt: new Date('2024-05-12T10:00:00Z'),
//        pageParams: 'Story'
//      },
//      {
//        thoughtText: "Test thought 2",
//        thoughtAuthor: "Sal",
//        createdAt: new Date('2024-05-10T15:30:00Z'),
//        pageParams: 'Premise'
//      },
//      {
//        thoughtText: "Test thought 3",
//        thoughtAuthor: "Xandromus",
//        createdAt: new Date('2024-05-12T10:00:00Z'),
//        pageParams: 'Plot'
//      },
//      {
//        thoughtText: "Test thought 4",
//        thoughtAuthor: "Xandromus",
//        createdAt: new Date('2024-05-10T15:30:00Z'),
//        pageParams: 'Editing'
//      }
//    ]);

    // Create users
    await User.create([
      {
        username: 'Xandromus',
        email: 'xandro@aol.com',
        password: '12345',
        //thoughts: [thoughts[2], thoughts[3]] 
      },
      {
        username: 'Sal',
        email: 'sal@hotmail.com',
        password: '12345',
        //thoughts: [thoughts[0], thoughts[1]] 
      },
      {
        username: 'Lernantino',
        email: 'lernantino@gmail.com',
        password: '12345'
      },
      {
        username: 'Amiko',
        email: 'amiko2k20@aol.com',
        password: '12345'
      },
      {
        username: 'David',
        email: 'dthomas@techfriends.dev',
        password: '12345'
      }
    ]);

    console.log('🔑 users seeded');
    //console.log('💭 thoughts seeded');

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});