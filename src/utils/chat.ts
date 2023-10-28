import { Ref } from 'vue';

export async function send(content: string, answer: Ref<string>) {
    await fetch('https://api.chatanywhere.com.cn/v1/chat/completions', {
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
            const decoder = new TextDecoder('utf-8');

            function read(): any {
                return reader.read().then(({ done, value }) => {
                    if (done) {
                        return;
                    }

                    const text = decoder.decode(value);
                    const regex = /{[^{}]*}/g;
                    const dataArray = text.match(regex);

                    // // 处理每个÷/元素
                    for (const data of dataArray!) {
                        if (data.split('\n')[2] === '[DONE]') {
                            break;
                        }

                        // 提取有效的 JSON 部分
                        const jsonStartIndex = data.indexOf('{');
                        const jsonEndIndex = data.lastIndexOf('}');
                        const jsonString = data.substring(jsonStartIndex, jsonEndIndex + 1);

                        // 解析 JSON
                        const jsonObject = JSON.parse(jsonString);

                        // console.log(jsonObject.content);成功匹配
                        answer.value += jsonObject.content ?? '';
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




/***
 * gpt4.0
 */
export async function sendByfour(content: string,answer: Ref<string>) {
    await fetch('https://api.chatanywhere.com.cn/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk-biUFdHeJmhMPPFQF5QaMbANSnZW1VXfc9zBFM4wWNB34IpRW'
        },
        body: JSON.stringify({
            model: 'gpt-4',
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
            const decoder = new TextDecoder('utf-8');

            function read(): any {
                return reader.read().then(({ done, value }) => {
                    if (done) {
                        return;
                    }

                    const text = decoder.decode(value);
                    const regex = /{[^{}]*}/g;
                    const dataArray = text.match(regex);

                    // // 处理每个÷/元素
                    for (const data of dataArray!) {
                        if (data.split('\n')[2] === '[DONE]') {
                            break;
                        }

                        // 提取有效的 JSON 部分
                        const jsonStartIndex = data.indexOf('{');
                        const jsonEndIndex = data.lastIndexOf('}');
                        const jsonString = data.substring(jsonStartIndex, jsonEndIndex + 1);

                        // 解析 JSON
                        const jsonObject = JSON.parse(jsonString);

                        // console.log(jsonObject.content);成功匹配
                        answer.value += jsonObject.content ?? '';
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