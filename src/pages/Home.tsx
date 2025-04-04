import { h } from '../core/jsx';
import { onMount } from '../core/lifecycle';
import { Button } from '../components/Button';

export function HomePage() {
    onMount(() => console.log('Home mounted'));
    return h('div', {}, 
        h('h1', {}, 'Welcome to NatuJS'),
        Button('Click Me', () => alert('Hello from NatuJS!'))
    );
}
