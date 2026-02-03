// Quick test script to verify AI endpoint
const testAI = async () => {
    try {
        console.log('Testing AI endpoint...')

        const response = await fetch('http://localhost:3000/api/ai-forecast/query', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                question: 'What are best practices for harvest timing?'
            })
        })

        console.log('Response status:', response.status)
        console.log('Response headers:', response.headers)

        const data = await response.json()
        console.log('Response data:', JSON.stringify(data, null, 2))

        if (data.success && data.data) {
            console.log('\n✅ SUCCESS!')
            console.log('Answer:', data.data.answer.substring(0, 200) + '...')
        } else {
            console.log('\n❌ FAILED!')
            console.log('Error:', data.error || 'Unknown error')
        }
    } catch (error) {
        console.log('\n❌ ERROR!')
        console.error('Error:', error.message)
    }
}

testAI()
