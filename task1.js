const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;

function parseXml() {
    const parser = new DOMParser();
    const xmlDOM = parser.parseFromString(xmlString, 'text/xml')

    const listNode = xmlDOM.querySelector('list')

    const result = {
        list: []
    }
    Array.from(listNode.children).forEach((student) => {
        const nameNode = student.querySelector('name')
        const langAttr = nameNode.getAttribute('lang')
        const firstNameNode = nameNode.querySelector('first')
        const secondNameNode = nameNode.querySelector('second')
        const ageNode = e.querySelector('age')
        const profNode = e.querySelector('prof')
        
        result.list.push({
            name: `${firstNameNode.textContent} ${secondNameNode.textContent}`,
            age: ageNode.textContent,
            prof: profNode.textContent,
            lang: langAttr
        })
    })

    return result
}