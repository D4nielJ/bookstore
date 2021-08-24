const response = {
  _2xz2v3v8g: [
    {
      title: 'MyTitle',
      category: 'MyCategorie',
    },
  ],
  _lloeaougo: [
    {
      title: '',
      category: '',
    },
  ],
  _xwcl1n5ss: [
    {
      title: '',
      category: '',
    },
  ],
  _c8yjijoke: [
    {
      title: '',
      category: '',
    },
  ],
  testid: [
    {
      category: 'testCategory',
      title: 'testTitle',
    },
  ],
  _ueuazfi3v: [
    {
      category: '',
      title: '',
    },
  ],
  _w3tlg9g2t: [
    {
      category: '',
      title: '',
    },
  ],
  _8zsiepztp: [
    {
      category: '',
      title: '',
    },
  ],
  _w2hbvlnsh: [
    {
      title: '',
      category: '',
    },
  ],
  _oni3upauk: [
    {
      title: '',
      category: '',
    },
  ],
  _h0k04yiuj: [
    {
      category: '',
      title: '',
    },
  ],
  _u7354a1km: [
    {
      category: '',
      title: '',
    },
  ],
  item2: [
    {
      category: 'Fiction',
      title: 'Dune',
    },
  ],
  _8ul8z0li4: [
    {
      category: 'heloooo',
      title: '12',
    },
  ],
  _uni5bcin6: [
    {
      title: '',
      category: '',
    },
  ],
  _q500y3503: [
    {
      category: '',
      title: '',
    },
  ],
  _ou424c72g: [
    {
      category: '',
      title: '',
    },
  ],
  _v9xdt1ztq: [
    {
      title: '',
      category: '',
    },
  ],
  _m27o3eukh: [
    {
      category: '',
      title: '',
    },
  ],
  testid2: [
    {
      category: 'testCategory2',
      title: 'testTitle2',
    },
  ],
  _70z04gbai: [
    {
      category: '',
      title: '',
    },
  ],
  _wh4vo9ygc: [
    {
      category: '',
      title: '',
    },
  ],
  _q3p8o6kv6: [
    {
      category: '',
      title: '',
    },
  ],
  _f3jztn0p8: [
    {
      title: '',
      category: '',
    },
  ],
  _lhw2viw4h: [
    {
      category: 'eeeerr',
      title: 'eeeoo',
    },
  ],
  item1: [
    {
      category: 'Fiction',
      title: 'The Great Gatsby',
    },
  ],
  _foqt6vzya: [
    {
      category: '14141',
      title: '1231',
    },
  ],
  _5vtex69nq: [
    {
      category: '',
      title: '',
    },
  ],
  _13i1kcy7h: [
    {
      category: '',
      title: '',
    },
  ],
  item3: [
    {
      category: 'Novel',
      title: '100 años de soledad',
    },
  ],
  _w88w9hczz: [
    {
      category: '',
      title: '',
    },
  ],
};

// console.log(Object.values(response)[0][0].title)

const myArray = Object.entries(response).map((book) => ({
  id: book[0],
  title: book[1][0].title,
  category: book[1][0].category,
}));

console.log(myArray);
