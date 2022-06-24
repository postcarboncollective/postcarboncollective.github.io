using System.Collections;

namespace Postcarbon.Models
{
    public class Sentient
    {
        public string Name { get; set; } = "Placeholder Name";
        public string Id { get; set; } = "assets/img/PostcarbonLogoWhite.png";
        public string Picture { get; set; } = "assets/img/PostcarbonLogoWhite.png";
        public string Bio { get; set; } = "Placeholder Biography";
        public List<string> Links { get; set; } = new List<string>();
    
    }
}
