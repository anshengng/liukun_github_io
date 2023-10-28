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
        let buffer = '';
    
        function read():any {
            return reader.read().then(({ done, value }) => {
                if (done) {
                    console.log('Request completed');
                    return;
                }
    
                buffer += decoder.decode(value);
                const responses = parseResponses(buffer);
                console.log(responses);
                
                if (responses) {
                    console.log(responses);
                    buffer = '';
                }
    
                return read();
            });
        }
    
        read();
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}

/**
 * 解析buffer
 * @param buffer 
 * @returns 
 */
function parseResponses(buffer:any) {
    const lines = buffer.split('\n');
    const responses = [];

    for (let i = 0; i < lines.length - 1; i++) {
        const line = lines[i].trim();

        if (line) {
            try {
                const response = JSON.parse(line);
                responses.push(response);
            } catch (error) {
                console.error('Failed to parse response:', error);
            }
        }
    }

    return responses;
}



/***
 * gpt4.0
 */
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