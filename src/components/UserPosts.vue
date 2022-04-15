<template>
	<div class="wrapper">
		<h1>User Posts</h1>
		<div class="posts_wrapper">
			<div v-for="(post, i) in posts" :key="`post_${i}`" class="post_container">
				<div class="post">
					<h3>
					{{post.title}}
				</h3>
				<p>
					{{post.body}}
				</p>
			</div>
				</div>
		</div>
		<button @click="goBack" class="btn btn-primary"> Back </button>
	</div>
</template>

<script>
export default {
	name: 'UserPosts',
	data() {
		return {
			posts: [],
		}
	},
	methods: {
		goBack() {
			this.$router.back();
		},
		async fetchPosts() {
			this.posts = []
			const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.id}`);
			this.posts = await res.json()
		}
	},
	mounted() {
		this.fetchPosts();
	}
}
</script>

<style scoped>
	.posts_wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.post {
		border: 1px solid grey;
		height: 100%;
	}

	.post_container {
		width: 33%;
		padding-inline: 10px;
	}

	.post h3 {
		margin-bottom: .3rem;
	}
</style>