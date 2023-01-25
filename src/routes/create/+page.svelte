<script>


</script>

<body class="font-mono">

    <h1>Create a New Club</h1>
    
    <form method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLSfW5glPWD5Hx8oixxzV-L45aKEubPgh2JAZHc6aX7pNuBFTJQ/formResponse" class="flex items-center flex-col py-8 rounded-md bg-gray-100">
        <div class="flex flex-row">
            <div class="flex flex-col">
                <label class="p-2 my-2 mr-2 text-right" for="name">Name</label>
                <label class="p-2 my-2 mr-2 text-right grow" for="description">Life Story</label>
                <label class="p-2 my-2 mr-2 items-end text-right" for="email">Email</label>
            </div>
            <div class="flex justify-center flex-col">
                <input name="entry.1520084642" required value="Sam" class="bg-gray-200 rounded-md p-2 my-2" placeholder="Name" id="name" type="text" />
                <textarea required name="entry.374746150" value="my life is great" class="bg-gray-200 rounded-md p-2 my-2" placeholder="Life Story" id="description" />
                <input required name="entry.1068603260" value="email@email.com" class="bg-gray-200 rounded-md p-2 my-2" placeholder="Email" id="email" type="email" />
            </div>
        </div>
        <div class="flex justify-center flex-row">
            <label class="p-2 my-2 text-right" for="terms">I agree to the terms and conditions.</label>
            <input required value="i agree" name="entry.803361658" id="terms" type="checkbox" class="bg-gray-400 text-white hover:cursor-pointer p-2 rounded-lg my-2" />
        </div>
        <button type="submit" class="bg-[#2a9d8f] text-white hover:cursor-pointer my-2 p-2 text-lg text-center border-solid border-[2.5px] border-black flex flex-col items-center shadow-black shadow-[5px_5px] hover:shadow-black hover:shadow-[7px_7px] transition-shadow">Create</button>
  </form>
</body>