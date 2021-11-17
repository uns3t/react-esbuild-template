import { eventSource } from './server.js';

const injectCode = () => `
    <script>
        (() => new EventSource('${eventSource}').onmessage = () => location.reload())();
    </script>
`;

export default injectCode;
