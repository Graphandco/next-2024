import Image from 'next/image';
import Button from '@/components/UI/Button';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Get started by editing&nbsp;
                    <code className="font-mono font-bold">src/app/page.js</code>
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
                    </a>
                </div>
            </div> */}

            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>
            <Button>
                <span>Lorem2</span>
            </Button>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Docs <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Find in-depth information about Next.js features and API.</p>
                </a>

                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Learn <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
                </a>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Templates <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Explore the Next.js 13 playground.</p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Deploy <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
                </a>
            </div>
            <div>
                <h1>Ceci représente un titre h1 Ceci représente un titre h1 Ceci représente un titre h1 Ceci représente un titre h1</h1>
                <h2>Ceci représente un titre h2 Ceci représente un titre h2 Ceci représente un titre h2 Ceci représente un titre h2</h2>
                <h3>Ceci représente un titre h3 Ceci représente un titre h3 Ceci représente un titre h3 Ceci représente un titre h3</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione consectetur ex rerum eligendi amet veniam fugiat maxime laudantium iste
                    cum! <a href="#">Maxime voluptas autem laboriosam</a> incidunt est sit ab eligendi officiis a ad distinctio, nemo eum consectetur expedita
                    magnam nam quisquam vel eos debitis! Cumque quasi adipisci praesentium, corrupti dignissimos, possimus ullam exercitationem repellat atque
                    hic eveniet neque, suscipit esse sint corporis voluptas repudiandae quia consequuntur! Ea eius quaerat quibusdam aspernatur? Obcaecati
                    aliquam dolores ipsam, odio ut similique ea quod nobis cum, vero minima atque sint labore provident culpa a quia aut animi porro deserunt
                    illum, magni eos totam. Quod a ullam odit nesciunt mollitia enim exercitationem dignissimos nam tenetur obcaecati at, porro commodi veniam
                    molestias fuga. Nesciunt dolore exercitationem magnam saepe molestias nulla vero iusto rem beatae mollitia sit pariatur incidunt fugit,
                    repellat sed ad, voluptatibus consequatur. Ex dolorem ea veniam placeat non aliquid quibusdam aperiam obcaecati, quae ratione repellendus
                    natus id corporis, inventore veritatis accusamus deleniti rem deserunt magnam repudiandae odit iusto vitae, aliquam enim. Quasi velit
                    laborum nam facere ad veniam consectetur vitae quia optio ex quisquam eaque id officiis perferendis iusto, repudiandae nisi modi sunt animi
                    exercitationem voluptatibus. Esse illum suscipit, odio nemo eos tenetur id quia autem placeat aliquam cupiditate. Excepturi ipsam culpa ex
                    blanditiis laudantium omnis architecto ad quos eveniet unde rerum reiciendis, vero, quae aliquam maiores? Possimus fugiat ab sequi quis rem
                    debitis vel at eligendi placeat consequatur repellendus temporibus facilis nobis ut.
                </p>
                <p>
                    Laudantium a dolorum sed corrupti tenetur iure aperiam dolor nostrum! Libero, ipsam minima. Commodi pariatur, recusandae ea expedita totam
                    ipsa enim dolorem maxime. Voluptatum voluptate nostrum dignissimos temporibus quasi iusto maxime iste voluptatem illum similique unde
                    perspiciatis velit repudiandae rem ducimus, sint consequuntur voluptatibus, et, eaque harum molestiae? Neque distinctio est quae assumenda
                    laborum commodi cumque labore voluptatum ea dolorem mollitia ipsa eligendi, odio praesentium reiciendis modi fuga officiis exercitationem
                    quo inventore dolore architecto natus! Esse dolores dolorum ipsa voluptates, quisquam libero voluptatibus ea inventore rerum autem
                    distinctio nemo, ipsum, qui molestiae consectetur explicabo? Corporis exercitationem culpa, illo ad praesentium, nemo laborum recusandae,
                    temporibus repellendus quaerat illum harum id. Provident, itaque modi molestias, enim nostrum aliquid illo nesciunt a necessitatibus
                    accusamus tempore ex distinctio facere expedita natus nam, dolorem est laboriosam deleniti vero recusandae! Eaque laborum aliquid amet,
                    quibusdam eius totam repudiandae modi libero architecto tempore sequi laudantium voluptatem inventore commodi numquam. Facilis maxime
                    dolorem nobis repellat ipsam eum a maiores soluta, in animi? Distinctio, reiciendis! Nihil, dignissimos commodi quisquam ipsum maiores sequi
                    officiis perferendis? Inventore, quam architecto.
                </p>
                <p>
                    Quidem aliquam consequatur ipsum provident numquam earum dolor aspernatur illum tempora excepturi. Rem inventore fuga eligendi quibusdam
                    amet iusto saepe iste impedit aspernatur voluptatem sit vel, provident voluptates error veniam vero, dolorum ea modi. Delectus tempore
                    maxime eaque laborum aspernatur fugiat quae dignissimos. Aperiam, provident corrupti possimus alias quaerat cumque voluptate quia dolores
                    sequi, asperiores, illum tempora! Iusto aspernatur labore soluta assumenda architecto quidem dolorem ut, vero, fuga expedita totam possimus
                    dolorum atque molestias, pariatur ipsa! Ad, quo. Illo tenetur eum quasi expedita reprehenderit libero qui? Dolor, corporis consequatur? Quas
                    inventore voluptatem, perferendis voluptatibus eos illo magnam aut laboriosam officiis distinctio qui velit deleniti nemo. Eos ipsa pariatur
                    non soluta sapiente doloremque, repellendus iure nostrum vero fuga molestias in sequi repellat veniam officia aliquid at quam illo
                    consequatur numquam voluptate consectetur velit ut! Officia minus excepturi, illum quam impedit incidunt non, dicta minima nisi maiores
                    totam officiis quod quo explicabo qui omnis laudantium asperiores quae beatae deleniti. Assumenda, magni veritatis aperiam, sequi, iusto
                    inventore quibusdam similique molestiae magnam a repudiandae eos doloribus architecto soluta aliquam blanditiis. Itaque enim, debitis iste
                    vero dignissimos nostrum accusantium maxime laborum suscipit expedita! Eius sunt ducimus quia harum soluta maiores perspiciatis voluptate
                    veritatis. Asperiores accusantium culpa eius nemo consequatur sint consectetur neque? Cum doloremque ab, necessitatibus consectetur itaque
                    nesciunt corrupti magnam facere modi officiis optio.
                </p>
                <p>
                    Accusantium labore non deserunt suscipit eos incidunt laborum itaque, ipsam minus repellendus adipisci, placeat debitis. Nihil minus rerum
                    dignissimos harum, quod ipsam officia voluptates et, sint soluta repudiandae. Ratione iste praesentium possimus soluta excepturi alias vel
                    numquam dolorum maxime! Obcaecati et mollitia modi sapiente deserunt, eveniet eos! Incidunt sapiente repudiandae mollitia soluta nesciunt
                    aspernatur voluptate provident laudantium, aut cum ducimus odio est, repellat quis distinctio, possimus amet facilis rerum? Officia, enim
                    eveniet laborum officiis repudiandae sapiente debitis beatae excepturi deleniti veritatis ullam expedita explicabo molestias incidunt, sequi
                    cumque praesentium assumenda? Totam cumque voluptates cupiditate adipisci eos excepturi, quod perferendis repudiandae distinctio. Adipisci
                    tenetur repudiandae sunt veritatis, doloribus autem! Accusamus, aliquam labore! Eveniet eum libero minus ipsa accusamus porro eligendi,
                    autem ullam ab provident impedit facilis quasi illo dignissimos dolores cupiditate ut itaque corporis dolorem enim assumenda corrupti esse
                    iure magnam. Nesciunt, ipsam ad delectus rerum recusandae doloribus, labore et quo, itaque perferendis magnam? Modi non sequi corrupti
                    possimus et. Quos, aut natus! Facilis delectus optio ad eligendi vitae ipsam harum ullam autem inventore, possimus natus cum nihil, nam
                    corporis fugit excepturi esse aut eius dolorum iusto soluta consequuntur adipisci. Incidunt ab, sint excepturi corporis quo ex dolorum.
                    Dignissimos esse nisi perferendis quibusdam aut eos modi iure ipsum dolorem dolores nihil asperiores ad necessitatibus, mollitia eaque alias
                    illum perspiciatis eum numquam sit deserunt nam animi! Eligendi quis nostrum exercitationem molestias perferendis vitae temporibus
                    similique, placeat omnis. Corrupti, dolorem accusantium. Expedita esse eum mollitia harum iste corporis obcaecati beatae dolores suscipit,
                    optio maiores autem voluptatibus. Officiis, aut sed, natus omnis porro non odio excepturi magni ex, temporibus commodi quam nulla vitae
                    facere! Quo saepe minus modi nam tempora quaerat officiis eligendi similique unde necessitatibus nobis, quis animi numquam impedit explicabo
                    omnis eaque fuga beatae quos non ducimus? Provident blanditiis ea officia inventore velit eveniet at architecto nostrum voluptatem molestiae
                    ut iure, natus aperiam omnis explicabo commodi? Vel, illo modi! Doloribus ab quos sequi quo fugit iure impedit est laborum suscipit
                    assumenda, nulla dolorem deserunt! Quam vero nesciunt odit praesentium dolor rem quisquam est cupiditate aperiam ab commodi, veritatis
                    assumenda vel totam sapiente ratione animi necessitatibus maiores debitis doloribus doloremque molestiae explicabo omnis. Perferendis,
                    corporis nam.
                </p>
            </div>
        </main>
    );
}
