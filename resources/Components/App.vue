<template>
    <div class="toast toast-top toast-end mt-10">
        <div class="alert alert-success">
            <div>
                <span>Message sent successfully.</span>
            </div>
        </div>
    </div>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Projetos</a></li>
                    <li><a>Em andamento</a></li>
                    <li><a>Esperando análise</a></li>
                    <li><a>Esperando Documentaão</a></li>
                    <li><a>Aguardando Instalação</a></li>
                    <li><a>Aguardando Orçamento</a></li>
                    <li><a>Sair</a></li>
                </ul>
            </div>
        </div>
        <div class="navbar-center">
            <a class="btn btn-ghost normal-case text-xl">Projeto</a>
        </div>
        <div class="navbar-end">
            <button class="btn btn-ghost btn-circle">
                Entrar
            </button>
            <div class="dropdown dropdown-end">
                <button class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span class="badge badge-xs badge-primary indicator-item"></span>
                        <!-- indicativo de notificação nova -->
                    </div>
                </button>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Notificação 1</a></li>
                    <li><a>Notificação 2</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="carousel carousel-center rounded-box">
        <div id="item1" class="carousel-item w-full justify-center">
            <div class="avatar">
                <div class="w-24 rounded">
                    <img src="https://github.com/MatheusMinski.png" />
                </div>
            </div>
        </div>
        <div id="item2" class="carousel-item w-full justify-center">
            <div class="avatar">
                <div class="w-24 rounded">
                    <img src="https://github.com/MatheusMinski.png" />
                </div>
            </div>
        </div>
        <div id="item3" class="carousel-item w-full justify-center">
            <div class="avatar">
                <div class="w-24 rounded">
                    <img src="https://github.com/MatheusMinski.png" />
                </div>
            </div>
        </div>
        <div id="item4" class="carousel-item w-full justify-center">
            <div class="avatar">
                <div class="w-24 rounded">
                    <img src="https://github.com/MatheusMinski.png" />
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">1</a>
        <a href="#item2" class="btn btn-xs">2</a>
        <a href="#item3" class="btn btn-xs">3</a>
        <a href="#item4" class="btn btn-xs">4</a>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>