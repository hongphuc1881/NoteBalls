<template>
    <div>
        <div class="has-background-grey-light p-3 mt-3 is-rounded">
            <div class="field">
                <div class="control">
                    <textarea class="textarea" type="text" placeholder="Text input"> </textarea>
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light">Cancel</button>
                </div>
            </div>
        </div>
        <div class="notes" v-for="i in 3">
            <div class="card my-3">
                <div class="card-content">
                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    </div>
                </div>
                <footer class="card-footer">
                    <a href="#" class="card-footer-item">Save</a>
                    <a href="#" class="card-footer-item">Edit</a>
                    <a href="#" class="card-footer-item">Delete</a>
                </footer>
            </div>
        </div>
    </div>
</template>
