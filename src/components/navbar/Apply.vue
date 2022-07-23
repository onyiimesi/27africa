<template>

    <div class="applying">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="formapply border shadow-sm">
                        <div class="text-center">
                            <router-link to="/"><img src="../../assets/Group1.png" width="250" height="250" class="img-fluid" alt=""></router-link>
                        </div>

                        <div class="mt-5">
                            <h4 class="text-center">Funding Application</h4>
                            <p class="text-center">
                                Do you have a startup idea worthy of 27Africa`s funding?<br> Kindly submit your details and pitch deck below
                            </p>

                            <form @submit.prevent="">
                                <div class="mb-3">
                                    <label for="">Full Name</label><br>
                                    <input type="text" name="" id="" placeholder="Please enter your full name">
                                </div>

                                <div class="mb-3">
                                    <label for="">Email Address</label><br>
                                    <input type="text" name="" id="" placeholder="Provide an email address we can reach you">
                                </div>

                                <div class="mb-3">
                                    <label for="">Pitch Deck (max file size: 5mb)</label><br>
                                    <input type="file" name="" id="" placeholder="Click icon to upload file">
                                </div>

                                <router-link to="/"><p class="text-start">Got a cloud link instead?Click here to paste link</p></router-link>

                                <div class="text-center">
                                    <router-link to="/done"><button class="btn Btn5">Submit Application <img src="../../assets/Vector(2).png" class="img-fluid" width="14" height="14" alt=""></button></router-link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>