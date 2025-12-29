export const chats = [
    {
        id: 1,
        name: 'Juan Perez',
        avatar: 'https://www.fantasticman.com/content/uploads/2024/03/Tyler_the_Creator_1_FM28-768x886.jpg',
        lastMessage: '¡Hola! ¿Cómo estás?',
        time: '10:42 AM',
        unread: 2,
        status: 'read',
        phone: '+1 (555) 123-4567',
        about: 'Programando código 💻'
    },
    {
        id: 2,
        name: 'Carlos',
        avatar: 'https://cdn-images.dzcdn.net/images/artist/b90097972a60d9d8598a79a786be1a3a/1900x1900-000000-80-0-0.jpg',
        lastMessage: '¿Podemos vernos mañana?',
        time: 'Ayer',
        unread: 0,
        status: 'delivered',
        phone: '+1 (555) 987-6543',
        about: 'En el gimnasio 🏋️'
    },
    {
        id: 3,
        name: 'Pedro',
        avatar: 'https://i.scdn.co/image/ab67616100005174a00b11c129b27a88fc72f36b',
        lastMessage: 'Los detalles del proyecto están adjuntos.',
        time: 'Martes',
        unread: 0,
        status: 'sent',
        phone: '+1 (555) 555-5555',
        about: 'Disponible'
    }
];

export const messages = {
    1: [
        { id: 1, text: 'Hola Juan!', timestamp: '10:30 AM', sender: 'me', status: 'read' },
        { id: 2, text: '¡Hola! ¿Cómo estás?', timestamp: '10:42 AM', sender: 'them', status: 'read' }
    ],
    2: [
        { id: 1, text: 'Hola Carlos', timestamp: 'Ayer', sender: 'me', status: 'read' },
        { id: 2, text: '¿Podemos vernos mañana?', timestamp: 'Ayer', sender: 'them', status: 'read' }
    ],
    3: [
        { id: 1, text: 'Hola Pedro', timestamp: 'Martes', sender: 'them', status: 'read' }
    ]
};

export const currentUser = {
    id: 'me',
    name: 'Yo',
    avatar: 'https://i.scdn.co/image/ab67616100005174c8be3c6e5a824360d1bffc03'
}
