import axios from 'axios'
export async function send(content: string) {
    // const res = await axios.post(
    //     'https://api.chatanywhere.com.cn/v1/chat/completions',
    //     {
    //         model: "gpt-3.5-turbo",
    //         messages: [
    //             {
    //                 role: "user",
    //                 content: content
    //             }
    //         ],
    //         stream: true
    //     },
    //     {
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer sk-biUFdHeJmhMPPFQF5QaMbANSnZW1VXfc9zBFM4wWNB34IpRW"
    //         },
    //         responseType: 'stream'
    //     }
    // )
    // // console.log(res.data);
    //     res.data.on('data',()=>{
    //         console.log('232');
    //     })
    let results = ''
    fetch('https://api.chatanywhere.com.cn/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk-biUFdHeJmhMPPFQF5QaMbANSnZW1VXfc9zBFM4wWNB34IpRW'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: content
                }
            ],
            stream: true
        })
    })
    .then(response => {
        const reader = response.body!.getReader();
        const decoder = new TextDecoder();
    
        function read():any {
            return reader.read().then(({ done, value }) => {
                if (done) {
                    return;
                }
                console.log(decoder.decode(value));
                
                // const text = decoder.decode(value) as any;
                // results += text.choices[0].delta.content;
                // console.log(text);
    
                return read();
            });
        }
    
        read();
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
    


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