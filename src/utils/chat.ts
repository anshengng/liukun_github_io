import axios from 'axios'
export async function send(content: string) {
        const response = await axios.post(
          'https://api.chatanywhere.com.cn/v1/chat/completions',
          {
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: content
              }
            ],
            stream: true
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer sk-biUFdHeJmhMPPFQF5QaMbANSnZW1VXfc9zBFM4wWNB34IpRW"
            },
            responseType: 'stream'
          }
        );
        let total = ''
        for await (const chunk of response.data.choices) {
            // Do something with each chunk
            // Here we just accumulate the size of the response.
            
            console.log(chunk);
            
          }
    
}

export async function sendByfour(content: string) {
    const res = await axios({
        url: 'https://api.chatanywhere.com.cn/v1/chat/completions',
        method: 'post',
        data: {
            model: "gpt-4",
            messages: [
                {
                    role: "user",
                    content: content
                }
            ]
        },
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer sk-biUFdHeJmhMPPFQF5QaMbANSnZW1VXfc9zBFM4wWNB34IpRW"
        }
    })
    return res;
}