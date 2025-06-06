// import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1};
import { motion } from "motion/react";
import { TestimonialsColumn } from "./ui/testimonial-column";

const testimonials = [
	{
		text: "During our difficult time, the compassionate staff at Transitions provided exceptional care and support. They handled every detail with dignity and respect, allowing us to focus on honoring our loved one's memory.",
		image: "https://randomuser.me/api/portraits/women/1.jpg",
		name: "Sarah Thompson",
		role: "Family Member",
	},
	{
		text: "Words cannot express our gratitude for the gentle guidance and understanding shown by the Transitions team. They made a challenging time more bearable with their professionalism and genuine care.",
		image: "https://randomuser.me/api/portraits/men/2.jpg",
		name: "Michael Anderson",
		role: "Bereaved Son",
	},
	{
		text: "The attention to detail and personal touch provided by Transitions was truly comforting. They helped us create a beautiful and meaningful service that perfectly honored our mother's life.",
		image: "https://randomuser.me/api/portraits/women/3.jpg",
		name: "Emily Richardson",
		role: "Bereaved Daughter",
	},
	{
		text: "In our time of loss, Transitions provided a calming presence and guided us through every decision with patience and empathy. Their support was invaluable during this difficult journey.",
		image: "https://randomuser.me/api/portraits/men/4.jpg",
		name: "Robert Wilson",
		role: "Family Member",
	},
	{
		text: "The staff at Transitions went above and beyond to ensure every aspect of the service was perfect. Their compassionate approach helped make a difficult time more manageable.",
		image: "https://randomuser.me/api/portraits/women/5.jpg",
		name: "Patricia Martinez",
		role: "Bereaved Wife",
	},
	{
		text: "We are deeply grateful for the dignity and respect shown to our father and our family. Transitions helped us create a meaningful celebration of his life that we will always remember.",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
		name: "Jennifer Brooks",
		role: "Bereaved Daughter",
	},
	{
		text: "The professional and caring approach of the Transitions team provided great comfort during our time of grief. They handled everything with such grace and understanding.",
		image: "https://randomuser.me/api/portraits/men/7.jpg",
		name: "David Clark",
		role: "Family Member",
	},
	{
		text: "Transitions helped us navigate through this difficult time with extraordinary compassion. Their attention to detail and respectful guidance made all the difference.",
		image: "https://randomuser.me/api/portraits/women/8.jpg",
		name: "Linda Morrison",
		role: "Bereaved Sister",
	},
	{
		text: "We couldn't have asked for more caring and professional service. Transitions helped us honor our loved one's memory in a way that truly reflected their life and legacy.",
		image: "https://randomuser.me/api/portraits/men/9.jpg",
		name: "James Sullivan",
		role: "Family Member",
	},
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
	return (
		<section className="bg-background my-20 relative">
			<div className="container z-10 mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.8,
						delay: 0.1,
						ease: [0.16, 1, 0.3, 1],
					}}
					viewport={{ once: true }}
					className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
				>
					<div className="flex justify-center">
						<div className="border py-1 px-4 rounded-lg">Testimonials</div>
					</div>

					<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
						What our users say
					</h2>
					<p className="text-center mt-5 opacity-75">
						See what our customers have to say about us.
					</p>
				</motion.div>

				<div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
					<TestimonialsColumn testimonials={firstColumn} duration={15} />
					<TestimonialsColumn
						testimonials={secondColumn}
						className="hidden md:block"
						duration={19}
					/>
					<TestimonialsColumn
						testimonials={thirdColumn}
						className="hidden lg:block"
						duration={17}
					/>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;