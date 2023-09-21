<Fragment>
<main class="flex flex-col non-prose">

<div class="-mb-20">
<img src={footer} alt="baner" class="object-cover h-[600px] lg:h-[1000px] w-full " />

</div>
<div class="bg-gray-900  md:px-10">
<p class="text-gray-500 md:pt-32 pt-10  font-bold pl-10 2xl:pl-40 ">
{grayText}
</p>
<div class="grid grid-cols-1 gap-5 items-center md:grid-cols-4 mt-1 justify-between not-prose ">
<h3 class="col-span-3 text-xl lg:text-5xl text-white font-bold xl:w-3/4 px-10 md:pl-10 md:pb-10 2xl:pl-40 ">
{footerText}
</h3>
<div class="pl-14 md:pl-0 py-10">
<button class="bg-red-700  text-sm py-4 px-8 whitespace-nowrap text-white rounded-lg lg:text-base font-bold">
Kontaktirajte nas  &rarr;
</button>
</div>

</div>
</div>
<div class="bg-black/90 flex flex-wrap justify-between px-5 md:px-10 2xl:px-20 text-white py-2  ">
<p class="text-sm md:text-base md:pl-28">
© <span id="year"></span> epepe.d.o.o
</p>
<p class="text-sm md:text-base whitespace-nowrap md:pr-28">
<a href="/impressum"><span class="hover:text-red-500">Impressum</span></a></p>  | <span class="hover:text-red-500">Politike privatnosti </span> | <span class="hover:text-red-500"><a href="/o-kolacicima">O kolačićima</a></span>
</div>

</main>

<script>
{() => {
document.querySelector('#year').textContent = new Date().getFullYear().toString();

}}
</script>
</Fragment>;