const blogApp = {
  search: '',
  posts: [
    {
      title: 'A Rainy Day in Dhaka',
      image: 'https://via.placeholder.com/600x300',
      content: 'It was one of those days when the rain reminded me of childhood walks home from school.',
      tags: ['Rain', 'City']
    },
    {
      title: 'Sunset at Padma River',
      image: 'https://via.placeholder.com/600x300',
      content: 'This sunset reminded me how beautiful endings can be.',
      tags: ['Sunset', 'Nature']
    },
    {
      title: 'Campus Vibes',
      image: 'https://via.placeholder.com/600x300',
      content: 'A memory of one peaceful evening at RUET.',
      tags: ['Campus', 'Memory']
    }
  ],
  get filteredPosts() {
    return this.posts.filter(post =>
      post.title.toLowerCase().includes(this.search.toLowerCase()) ||
      post.content.toLowerCase().includes(this.search.toLowerCase())
    );
  }
};
