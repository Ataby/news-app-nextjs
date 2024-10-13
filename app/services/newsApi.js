export const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://api.mediastack.com/v1/news?access_key=${process.env.NEXT_PUBLIC_ACCESS_KEY}&languages=tr&countries=tr`
        );
    
        if (!res.ok) {
          throw new Error('Failed to fetch news');
        }
    
        const data = await res.json();
        console.log(data);
    
        return data;
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    