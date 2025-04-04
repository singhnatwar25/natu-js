import { h } from '../core/jsx';
import { onMount } from '../core/lifecycle';

export function AboutPage() {
    onMount(() => console.log('About mounted'));
    return h('div', {}, h('h1', {}, 'About NatuJS'));
}
